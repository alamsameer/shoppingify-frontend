import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {fetchCategories,addCategory} from './apiservice';

export const fetchCategoriesAsync = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const response = await fetchCategories();
        return response.data;
    }
);

export const addCategoryAsync = createAsyncThunk(
    'categories/addCategory',
    async (category) => {
        const response = await addCategory(category);
        return response.data;
    }
);

const initialState = {
    categories: [],
    loading: false,
    error: null,
};

const categorySlice=createSlice({
    name: 'categories',
    initialState,
    reducers: {
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCategoriesAsync.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchCategoriesAsync.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
        builder.addCase(addCategoryAsync.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addCategoryAsync.fulfilled, (state, action) => {
            state.categories.push(action.payload);
            state.loading = false;
        });
        builder.addCase(addCategoryAsync.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
    }
});


export default categorySlice.reducer;