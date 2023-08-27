import React from 'react'

function Loader() {
  return (
    <div className='h-full  flex justify-center mt-10'>
    <span class="relative  h-10 w-10">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400"></span>
      {/* <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span> */}
    </span>
    </div>
  )
}

export default Loader