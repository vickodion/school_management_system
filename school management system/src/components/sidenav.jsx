import React from 'react'
import Logo from '../img/logo.svg'
import DashboardIcon from '../img/dashboardIcon.svg'
import ActivityIcon from '../img/activityIcon.svg'
import StudentIcon from '../img/studentIcon.svg'
import TeacherIcon from '../img/teacherIcon.svg'
import EventIcon from '../img/eventIcon.svg'
import FinanceIcon from '../img/financeIcon.svg'
import FoodIcon from '../img/foodIcon.svg'
import UserIcon from '../img/userIcon.svg'
import ChatIcon from '../img/chatIcon.svg'

function sidenav() {
  return (
  //  <div className="h-full">
     <nav className='w-[290px]  bg-[#4D44B5]  pl-[25px] pt-[38px] '>
       <div className='flex flex-row items-center mb-[50px]'>
        <img src={Logo} className='pr-3' />
        <h1 className='text-white text-[20px] font-bold shadow-2xl'>Kings College</h1>
       </div>
       <ul className='pl-4'>
        <li className='flex items-center mb-8'>
          <img src={DashboardIcon} className='pr-4'/>
          <span className='text-[#C1BBEB] font-medium'> Dashboard</span>
        </li>
        <li className='flex items-center mb-8'>
          <img src={ StudentIcon} className='pr-4'/>
          <span className='text-[#C1BBEB] font-medium'> Students</span>
        </li>
        <li className='flex items-center mb-8'>
          <img src={TeacherIcon} className='pr-4'/>
          <span className='text-[#C1BBEB] font-medium'> Teachers</span>
        </li>
        <li className='flex items-center mb-8'>
          <img src={EventIcon} className='pr-4'/>
          <span className='text-[#C1BBEB] font-medium'>Event</span>
        </li>
        <li className='flex items-center mb-8'>
          <img src={FinanceIcon} className='pr-4'/>
          <span className='text-[#C1BBEB] font-medium'> Finance</span>
        </li>
        <li className='flex items-center mb-8'>
          <img src={FoodIcon} className='pr-4'/>
          <span className='text-[#C1BBEB] font-medium'>Food</span>
        </li>
        <li className='flex items-center mb-8'>
          <img src={UserIcon} className='pr-4'/>
          <span className='text-[#C1BBEB] font-medium'>User</span>
        </li>
        <li className='flex items-center mb-8'>
          <img src={ChatIcon} className='pr-4'/>
          <span className='text-[#C1BBEB] font-medium'>Chat</span>
        </li>
        <li className='flex items-center mb-8'>
          <img src={ActivityIcon} className='pr-4'/>
          <span className='text-[#C1BBEB] font-medium'>Latest Activity</span>
        </li>
       </ul>
    </nav>
  //  </div>
  )
}

export default sidenav