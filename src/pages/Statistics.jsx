import TopCategories from "../components/TopCategories"
import TopItems from "../components/TopItems"
import { Chart } from "../components/Chart"
function Statistics() {
  return (

    <div className='overflow-y-scroll pb-10 px-5  custom-scrollbar h-screen flex-1 bg-slate-100 flex justify-center items-center  flex-col text-3xl font-bold text-slate-900'>
    <div className="flex flex-col items-center sm:flex-row w-full  justify-between p-3 md:px-20 h-fit mt-10">
      <TopCategories/>
      <TopItems/>
    </div>
    <div>
      <Chart/>
    </div>
    </div>

  )
}

export default Statistics