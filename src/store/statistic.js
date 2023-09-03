import { createAsyncThunk ,createSlice, } from "@reduxjs/toolkit";
import { getTopItems, getTopCategories,getCategoryWithinTimeInterval } from "./apiservice";

export const getTopItemsAsync = createAsyncThunk('statistic/gettopitems', async () => {
    const response = await getTopItems(); 
    return response.data;
});

export const getTopCategoriesAsync = createAsyncThunk('statistic/gettopcategories', async () => {
    const response = await getTopCategories();
    return response.data;
});

export const getCategoryWithinTimeIntervalAsync = createAsyncThunk('statistic/getcategorywithintimeinterval', async (data) => {
    console.log("data",data);
    const response = await getCategoryWithinTimeInterval(data); 
    console.log(response);
    return response.data;
});




const initialState = {
    topItems: [],
    topCategories: [],
    categoryWithinTimeInterval:[],
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
            })
            .addCase(getCategoryWithinTimeIntervalAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCategoryWithinTimeIntervalAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.categoryWithinTimeInterval = action.payload; 
                state.error = null;
            })
            .addCase(getCategoryWithinTimeIntervalAsync.rejected, (state, action) => { 
                state.loading = false;
                state.error = action.error.message;
            });

    },
});

export default shoppingStatisticSlice.reducer;
