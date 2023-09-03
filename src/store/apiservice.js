// services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://shoppingify-backend-three.vercel.app/api', // Set your API base URL here
});

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
export const createShoppingList = (data) => instance.post('/shopping-list/create', data);
export const addItemToShoppingList = (data) => instance.post('/shopping-list/add-item', data);
export const deleteItemFromShoppingList = (data) => instance.delete('/shopping-list/delete-item', { data });
export const updateShoppingListStatus = (data) => instance.put('/shopping-list/status', data);
export const updateItemStatus = (data) => instance.put('/shopping-list/item-status', data);
export const updateShoppingListName = (data) => instance.put('/shopping-list/update-name', data);
export const getActiveShoppingList = () => instance.get('/shopping-list/active');
export const getAllShoppingLists = () => instance.get('/shopping-lists');

//  for Statistic
export const getTopCategories=()=>instance.get("/top-categories")
export const getTopItems=()=>instance.get("/top-items")
export const getCategoryWithinTimeInterval=(data)=>instance.post("/time-interval",data)

export default instance;
