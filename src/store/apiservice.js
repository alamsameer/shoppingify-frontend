// services/api.js
import axios from 'axios';

const token=JSON.parse(localStorage.getItem("token"))
console.log(token);
const instance = axios.create({
  baseURL: 'https://shoppingify-backend-seven.vercel.app/api', // Set your API base URL here
},);
const getToken = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  return token ? `Bearer ${token}` : '';
};

const authenticatedInstance = axios.create({
  baseURL: 'https://shoppingify-backend-seven.vercel.app/api',
  headers: {
    'Authorization': getToken(),
  },
});

// Update the token when it changes
export const updateToken = () => {
  authenticatedInstance.defaults.headers['Authorization'] = getToken();
};

// Add a request interceptor to update the token on each request
authenticatedInstance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = getToken();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// login 
export const login = (data) => instance.post('/signin', data);
// register
export const register = (data) => instance.post('/signup', data);
// logout
export const logout = () => instance.post('/logout');

// for items
export const fetchItems = () => instance.get('/items');
export const fetchCategoryItems = (categoryId) => instance.get(`/items/${categoryId}`);
export const fetchItemDetails = (itemId) => instance.get(`/item/${itemId}`);
export const fetchItemsByPage = (page, perPage) => instance.get('/items', { params: { page, perPage } });
export const addItemtodb = (data) => instance.post('/add-item', data);
// for categories
export const fetchCategories = () => instance.get('/categories');
export const addCategory = (data) => instance.post('/add-category', data);
// for shoping list
export const createShoppingList = (data) => authenticatedInstance.post('/shopping-list/create', data);
export const addItemToShoppingList = (data) => authenticatedInstance.post('/shopping-list/add-item', data);
export const deleteItemFromShoppingList = (data) => authenticatedInstance.delete('/shopping-list/delete-item', { data });
export const updateShoppingListStatus = (data) => authenticatedInstance.put('/shopping-list/status', data);
export const updateItemStatus = (data) => authenticatedInstance.put('/shopping-list/item-status', data);
export const updateShoppingListName = (data) => authenticatedInstance.put('/shopping-list/update-name', data);
export const getActiveShoppingList = () => authenticatedInstance.get('/shopping-list/active');
export const getAllShoppingLists = () => authenticatedInstance.get('/shopping-lists');

//  for Statistic
export const getTopCategories=()=>authenticatedInstance.get("/top-categories")
export const getTopItems=()=>authenticatedInstance.get("/top-items")
export const getCategoryWithinTimeInterval=(data)=>authenticatedInstance.post("/time-interval",data)

export default instance;
