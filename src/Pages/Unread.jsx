import React from 'react'
import ChatsHeader from './ChatsHeader'
import Chats1 from './Chats1'

function Unread() {
  return (
    <>
    
    <div>
        <Chats1 img='svg-export/default-user.svg' cheading='Harshada Choudhry' cdesc='Thank you' time='20/7/2024'/>
        <Chats1 img='file (4).enc' cheading='Rozina' cdesc='Jo apn ne banaye the' time='8/7/2024'/>
        <Chats1 img='file (5).enc' cheading='Sumayya' cdesc='Missed group voice call' time='25/7/2024'/>

       <p className='flex justify-center text-[12px] text-[#3B4A54] pt-3'><img src="svg-export/lock-small.svg" alt="" /> Your personal messages are-<span className='text-[#027EB5]'> end-to-end encrypted</span></p>

    </div>
    
    </>
  )
}

export default Unread