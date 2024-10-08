import React from 'react'

function SettingList(props) {
  return (
    <>
    
    <div className='flex hover:bg-[#F5F6F6] py-3 px-4 border-b-[1px] border-[#e9f1f5]'>
    <div>
                <img className='rounded-full mr-5' src={props.img} alt="" />
            </div>

            <div className='flex flex-col justify-center'>
               <h2 className='text-[17px]'>{props.cheading}</h2> 
               
          


            </div>
    </div>

</>
  )
}

export default SettingList