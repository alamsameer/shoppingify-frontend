import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setShoppingListDetail } from "../store/shoppingList.js"
import HistoryCategory from '../components/HistoryCategory.jsx';
import{BsArrowLeftShort} from "react-icons/bs"

function HistoryDetail() {
    const { id } = useParams()
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const { shoppingListDetail} = useSelector(state => state.shoppinglist)
    console.log(id,shoppingListDetail);
    useEffect(() => {
        dispatch(setShoppingListDetail(id))
    }, [])
    const handleBack = () => {
        navigation(-1)
    }
    return (
        <div className='flex-1 px-8 md:px-20 flex flex-col gap-10 py-6 overflow-y-scroll pb-10   custom-scrollbar h-screen'>
            <span onClick={handleBack} className='text-base text-orange-500 flex items-center font-semibold cursor-pointer'> <BsArrowLeftShort size="24"/> back</span>
            {
                shoppingListDetail && (<div>
                    <h1 className='text-2xl font-semibold'>{shoppingListDetail.name}</h1>
                    {
                        shoppingListDetail.categories&&shoppingListDetail.categories.map((category)=>{
                            return <HistoryCategory key={category._id} category={category}/>
                        })
                    }
                </div>)
            }
        </div>
    )
}

export default HistoryDetail