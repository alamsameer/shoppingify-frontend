import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTopItems, getTopCategories } from "./apiservice.js";

export const getTopItemsAsync = createAsyncThunk('statistic/gettopitems', async () => {
    const response = await getTopItems();
    return response.data;
});

export const getTopCategoriesAsync = createAsyncThunk('statistic/gettopcategories', async () => {
    const response = await getTopCategories();
    return response.data;
});

const initialState = {
    topItems: [],
    topCategories: [],
    loading: false,
    error: null, // Initialize error as null
};

const shoppingStatisticSlice = createSlice({
    name: "statistic",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTopCategoriesAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(getTopCategoriesAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.topCategories = action.payload; // Corrected: action.payload
                state.error = null;
            })
            .addCase(getTopCategoriesAsync.rejected, (state, action) => { // Corrected: .rejected instead of .error
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getTopItemsAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(getTopItemsAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.topItems = action.payload; // Corrected: action.payload
                state.error = null;
            })
            .addCase(getTopItemsAsync.rejected, (state, action) => { // Corrected: .rejected instead of .error
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default shoppingStatisticSlice.reducer;
