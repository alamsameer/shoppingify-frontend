import { useEffect } from "react"
import ProgressComponent from "./ProgressBar"
import { useSelector,useDispatch } from "react-redux"
import { getTopItemsAsync } from "../store/statistic"
function TopItems() {
    const {topItems}=useSelector(state=>state.statistic)
    const dispatch=useDispatch()
    useEffect(async()=>{
        dispatch(getTopItemsAsync)
    },[])
    console.log(topItems)
  return (
    <div>TopItems</div>
  )
}

export default TopItems