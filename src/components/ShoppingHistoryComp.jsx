import { Link } from "react-router-dom"
import { MdArrowForwardIos } from "react-icons/md"

function shoppingHistory({ list }) {
  const { name, status, _id } = list
  const styleStatus = () => {
    if (status == "completed") {
      return "border-blue-500 text-blue-500"
    }
    else if (status == "active") {
      return "border-green-500 text-green-500"
    }
    else {
      return "border-red-500 text-red-500"
    }
  }
  return (

    <div className='flex justify-between items-center w-full px-10 md:w-3/4 border-2 shadow-md bg-white py-4 rounded-lg'>
      <h1 className='text-md font-semibold'>{name}</h1>
      <div className="flex items-center gap-4"> 
      <p className={`border-2 rounded-md px-1 py-2 w-36 text-center ${styleStatus()}`}>{status}</p>
      <Link to={`${_id}`}>
        <span><MdArrowForwardIos /></span>
      </Link>
      </div>
    </div>
  )
}

export default shoppingHistory