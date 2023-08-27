import {BiPlus} from "react-icons/bi"
import {addItemToShoppingList} from '../store/apiservice.js'
import { useDispatch } from "react-redux"
import{getActiveShoppingListAsync} from "../store/shoppingList.js"
import {setTypeContainer,setItemDetail,setSideBarVisisble} from "../store/view.js"
function Item({item,categoryName}) {
    const{_id,name}=item
    const dispatch=useDispatch()
    const handleAddItem=async()=>{
        console.log("add item to shopping list");
        await addItemToShoppingList({id:_id,count:1})
        dispatch(getActiveShoppingListAsync())

    }
    const handleParentClick=(e)=>{
        e.stopPropagation()
        console.log("parent clicked");
        const itemToDetail={...item,category:categoryName}
        dispatch(setItemDetail(itemToDetail))
        dispatch(setTypeContainer("itemDetail"))
        dispatch(setSideBarVisisble(true))

    }

  return (
    <div className=" cursor-pointer bg-white p-2 flex items-center justify-center gap-2 sm:gap-5 md:gap:10 rounded-xl shadow-lg shadow-white-500/40 md:max-w-[80%]" >
        <span className="flex-1" onClick={(e)=>{handleParentClick(e)}}>{name}</span>
        <span onClick={handleAddItem}><BiPlus/></span>
    </div>
  )
}

export default Item