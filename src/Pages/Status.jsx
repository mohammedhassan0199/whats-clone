import React from 'react'
import StatusHeader from './StatusHeader'
import Chats1 from './Chats1'


function Status() {
  return (
    <>
    
     <section className='w-full bg-white overflow-auto'>
     <StatusHeader sheading='Status' img1='svg-export/plus.svg' img2='svg-export/menu.svg'/>
    <div className=''>
    <div className='text-[#008069] ml-8 py-8 border-b-[1px] border-[#F0F2F5]'>Viewed</div>

    <Chats1 img='ahtesham.jpg' cheading='Ahtesham Bhai' cdesc='Today at 7:22 pm'/>             
     <Chats1 img='musaib.jpg' cheading='Musaib Bhai' cdesc='Today at 4:00 pm' />
              
    <Chats1 img='owais.jpg' cheading='Owais Bhai' cdesc='Today at 3:18 pm' />
               
    <Chats1 img='umair.jpg' cheading='Umair' cdesc="Today at 3:12 pm" />
               
    </div>

     </section>
    
    </>
  )
}

export default Status