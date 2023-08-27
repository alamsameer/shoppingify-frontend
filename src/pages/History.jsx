import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { getAllShoppingListsAsync } from "../store/shoppingList.js"
import Loader from '../components/Loader.jsx'
import ShoppingHistory from '../components/ShoppingHistoryComp.jsx'
function History() {

  const { shoppingLists } = useSelector(state => state.shoppinglist)
  return (
    <div className='h-screen flex-1 bg-slate-100 flex flex-col justify-center items-center   text-slate-900 overflow-y-scroll custom-scrollbar relative'>
      <h1 className='text-2xl font-bold relative bottom-4'>Your Shopping History</h1>
      {
        shoppingLists && (<div className=' w-full flex flex-col justify-center items-center gap-4 p-5 '>
          {shoppingLists.map((list) => {
            return <ShoppingHistory key={list._id} list={list} />
          })}
        </div>)
      }
      <Outlet />

    </div>

  )
}

export default History