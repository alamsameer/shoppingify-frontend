import { useState } from "react";
import { MdDeleteOutline } from 'react-icons/md'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { increaseItemCount, decreaseItemCount ,deleteItem} from '../store/shoppingList.js'
import { useDispatch } from "react-redux";
import {addItemToShoppingList,deleteItemFromShoppingList} from '../store/apiservice.js'
function ShoppingItem({ item, count }) {
    const [showControls, setShowControls] = useState(false);
    const { _id, name } = item
    const dispatch = useDispatch()
    const toggleControls = () => {
        setShowControls(!showControls);
    };

    const increment = () => {
        dispatch(increaseItemCount(_id));
        toggleControls()
        try{
            addItemToShoppingList({id:_id,count:1})
        }
        catch(e){
            console.log("got error");
        }
    };

    const decrement = () => {
        dispatch(decreaseItemCount(_id))
        toggleControls()
        try{
            addItemToShoppingList({id:_id,count:-1})
        }
        catch(e){
            console.log("got error");
        }
    };

    const resetCount = () => {
        dispatch(deleteItem(_id))
        try{
            deleteItemFromShoppingList({id:_id})
        }  catch(e){
            console.log("got error");
        }
    };
    return (
        <div className="flex justify-between items-center group h-12 mt-3 ">
            <p className="font-semibold">{name}</p>
            <div
                className={`h-full flex rounded-xl cursor-pointer ${showControls ? 'bg-white' : ''
                    } transition-all duration-100 `}
            >

                {showControls ? (
                    <div className="flex gap-5 justify-between w-56">
                        <button className="text-red-500 px-3 bg-orange-500 rounded-xl" onClick={resetCount}>
                            <MdDeleteOutline className="text-white" size="20" />
                        </button>
                        <button className="" onClick={decrement}>
                            <FaMinus />
                        </button>
                        <span className="border-2 px-3 text-orange-500 border-orange-500 flex items-center text-lg rounded-2xl">{count}</span>
                        <button className="mr-2" onClick={increment}>
                            <FaPlus />
                        </button>

                    </div>
                ) : (
                    <span className="border-2 px-3 text-orange-500 border-orange-500 flex items-center text-lg rounded-2xl" onClick={toggleControls}>{count}</span>
                )}
            </div>
        </div>
    );
}

export default ShoppingItem