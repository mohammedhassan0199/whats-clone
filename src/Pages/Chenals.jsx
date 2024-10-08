import React from 'react'
import StatusHeader from './StatusHeader'
import Header from './Header'
import Chats1 from './Chats1'

function Chenals() {
  return (
    <>
    
        <header className='w-full bg-white text-center p-3'>
        <Header sheading='Chenals' img1='svg-export/plus.svg' />
        <div className='text-center'>
        <div className="text-[19px]">Stay updated on your favourite topics</div>
        <div className="text-[#3B4A54] my-3">Find channels to follow below</div>

        </div>
        <Chats1 img='total-gaming.jpg' cheading='Total Gaming' cdesc='1.3Cr followers' />
              
    <Chats1 img='shinde.jpg' cheading='Eknath Shinde' cdesc='18T followers' />
               
    <Chats1 img='talkies.jpg' cheading='Behind Talkies' cdesc="40.6L followers" />
    <button className='text-white bg-[#017561] rounded-full py-2 px-5 mt-5 font-semibold'>Discover more</button>
        </header>
    
    </>
  )
}

export default Chenals