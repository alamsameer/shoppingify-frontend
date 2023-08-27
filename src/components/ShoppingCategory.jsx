import ShoppingItem from "./ShoppingItem"
function ShoppingCategory({name,items}) {
  return (
    <div className="mt-2">
        <p className="name text-sm text-gray-500">{name}</p>
        {
            items&&items.map((item)=>{
                return  name===item.item.category[0].name?<ShoppingItem item={item.item} count={item.total}/>:null
            })
        }
       
    </div>

  )
}

export default ShoppingCategory