import { Link } from 'react-router-dom';
import { AiOutlineBars, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import { IoStatsChart } from 'react-icons/io5';
import { GiChewedHeart } from 'react-icons/gi';
import{toggleSideBar} from "../store/view.js";
import { useDispatch } from 'react-redux';

function Navbar() {
  const dispatch = useDispatch();
  const handletoggleSideBar=()=>{
    dispatch(toggleSideBar())
  }
  return (
    <div className="w-16 sm:w-20  h-screen m-0 bg-slate-50 flex flex-col justify-between items-center  ">
      <div className=' flex justify-center items-center my-3'>
        <div className='h-12 w-12 bg-black flex justify-center items-center mx-auto my-auto rounded-full '>
          <GiChewedHeart size="60" className='text-orange-500' />
        </div>
      </div>
      <div>
        <SidebarIcons icon={<AiOutlineBars size="22"   />}text='Items' link="/" />
        <SidebarIcons icon={<BsArrowCounterclockwise size="22"  />}text='History' link="/history" />
        <SidebarIcons icon={<IoStatsChart size="22"  />} text='Stats' link='/stats' />
      </div>
      <div onClick={()=>handletoggleSideBar()}>
        <SidebarIcons icon={<AiOutlineShoppingCart size="25"  />} text='shoppinglist'link={""} />
      </div>
    </div>
  )
}

function SidebarIcons({ icon, text="list", link}) {
  return (
    <Link to={link}>
    <div className='relative h-12 w-12 flex items-center justify-center my-3  hover:border-orange-500 hover:border-l-4 rounded  transition-all group'>
      {icon}
      <span  className='absolute w-auto text-xs left-16 bg-black text-white p-1 rounded scale-0 group-hover:scale-100 group-hover:z-50 transition-all'>
        {text}
      </span>
    </div>
    </Link>
  )
}
export default Navbar