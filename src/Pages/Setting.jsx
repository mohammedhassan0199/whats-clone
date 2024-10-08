import React from 'react'
import Header from './Header'
import Chats1 from './Chats1'
import Search from './Search'
import SettingList from './SettingList'

function Setting() {
  return (
    <>
    
    <section className='bg-white w-full'>
        <div>
        <Header sheading='Community' />
       <div className='p-3'> <Search btn1='svg-export/search.svg' search='Search'/></div>
        <Chats1 img='file.enc'  cheading='Mohammed Hassan' cdesc='There is no God but Allah' />
        <SettingList img='svg-export/account-circle.svg'  cheading='Account'/>
        <SettingList img='svg-export/security-lock.svg'  cheading='Privicy'/>
        <SettingList img='svg-export/chats-filled.svg'  cheading='Chats'/>
        <SettingList img='svg-export/settings-notifications.svg'  cheading='Notification'/>
        <SettingList img='svg-export/settings-keyboard.svg'  cheading='Keyboard shortcut'/>
        <SettingList img='svg-export/help-filled.svg'  cheading='Help'/>
       <div className='text-[#EA006D]'> <SettingList img='svg-export/exit.svg'  cheading='Log out'/></div>

        </div>
    </section>
    
    </>
  )
}

export default Setting