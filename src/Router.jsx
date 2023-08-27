import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Error from  "./pages/Error.jsx"
import  Home from "./pages/Home.jsx"
import History from "./pages/History.jsx"
import Statistics from "./pages/Statistics.jsx"
const Router =createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    errorElement:<Error/>,
  },
  {
    path: "history",
    element:<History/>,
    errorElement:<Error/>,
  },
  {
    path: "stats",
    element:<Statistics/>,
    errorElement:<Error/>,
  },
])


export default Router 