function HistoryItem({item}) {
    const{itemName,total}=item
  return (
    <div className="bg-white p-2 flex items-center justify-between gap-2 sm:gap-5 md:gap:10 rounded-xl shadow-lg shadow-white-500/40 md:max-w-[90%]" >
        <span className='md:text-lg font-medium'>{itemName}</span>
        <span className='text-orange-500'>{total} pcs</span>
    </div>
  )
}

export default HistoryItem