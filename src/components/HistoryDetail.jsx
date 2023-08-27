import React, { useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom';

function HistoryDetail() {
    const {id}=useParams()
    const navigate=useNavigate()
    console.log(id);
    useEffect(()=>{
      console.log("id",id);
    },[])
  return (
    <div className=' border-2 border-green-800 sticky top-0 h-full w-full '>
       
    </div>
  )
}

export default HistoryDetail