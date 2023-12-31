import {configureStore} from '@reduxjs/toolkit';
import itemReducer from './item.js'
import categoryReducer from './categories.js'
import shoppingReducer from './shoppingList.js'
import statisticReducer from './statistic.js';
import viewReducer from './view.js'
import authReducer from './auth.js'
const store=configureStore({
    reducer:{
        items:itemReducer,
        categories:categoryReducer,
        shoppinglist:shoppingReducer,
        view:viewReducer,
        statistic:statisticReducer, 
        auth:authReducer,
    }
})

export default store