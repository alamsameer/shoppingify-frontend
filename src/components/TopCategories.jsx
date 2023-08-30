import { useEffect } from "react"
import ProgressComponent from "./ProgressBar"
import { useSelector,useDispatch } from "react-redux"
import { getTopCategoriesAsync} from "../store/statistic"
function TopCategories() {
    const {topCategories}=useSelector(state=>state.statistic)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getTopCategoriesAsync())
    },[])
     const totalnum=topCategories&&topCategories.reduce((acc,current)=>{
        return acc+current.totalQuantity
    },0)
    console.log(topCategories);
  return (
    <div>
        <p className="text-xl md:text-2xl capitalize font-semibold mb-4 " >Top categories</p>
       <div className="flex flex-col gap-3">
       { 
       topCategories&&topCategories.map((category)=>{    
        let percentage=((category.totalQuantity)/totalnum)*100
        console.log(category.itemName);
        return  <ProgressComponent percentage={percentage} name={category._id} color="#b5b321"/>
       })
       }
       </div>
    </div>
  )
}

export default TopCategories