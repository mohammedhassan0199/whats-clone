import React from 'react'
import Chats1 from './Pages/Chats1'
import ChatsHeader from './Pages/ChatsHeader'
import Chats from './Pages/Chats'


function Props(props) {
  return (
    <>

    <div className='bg-[#ffffff] w-full shadow-lg py-2 px-4 '>

    {/* <ChatsHeader heading='Chats' btn=' hjhbih' search='Search' btn1='svg-export/search.svg' url2='meta.png' url3=' svg-export/new-chat-outline.svg' url4=' svg-export/menu.svg' btn2='All' btn3='Unread' btn4='Groups' /> */}
               
             
          

               <Chats1 img='ahtesham.jpg' cheading='Ahtesham Bhai' cdesc='https://fontawesome.com/icons/angle-down?' time='Yesterday'/>
               <Chats1 img='musaib.jpg' cheading='Musaib Bhai' cdesc='Name: Raja Bhai RCC Phone: 7869181630' time='Tuesday'/>
               <Chats1 img='dwt.jpg' cheading='DWT QURAN and SUNNAH' cdesc='~Mohammed Owais Shafi ' time='Tuesday'/>
               <Chats1 img='owais.jpg' cheading='Owais Bhai' cdesc='Photo' time='Tuesday'/>
               <Chats1 img='tawheed.jpg' cheading='MISSION TAUHEED' cdesc='~Servent of Allah: Photo' time='Tuesday'/>
               <Chats1 img='burhanpur.jpg' cheading='7 WONDERS Of BURHANPUR' cdesc='Aayush: Kon kon chalega?' time='25/7/2024'/>
               <Chats1 img='umair.jpg' cheading='Umair' cdesc="Guys we've got the Money for our Goa trip" time='24/7/2024'/>
               <Chats1 img='meta.png' cheading='Meta AI' cdesc="It seems like you only typed one letter! Could you please complete your thought or question? I'm here to help!" time='28/6/2024'/>
               <Chats1 img='quran.jpg' cheading='Quran Allah Ka Kalaam Hai ‼️' cdesc='+91 73874 07425 changed to +91 80871 57244' time='28/6/2024'/>
             


               </div>
    
    </>
  )
}

export default Props