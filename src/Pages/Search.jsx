import React from 'react'

function Search(props) {
  return (
   <>
   <div className='flex mt-4 w-full'>
                <button className='w-14 flex items-center justify-center bg-[#F0F2F5] rounded-s-lg'><img src={props.btn1} alt="" /></button>
                <input className=' h-9 bg-[#F0F2F5] w-full rounded-e-lg' type="text" placeholder={props.search}/>
               </div>
  
   
   </>
  )
}

export default Search