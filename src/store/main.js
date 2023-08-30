import {configureStore} from '@reduxjs/toolkit';
import itemReducer from './item.js'
import categoryReducer from './categories.js'
import shoppingReducer from './shoppingList.js'
import statisticReducer from './statistic.js';
import viewReducer from './view.js'
const store=configureStore({
    reducer:{
        items:itemReducer,
        categories:categoryReducer,
        shoppinglist:shoppingReducer,
        view:viewReducer,
        statistic:statisticReducer
    }
})

export default store