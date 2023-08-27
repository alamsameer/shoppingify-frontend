import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import Router from "./Router.jsx"
import "./index.css"
import store from './store/main.js'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import CancelConfirmationModal from './components/CancelConfirmationModal.jsx';

const Main=()=>{
  return(
    <React.StrictMode>
      {/* <RouterProvider router={Router} /> */}
      <BrowserRouter>
        <App />
         {/* Render the modal */}
       <CancelConfirmationModal/>
      </BrowserRouter>
    </React.StrictMode>
    
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Main/>
  </Provider>
)
