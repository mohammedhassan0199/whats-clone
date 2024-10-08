import React from 'react'

function Header(props) {
  return (
   <>
    <div className='flex justify-between  py-3 px-4 '>
            <h1 className='text-[22px] font-semibold'>{props.sheading}</h1>
            <div className='flex'>
                <img className='' src={props.img1} alt="" />
                <img className=' pl-3' src={props.img2} alt="" />
            </div>
        </div>
   
   </>
  )
}

export default Header