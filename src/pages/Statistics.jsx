import Navbar from "../components/Navbar"
import TopCategories from "../components/TopCategories"
import TopItems from "../components/TopItems"
function Statistics() {
  return (

    <div className=' h-screen flex-1 bg-slate-100 flex justify-center  text-3xl font-bold text-slate-900'>
    <div className="flex flex-col items-center sm:flex-row w-full lg:w-4/5 justify-between p-3 md:px-20 h-fit mt-10">
      <TopCategories/>
      <TopItems/>
    </div>
    </div>

  )
}

export default Statistics