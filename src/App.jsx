import { useState } from "react"
import Navbar from "./components/Navbar.jsx"
import { Outlet } from "react-router-dom"
import Home from "./pages/Home.jsx"
import History from "./pages/History.jsx"
import Statistics from "./pages/Statistics.jsx"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getActiveShoppingListAsync } from './store/shoppingList.js'
import ShoppingContainer from "./components/ShoppingContainer.jsx"
import AddItemForm from "./components/AddItemForm.jsx"
import ItemDetail from "./components/ItemDetail.jsx"
import HistoryDetail from "./pages/HistoryDetail.jsx"
function App() {
    const [isVisible, setIsVisible] = useState(false)
    const { typeContainer } = useSelector(state => state.view)
    const toggleShoppinglist = () => setIsVisible(!isVisible)
    const { isSideBarVisisble } = useSelector(state => state.view)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getActiveShoppingListAsync())
    }, [])
    return (
        <div className="flex">
            <Navbar />
            <div className='flex-1 relative  flex   bg-slate-100  text-slate-900'>
                <div className="flex-1">
                    <Outlet/>
                </div>
                {isSideBarVisisble && (
                    <div className="absolute bg-white top-0 right-0 left-0 bottom-0 sm:relative sm:w-80 md:w-96">
                        {typeContainer === 'shopping' && <ShoppingContainer />}
                        {typeContainer === 'addItem' && (
                            <AddItemForm />
                        )}
                        {typeContainer === 'itemDetail' && (
                            <ItemDetail />
                        )}
                    </div>
                )}
            </div>

        </div>
    )
}

export default App