import React from 'react'
import Chats1 from './Chats1'
import Header from './Header'

function StatusHeader(props) {
  return (
   <>
   
    <header className='w-full bg-white  '>
        <div className='border-b-8 border-[#F0F2F5]'>
          <div  className='shadow-sm'>
          < Header sheading='Status' img1='svg-export/plus.svg' img2='svg-export/menu.svg'/>
          <Chats1 img='file.enc' cheading='My status' cdesc='click to add status update '/>
          </div>
        </div>
    </header>
   
   </>
  )
}

export default StatusHeader