// Define Items action types
const SET_ITEMS = 'SET_ITEMS';
const ADD_ITEM = 'ADD_ITEM';


// Define action creators for items 
export const setItems = (items) => ({
    type: SET_ITEMS,
    payload: items,
  });
export const addItem = (item) => ({ 
    type: ADD_ITEM,
    payload: item,
    });
  
const SET_CATEGORY = 'SET_CATEGORY';
const ADD_CATEGORY = 'ADD_CATEGORY';
export const setCategory = (categoryItems) => ({
    type: SET_CATEGORY,
    payload: categoryItems,
  });

export const addCategory = (category) => ({
    type: ADD_CATEGORY,
    payload: category,
});

// Define ShoppingList action types
const SET_SHOPPING_LIST = 'SET_SHOPPING_LIST';
const SET_ACTIVE_SHOPPING_LIST = 'SET_ACTIVE_SHOPPING_LIST';
const ADD_ITEM_TO_SHOPPING_LIST = 'ADD_ITEM_TO_SHOPPING_LIST';
const UPDATE_ITEM_STATUS = 'UPDATE_ITEM_STATUS';
const UPDATE_SHOPPING_LIST_STATUS = 'UPDATE_SHOPPING_LIST_STATUS';
const UPDATE_SHOPPING_LIST_NAME = 'UPDATE_SHOPPING_LIST_NAME';

// Define action creators for shopping list
export const setShoppingList = (shoppingList) => ({
    type: SET_SHOPPING_LIST,
    payload: shoppingList,// an array of shopping lists
    });
export const setActiveShoppingList = (shoppingList) => ({
    type: SET_ACTIVE_SHOPPING_LIST,
    payload: shoppingList, // a single shopping list
    });
export const addItemToShoppingList = (item) => ({
    type: ADD_ITEM_TO_SHOPPING_LIST,
    payload: item, // a single item
    });
export const updateItemStatus = (itemstatus) => ({
    type: UPDATE_ITEM_STATUS,
    payload: itemstatus, // a single item
    });
export const updateShoppingListStatus = (shoppingliststatus) => ({
    type: UPDATE_SHOPPING_LIST_STATUS,
    payload: shoppingliststatus, // changing the status of a active shopping list
    });
export const updateShoppingListName = (shoppinglistname) => ({
    type: UPDATE_SHOPPING_LIST_NAME,
    payload: shoppinglistname, // changing the name of a active shopping list
 });

