import { useEffect } from "react"
import ProgressComponent from "./ProgressBar"
import { useSelector,useDispatch } from "react-redux"
import { getTopCategoriesAsync} from "../store/statistic"
function TopCategories() {
    const {topCategories}=useSelector(state=>state.statistic)
    const dispatch=useDispatch()
    useEffect(async()=>{
        dispatch(getTopCategoriesAsync)
    },[])
    console.log(topCategories)
  return (
    <div>TopItems</div>
  )
}

export default TopCategories