import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Category from '../components/Category';
import { fetchCategoriesAsync } from '../store/categories.js'
import { fetchItemsAsync } from '../store/item.js'
import {getAllShoppingListsAsync} from "../store/shoppingList.js"
import { useEffect } from 'react';
import Loader from '../components/Loader';
function Home() {
  const dispatch = useDispatch();
  const { items, loading,error } = useSelector((state) => state.items)
  useEffect(() => {
    dispatch(fetchItemsAsync())//getting items category wise 
    dispatch(getAllShoppingListsAsync())//getting all shopping lists
  }, [])
  return (
    <div className='overflow-y-scroll pb-10 px-5  custom-scrollbar h-screen'>
          {
           !loading ?(items && items.map((category) => {
              return <Category key={category._id} category={category} />
            })):<Loader/>
          }
          {
            error&&<div className="text-red-500 text-2xl font-bold">{error}</div>
          }
      </div>
  )
}

export default Home