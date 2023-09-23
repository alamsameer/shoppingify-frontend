import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import {login,register,logout} from './apiservice';

export const loginAsync = createAsyncThunk(
    'auth/login',
    async (data) => {
        const response = await login(data);
        return response.data;
    }
);

export const registerAsync = createAsyncThunk(
    'auth/register',
    async (data) => {
        const response = await register(data);
        return response.data;
    }
);

export const logoutAsync = createAsyncThunk(
    'auth/logout',
    async () => {
        console.log("logout");
        const response = await logout();
        return response.data;
    }
);

const initialState = {
    user:null,
    token:null,
    authloading: false,
    autherror: null,
};

const authSlice=createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutuser: (state) => {
            localStorage.removeItem('user');
            state.user = null;
        },
        setUser:(state)=>{
            const user = JSON.parse(localStorage.getItem('user'));
            const token=JSON.parse(localStorage.getItem("token"))
            if (user && token) {
                state.user = user;
                state.token=token
            } else {
                state.user = null;
                state.token=null
            }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(loginAsync.pending, (state) => {
            console.log("state.authloading",state.authloading);
            state.authloading = true;
        });
        builder.addCase(loginAsync.fulfilled, (state, action) => {
            const {user,token,message}=action.payload
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', JSON.stringify(token));

            console.log({user,token,message});
            state.user = action.payload;
            state.authloading = false;
        });
        builder.addCase(loginAsync.rejected, (state, action) => {
            localStorage.removeItem('user');
            state.autherror = action.error.message;
            state.authloading = false;
        });
        builder.addCase(registerAsync.pending, (state) => {
            state.authloading = true;
        });
        builder.addCase(registerAsync.fulfilled, (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.user = action.payload;
            state.authloading = false;
        });
        builder.addCase(registerAsync.rejected, (state, action) => {
            state.autherror = action.error.message;
            state.authloading = false;
        });
        builder.addCase(logoutAsync.pending, (state) => {
            state.authloading = true;
        }
        );
        builder.addCase(logoutAsync.fulfilled, (state, action) => {
            state.user = null;
            state.authloading = false;
        });
        builder.addCase(logoutAsync.rejected, (state, action) => {
            state.autherror = action.error.message;
            state.authloading = false;
        });

    }
});


export const { logoutuser,setUser} = authSlice.actions;

export default authSlice.reducer;