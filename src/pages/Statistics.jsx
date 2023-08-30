import Navbar from "../components/Navbar"
import TopCategories from "../components/TopCategories"
import TopItems from "../components/TopItems"
function Statistics() {
  return (

    <div className=' h-screen flex-1 bg-slate-100 flex justify-center items-center text-3xl font-bold text-slate-900'
    >Statistics
    <div>
      <TopCategories/>
      <TopItems/>
    </div>
    </div>

  )
}

export default Statistics