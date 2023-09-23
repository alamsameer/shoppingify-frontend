import { Routes, Route,Navigate } from "react-router-dom"
import { useSelector } from 'react-redux'

import CheckAuth from './components/CheckAuth.jsx'
import App from './App.jsx';
import Home from "./pages/Home.jsx";
import History from "./pages/History.jsx";
import HistoryDetail from "./pages/HistoryDetail.jsx";
import Statistics from "./pages/Statistics.jsx";
import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx"


// Component for the 404 Not Found page
const NotFound = () => <h2>404 - Page Not Found</h2>;
 function AppRoutes() {
    const { user } = useSelector(state => state.auth)
    return (
        <Routes>
            <Route path='/' element={<CheckAuth><App /></CheckAuth>} >
            
            <Route index element={<Home />} />
            <Route path="/history" element={<History />} >
            </Route>
            <Route path="/history/:id" element={<HistoryDetail />} />
            <Route path="/stats" element={<Statistics />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          {user ? <Route path='/login' element={<Navigate to={"/"} />} /> : <Route path='/login' element={<Login />} />}
          {user ? <Route path='/register' element={<Navigate to="/" />} /> : <Route path='/register' element={<Register />} />}
        </Routes>
    )
}

export default AppRoutes