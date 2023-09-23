import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route } from 'react-router-dom'
import Router from "./Router.jsx"
import "./index.css"
import store from './store/main.js'
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate } from 'react-router-dom';
import CancelConfirmationModal from './components/CancelConfirmationModal.jsx';
import AppRoutes from './AppRoutes.jsx'

const Main = () => {

  return (
    <BrowserRouter>
      <AppRoutes />
      <CancelConfirmationModal />
    </BrowserRouter>

  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Main />
  </Provider>
)
