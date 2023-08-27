import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
  isModalOpen: false,
  typeContainer:"shopping",
  isSideBarVisisble:false,
  itemDetail:{}
};
const view = createSlice({
  name: 'view',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    setTypeContainer:(state,action)=>{
        state.typeContainer=action.payload
    },
    setItemDetail:(state,action)=>{
        state.itemDetail=action.payload
    },
    setSideBarVisisble:(state,action)=>{
        state.isSideBarVisisble=action.payload
    },
    toggleSideBar:(state)=>{
        state.isSideBarVisisble=!state.isSideBarVisisble
    }
  },
});

export const { toggleDarkMode, openModal, closeModal,setTypeContainer,setItemDetail,toggleSideBar,setSideBarVisisble } = view.actions;
export default view.reducer;