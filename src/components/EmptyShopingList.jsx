import EmptydesignImg from '../assets/undraw_shopping_app_flsj 1.svg'
import { createShoppingListAsync } from '../store/shoppingList.js'
import { useDispatch, useSelector } from 'react-redux'
function EmptyShopingList() {
  const dispatch = useDispatch()
  const handleCreateShoppingList = () => {
    dispatch(createShoppingListAsync())
  }
  return (
    <div className='relative border-b-white  h-3/5 -bottom-8'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-xl font-semibold text-center mt-10'>You have no shopping list</h1>
        <button className=' w-fit px-6 rounded-md bg-orange-500 text-white py-1 pb-2 text-center' onClick={handleCreateShoppingList}>create</button>
      </div>
      <picture className=''>
        <img src={EmptydesignImg} className=' absolute bottom-0 right-10' alt="" srcset="" />
      </picture>
    </div>
  )
}

export default EmptyShopingList