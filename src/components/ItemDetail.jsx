import { useSelector,useDispatch } from "react-redux";
import {setTypeContainer} from "../store/view.js"
import {AiOutlineArrowLeft} from "react-icons/ai"
function ItemDetail() {
    const { itemDetail } = useSelector(state => state.view)
    console.log(itemDetail);
    const dispatcht=useDispatch()
    const{name,category,note,image}=itemDetail
    return (
        <div className="h-full m-3 flex flex-col gap-4">
            <span className="text-orange-500 text-sm" onClick={()=>{dispatcht(setTypeContainer("shopping"))}}>
                <AiOutlineArrowLeft size="20"/>
            </span>
        <figure className="h-44   ">
            <img src={image} className="h-full m-auto rounded-xl" alt="" />
        </figure>
        <div className="  flex flex-col gap-2 px-8">
            <h2 className="text-sm text-gray-400">{category}</h2>
            <h1 className="text-lg font-medium">{name}</h1>
            <p className="h-72 overflow-y-scroll custom-scrollbar border-1 border-gray-300">{note}</p>
        </div>
        </div>
    )
}

export default ItemDetail