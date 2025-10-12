import React from 'react'
import DashboardSlideBar from '../components/DashboardSlideBar'



export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex h-screen gap-4'>
        <DashboardSlideBar/>
        <div className='flex-1'>
            {children}
        </div>
        
    </div>
  )
}
