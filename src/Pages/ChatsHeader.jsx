import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Props from '../Props'
import Unread from './Unread'
import Search from './Search'
import Groups from './Groups'


function ChatsHeader(props) {
  return (
   <>
   
   <section className='overflow-auto w-full bg-white p-3'>
  <div className=''>
              <div className='mx-4 flex justify-between '>
               <h1 className='font-bold text-[22px] '>{props.heading}</h1>
               <div className='flex items-center justify-between'>
                 
               <img className=' w-5 flex items-center' src={props.url2} alt="" />

                  
                  <img className='mx-5 flex items-center' src={props.url3} alt="" />
                  <img src={props.url4} alt="" />

               </div>

               </div>

               <div className='flex mt-4 '>
               <Search btn1='svg-export/search.svg' search='Search'/>
               </div>

               <div className='my-2 flex items-center'>
               <Link to='*'> <button className='w-[70px] h-8 bg-[#E9EDEF] rounded-full ] '>All</button></Link>
               <Link to='/unread'> <button className='w-[70px] h-8 bg-[#E9EDEF] mx-3  rounded-full'>Unread</button></Link>
                <Link to='/groups'><button className='w-[70px] h-8 bg-[#E9EDEF]  rounded-full'>Groups</button></Link>
               </div>
              </div>
              <Routes>
                <Route path='*' element={<Props />}></Route>
                <Route path='/unread' element={<Unread />}></Route>
                <Route path='/groups' element={<Groups />}></Route>
              </Routes>
  </section>
   
   </>
  )
}

export default ChatsHeader