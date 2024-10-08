import React from 'react'
// import { Link } from 'react-router-dom'
import Chats1 from './Chats1'
import Header from './Header'


function Community() {
  return (
   <>
   
 <section className='bg-white w-full overflow-auto'>
    <div className='border-b-8 border-[#F0F2F5]'>
        <div className='shadow-sm'>
        <Header sheading='Community' />
        <Chats1 img='svg-export/community-outline.svg'  cheading='New Community' />
        </div>
    </div>
    <div className='border-b-8 border-[#F0F2F5]'>
        <div  className='shadow-sm'> 

        <Chats1 img='dwt.jpg' cheading='DWT QURAN and SUNNAH' />
   <Chats1 img='svg-export/announcement-speaker.svg' cheading='Announments' cdesc='~Mohammed Owais Shafi: ...' time='Tuesday'/>
   <Chats1 img='dawat.jpg' cheading='DWT QURAN and SUNNAHR' cdesc='Group member have changed click to view' time='21/3/2023'/>
   
        </div>
    </div>

    <div className='border-b-8 border-[#F0F2F5]'>
        <div  className='shadow-sm'> 
            
        <Chats1 img='iman.jpg' cheading='IMAN INSTITUTE' />
   <Chats1 img='svg-export/announcement-speaker.svg' cheading='Announments'  cdesc='Community members have changed click to view' time='21/3/2023'/>
   
   
        </div>
    </div>

    <div className='border-b-8 border-[#F0F2F5]'>
        <div  className='shadow-sm'> 
            
        <Chats1 img='iman.jpg' cheading='IMAN INSTITUTE' />
   <Chats1 img='svg-export/announcement-speaker.svg' cheading='Announments'  cdesc='Community members have changed click to view' time='21/3/2023'/>
   
   
        </div>
    </div>

    <div className='border-b-8 border-[#F0F2F5]'>
        <div  className='shadow-sm'> 
            
        <Chats1 img='iman.jpg' cheading='IMAN INSTITUTE' />
   <Chats1 img='svg-export/announcement-speaker.svg' cheading='Announments'  cdesc='Community members have changed click to view' time='21/3/2023'/>
   
   
        </div>
    </div>
 </section>
   
   </>
  )
}

export default Community