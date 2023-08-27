import ShoppingCategory from "./ShoppingCategory"
import bottleimg from '../assets/source.svg'
import { FaPen } from "react-icons/fa"
import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setShoppingName, updateshoppingStatus } from "../store/shoppingList.js"
import {updateShoppingListStatus} from '../store/apiservice.js'
import { openModal } from "../store/view"
import ActiveShoppingList from "./ActiveShoppingList"
import EmptyShopingList from "./EmptyShopingList"
import Loader from "./Loader"
import{updateShoppingListName} from "../store/apiservice.js"
import {setTypeContainer} from "../store/view.js"
function ShoppingContainer() {
    const [isEditing, setIsEdititng] = useState(false)
    const [listname, setListname] = useState("")
    const { activeShoppingList,loading } = useSelector(state => state.shoppinglist)  
    const dispatch = useDispatch()
    const handelSave=()=>{
        setIsEdititng(false)
        dispatch(setShoppingName(listname))
        try{
            updateShoppingListName({name:listname})
        }catch(e){

        }
    }
    let extractCategories = () => {
        console.log("inside extract",activeShoppingList);
        if(activeShoppingList.length != 0){
            console.log(activeShoppingList[0].items );
            if(activeShoppingList[0].items.length !=0){

                const category = activeShoppingList[0].items.map((item) => {
                    return item.item.category[0].name
                })
                return [...new Set(category)]
            }
        }
        return []

    }
    const handleComplete=()=>{
        dispatch(updateshoppingStatus("completed"))
        try{
          updateShoppingListStatus({status:"completed"})
        }catch(e){
          console.log(e)
        }
    }
    const handleAddItem=()=>{
        dispatch(setTypeContainer("addItem"))
    }
    const uniqueCategories = extractCategories()
    return (
        <div className="absolute bg-white top-0 right-0 left-0 bottom-0 sm:relative sm:w-80 md:w-96">
            <div className="p-5 bg-orange-300 h-screen relative">
                <div className="">
                    <div className="addItem flex place-items-center  gap-10  bg-orange-700 p-2 rounded-xl ">
                        <figure className="">
                            <img className="relative bottom-8" src={bottleimg} />
                        </figure>
                        <div className=" flex-1 flex flex-col place-items-start">
                            <p className="text-base  font-medium leading-5 text-white  ">
                                Did't find what <br />  you need ?
                            </p>
                            <button className="py-2 px-4 text-sm md:text-base font-medium rounded-2xl bg-white mt-3 max-w-max " onClick={handleAddItem}>Add Item</button>
                        </div>
                    </div>
                </div>
                {
                    !loading ?(activeShoppingList.length !=0 ?<ActiveShoppingList shoppingListName={activeShoppingList[0].name} uniqueCategories={uniqueCategories} setIsEdititng={setIsEdititng} items={activeShoppingList[0].items.length!=0 ?activeShoppingList[0].items:null} />:<EmptyShopingList/>):<Loader/>
                }
                {/* when no active list */}
                <div className=" flex justify-center bg-white absolute bottom-0 left-0 right-0 py-4 px-10">
                    {isEditing ? (<div className="flex justify-between rounded-md border-4 border-orange-500 bg-white w-full">
                        <div className="" >
                            <input className="h-12" type="text" onChange={(e) => { setListname(e.target.value) }} />
                        </div>
                        <button className=" bg-orange-500 text-white px-8 rounded-sm rounded-s-lg" onClick={handelSave}> Save</button>
                    </div>) : (<div className="flex gap-10">
                        <button className="shadow-xl px-8 rounded-lg py-4" onClick={() => {
                            dispatch(openModal())
                        }
                        }>Cancel</button>
                        <button className="bg-blue-500 text-white px-8  rounded-lg py-4" onClick={handleComplete}>Complete</button>
                    </div>)}

                </div>
            </div>
        </div>
    )
}

export default ShoppingContainer

{/* <div className="absolute bg-white top-0 right-0 left-0 bottom-0 sm:relative sm:w-80 md:w-96">
                    {loading? (<div className="p-5 bg-orange-300 h-screen">Loading...</div>): (activeShoppingList.length != 0 ?<ActiveShoppingList activeShoppingList={activeShoppingList} />:<EmptyShopingList/>)}
                </div> */}