import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import {fetchItems, fetchItemDetails, fetchItemsByPage, addItemtodb} from './apiservice';

export const fetchItemsAsync = createAsyncThunk(
    'items/fetchItems',
    async () => {
        const response = await fetchItems();
        return response.data;
    }
);

export const fetchItemDetailsAsync = createAsyncThunk(
    'items/fetchItemDetails',
    async (itemId) => {
        const response = await fetchItemDetails(itemId);
        return response.data;
    }
);

export const fetchItemsByPageAsync = createAsyncThunk(
    'items/fetchItemsByPage',
    async ({page, perPage}) => {
        const response = await fetchItemsByPage(page, perPage);
        return response.data;
    }
);

export const addItemAsync = createAsyncThunk(
    'items/addItem',
    async (item) => {
        const response = await addItemtodb(item);
        return response.data;
    }
);

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const itemSlice=createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem:(state,action)=>{
            console.log("inside reducer aaddItem",action.payload);
            for(let i=0;i<state.items.length;i++){
                if(state.items[i].categoryName===action.payload.category){
                    state.items[i].items.push(action.payload);
                    return;
                }
            }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchItemsAsync.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchItemsAsync.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchItemsAsync.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
        builder.addCase(fetchItemDetailsAsync.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchItemDetailsAsync.fulfilled, (state, action) => {
            state.itemDetails = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchItemDetailsAsync.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
        builder.addCase(fetchItemsByPageAsync.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchItemsByPageAsync.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
        });
        
        builder.addCase(fetchItemsByPageAsync.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
        builder.addCase(addItemAsync.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(addItemAsync.fulfilled, (state, action) => {
            state.items.push(action.payload);
            state.loading = false;
        });
        builder.addCase(addItemAsync.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });

    }
})
export const {addItem}=itemSlice.actions
export default itemSlice.reducer;