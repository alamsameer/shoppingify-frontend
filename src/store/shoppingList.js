import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getActiveShoppingList, getAllShoppingLists, createShoppingList, addItemToShoppingList, deleteItemFromShoppingList, updateShoppingListStatus, updateItemStatus, updateShoppingListName } from './apiservice';

export const createShoppingListAsync = createAsyncThunk(
    'shoppinglist/createShoppingList',
    async (shoppinglist) => {
        const response = await createShoppingList(shoppinglist);
        return response.data;
    }
);

export const getActiveShoppingListAsync = createAsyncThunk(
    'shoppinglist/getActiveShoppingList',
    async () => {
        const response = await getActiveShoppingList();
        return response.data;
    }
);

export const getAllShoppingListsAsync = createAsyncThunk(
    'shoppinglist/getAllShoppingLists',
    async () => {
        const response = await getAllShoppingLists();
        return response.data;
    }
);


export const addItemToShoppingListAsync = createAsyncThunk(
    'shoppinglist/addItemToShoppingList',
    async (item) => {
        const response = await addItemToShoppingList(item);
        return response.data;
    }
);

export const deleteItemFromShoppingListAsync = createAsyncThunk(
    'shoppinglist/deleteItemFromShoppingList',
    async (item) => {
        const response = await deleteItemFromShoppingList(item);
        return response.data;
    }
);

export const updateShoppingListStatusAsync = createAsyncThunk(
    'shoppinglist/updateShoppingListStatus',
    async (shoppingliststatus) => {
        const response = await updateShoppingListStatus(shoppingliststatus);
        return response.data;
    }
);

export const updateItemStatusAsync = createAsyncThunk(
    'shoppinglist/updateItemStatus',
    async (itemstatus) => {
        const response = await updateItemStatus(itemstatus);
        return response.data;
    }
);

export const updateShoppingListNameAsync = createAsyncThunk(
    'shoppinglist/updateShoppingListName',
    async (shoppinglistname) => {
        const response = await updateShoppingListName(shoppinglistname);
        return response.data;
    }
);

const initialState = {
    activeShoppingList: [],
    shoppingLists: [],
    shoppingListDetail: {},
    loading: false,
    error: null,
};

const shoppingListSlice = createSlice({
    name: 'shoppinglist',
    initialState,
    reducers: {
        setShoppingName: (state, action) => {
            console.log(action.payload);
            state.activeShoppingList[0].name = action.payload;
        },
        increaseItemCount: (state, action) => {
            console.log(action.payload);
            let findIndex = state.activeShoppingList[0].items.findIndex((item) => {
                console.log(item.item._id);
                return item.item._id == action.payload
            })
            console.log(findIndex);
            if (findIndex != -1) {
                state.activeShoppingList[0].items[findIndex].total++
            }
        },
        decreaseItemCount: (state, action) => {
            console.log(action.payload);
            let findIndex = state.activeShoppingList[0].items.findIndex((item) => {
                console.log(item.item._id);
                return item.item._id == action.payload
            })
            console.log(findIndex);
            if (findIndex != -1) {
                state.activeShoppingList[0].items[findIndex].total--
            }
        },
        deleteItem: (state, action) => {
            let findIndex = state.activeShoppingList[0].items.findIndex((item) => {
                return item.item._id == action.payload
            })
            if (findIndex != -1) {
                state.activeShoppingList[0].items.splice(findIndex, 1)
            }
        },
        updateshoppingStatus: (state, action) => {
            state.activeShoppingList[0].status = action.payload;
            state.shoppingLists.push(state.activeShoppingList[0])
            state.activeShoppingList = []
            console.log(state.shoppingLists);
        },
        setShoppingListDetail: (state, action) => {
            let findIndex = state.shoppingLists.findIndex((item) => {
                return item._id == action.payload
            })
            if (findIndex != -1) {
                state.shoppingListDetail = state.shoppingLists[findIndex]
            } else {
                state.shoppingListDetail = {}
            }
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getActiveShoppingListAsync.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getActiveShoppingListAsync.fulfilled, (state, action) => {
            state.activeShoppingList = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(getActiveShoppingListAsync.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
        builder.addCase(getAllShoppingListsAsync.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllShoppingListsAsync.fulfilled, (state, action) => {
            state.shoppingLists = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(getAllShoppingListsAsync.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
        builder.addCase(createShoppingListAsync.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createShoppingListAsync.fulfilled, (state, action) => {
            state.activeShoppingList = action.payload
            state.loading = false;
            state.error = null;
        });
        builder.addCase(createShoppingListAsync.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
        builder.addCase(addItemToShoppingListAsync.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addItemToShoppingListAsync.fulfilled, (state, action) => {
            state.activeShoppingList.items.push(action.payload);
            state.loading = false;
            state.error = null;
        });
        builder.addCase(addItemToShoppingListAsync.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
        builder.addCase(deleteItemFromShoppingListAsync.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteItemFromShoppingListAsync.fulfilled, (state, action) => {
            state.activeShoppingList.items = state.activeShoppingList.items.filter((item) => item._id
                !== action.payload._id);
            state.loading = false;
            state.error = null;
        }
        );
        builder.addCase(deleteItemFromShoppingListAsync.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
        builder.addCase(updateShoppingListStatusAsync.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateShoppingListStatusAsync.fulfilled, (state, action) => {
            state.activeShoppingList.name = action.payload;
            state.loading = false;
        });
        builder.addCase(updateShoppingListStatusAsync.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });

        builder.addCase(updateItemStatusAsync.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateItemStatusAsync.fulfilled, (state, action) => {
            state.activeShoppingList.items = state.activeShoppingList.items.map((item) => {
                if (item._id === action.payload._id) {
                    return action.payload;
                }
                return item;
            });
            state.loading = false;
        });
        builder.addCase(updateItemStatusAsync.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
        builder.addCase(updateShoppingListNameAsync.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(updateShoppingListNameAsync.fulfilled, (state, action) => {
            state.activeShoppingList.name = action.payload;
            state.loading = false;
        });

        builder.addCase(updateShoppingListNameAsync.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });

    }
});
export const { setShoppingName, increaseItemCount, decreaseItemCount, deleteItem, updateshoppingStatus,setShoppingListDetail } = shoppingListSlice.actions
export default shoppingListSlice.reducer;