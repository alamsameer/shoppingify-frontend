import ShoppingCategory from "./ShoppingCategory"
import { FaPen } from "react-icons/fa"

function ActiveShoppingList({ uniqueCategories, items, setIsEdititng, shoppingListName }) {
  return (
    <div className="relative h-full">
      <header className="flex justify-between pt-8">
        <h2 className="Shopingname text-xl font-medium">{shoppingListName}</h2>
        <FaPen className="mt-1" size="18" onClick={() => { setIsEdititng(true) }} />
      </header>
      <div className=" h-80 py-5 px-2 overflow-y-scroll custom-scrollbar">

        {
          uniqueCategories&&uniqueCategories.map((item, i) => {
            return <ShoppingCategory name={item} items={items} />
          })
        }
      </div>
    </div>

  )
}

export default ActiveShoppingList

{/* when isEdit is true */ }
{/* when isEdit is false */ }
{/* when no active list */ }
      // <div className=" flex justify-center bg-white absolute bottom-0 left-0 right-0 py-4 px-10">
      //   {isEditing ? (<div className="flex justify-between rounded-md border-4 border-orange-500 bg-white w-full">
      //     <div className="" >
      //       <input className="h-12" type="text" onChange={(e) => { setListname(e.target.value) }} />
      //     </div>
      //     <button className=" bg-orange-500 text-white px-8 rounded-sm rounded-s-lg" onClick={() => {

      //       setIsEdititng(false)
      //       dispatch(setShoppingName(listname))
      //     }}> Save</button>
      //   </div>) : (<div className="flex gap-10">
      //     <button className="shadow-xl px-8 rounded-lg py-4" onClick={() => {
      //       dispatch(openModal())
      //     }
      //     }>Cancel</button>
      //     <button className="bg-blue-500 text-white px-8  rounded-lg py-4"onClick={()=>{
      //       dispatch(updateshoppingStatus("completed"))
      //     }}>Complete</button>
      //   </div>)}

      // </div>
