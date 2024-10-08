import React from 'react'
import Props from './Props'
import { Route, Routes } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom'
import Chats from './Pages/Chats'
import Status from './Pages/Status'
import ChatsHeader from './Pages/ChatsHeader'
import Chenals from './Pages/Chenals'
import Hero from './Pages/Hero'
import Community from './Pages/Community'
import Setting from './Pages/Setting'
import Profile from './Pages/Profile'

function App() {
  return (
   <>
  <BrowserRouter>

  <section className=''>
   <div className='bg-[#00A884] h-32'>
        
        </div>

        <div className='bg-gradient-to-t from-[#E4E2DE] md:from-[#CFD5D9] p-5'>

         <div className='flex -mt-32 bg-[#F0F2F5] h-[94.5vh]'>
         <header className='  w-[33%] flex'>
            <div className='w-[12%] flex flex-col items-center justify-between py-3 text-[#54646E]'>

              <div className='flex flex-col items-center'> 
             <Link to='*'><img className='mb-6' src="svg-export/chats-filled.svg" alt="" /></Link>
              <Link to='/status'><img className='mb-6' src="svg-export/status-outline.svg" alt="" /></Link>
              <Link to='/chenals'><img className='mb-6' src="svg-export/newsletter-outline.svg" alt="" /></Link>
              <Link to='/communities'><img className='mb-6' src="svg-export/community-outline.svg" alt="" /></Link>
              </div>

              <div className='flex flex-col items-center'>
              <Link to='/setting'><img className='mb-6' src="svg-export/settings-outline.svg" alt="" /></Link>
              <Link to='/profile'><img src="file.enc" alt="" className='w-8 h-8 rounded-full'/></Link>


              </div>
             
            </div>

            {/* <ChatsHeader heading='Chats' btn=' hjhbih' search='Search' btn1='svg-export/search.svg' url2='meta.png' url3=' svg-export/new-chat-outline.svg' url4=' svg-export/menu.svg'  /> */}
               <Routes>
                 <Route path='*' element={ <Chats />}></Route>
                 <Route path='/status' element={<Status />}></Route>
                 <Route path='/chenals' element={<Chenals />}></Route>
                 <Route path='/communities' element={<Community />}></Route>
                 <Route path='/setting' element={<Setting />}></Route>
                 <Route path='/profile' element={<Profile />}></Route>
               </Routes>
          </header>

          <div className='w-[67%] flex flex-col items-center justify-center text-[#738692] text-center'>
 <div className='flex justify-center items-center flex-col'>
              <img className='w-1/2' src="hero.png" alt="" />
              <h1 className='text-[32px] my-5'>Download WhatsApp for Windows</h1>
              <p className='text-sm'>Make calls, share your screen and get a faster experience when you download the <br /> Windows app.</p>
              <button className='py-2 px-5 rounded-full text-white mt-8  bg-[#00A884] hover:bg-[#017561]'>Get from Microsoft Store</button>
              <p className='text-[13px] mt-32 flex items-center'><img src="svg-export/lock-small.svg" alt="" /> Your personal messages are end-to-end encrypted</p>
         </div>
         </div>
         </div>

        </div>
   </section>

  </BrowserRouter>
   </>
  )
}

export default App