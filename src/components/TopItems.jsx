import { useEffect } from "react"
import ProgressComponent from "./ProgressBar"
import { useSelector,useDispatch } from "react-redux"
import { getTopItemsAsync } from "../store/statistic"
function TopItems() {
    const {topItems}=useSelector(state=>state.statistic)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getTopItemsAsync())
    },[])
    console.log(topItems)
    const totalSum=topItems&&topItems.reduce((acc,current)=>{
        return acc+current.totalQuantity 
    },0)
  return (
    <div>
        <p className="text-xl md:text-2xl capitalize font-semibold mb-4 ">top items</p>
        <div className="flex flex-col gap-3">
        { 
       topItems&&topItems.map((item)=>{    
        let percentage=((item.totalQuantity)/totalSum)*100
        console.log(percentage);
        return  <ProgressComponent percentage={percentage} name={item.itemName} color="#2b2796"/>
       })
       }
        </div>
    </div>
  )
}

export default TopItems