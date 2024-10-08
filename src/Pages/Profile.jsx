import React from 'react'
import Header from './Header'

function Profile() {
  return (
    <>
    <section className='w-full'>
    <div className='bg-white shadow-sm '><Header sheading="Profile "/></div>

    <div className='py-8 flex justify-center'>
    <img className='w-52 h-52 rounded-full ' src="file.enc" alt="" />
    </div>

    <div className='bg-white px-6 py-4 shadow-sm'>
        <div className='text-[#008069] text-sm'>Your name</div>

        <div className='text-[#8696A0] flex justify-between mt-5 shadow-sm'>
            <span>Mohammed Hassan</span>
            <img src="svg-export/pencil.svg" alt="" />
        </div>

    </div>

    <div className=' px-6 py-4'>
       
            <span className='text-[#8696A0] text-sm'>This is not your username or PIN. This name will be visible to your WhatsApp contacts.</span>
         

    </div>

    <div className='bg-white px-6 py-4 shadow-sm'>
        <div className='text-[#008069] text-sm'>About</div>

        <div className='text-[#8696A0] flex justify-between mt-5'>
            <span className=''>There is no God but Allah</span>
            <img src="svg-export/pencil.svg" alt="" />
        </div>

    </div>

    </section>
       

    </>
  )
}

export default Profile