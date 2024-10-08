import React from 'react'

function Chats1(props) {
  let name
  let maxLength
  let l=name
  return (
    <>
    
    <div className='hover:bg-[#F5F6F6] p-3 border-b-[1px] border-[#e9f1f5] chat-div flex' >

                <div>
                    <img className='h-[50px] w-[50px] rounded-full ' src={props.img} alt="" />
                </div>

                <div className='flex w-[90%] justify-between  ml-4'>

                <div className='flex flex-col justify-center'>
                   <h2 className='text-[17px]'>{props.cheading}</h2> 
                   <p className='text-[#8696A0] text-sm'>{props.cdesc}.{l > maxLength ? desc.subString(0,maxLength)+'...' : name} </p>
                </div>

                <div className='text-[#8696A0] '>
                  <span className='text-sm flex justify-end'>{props.time}</span>
                  {/* <i className="fa-solid fa-angle-down flex justify-end"></i> */}
                </div>

                </div>

               </div>
    
    </>
  )
}

export default Chats1