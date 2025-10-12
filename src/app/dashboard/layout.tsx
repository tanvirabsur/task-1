import React from 'react'
import DashboardSlideBar from '../components/DashboardSlideBar'



export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex  gap-4'>
        <DashboardSlideBar/>
        <div className='flex-1 overflow-y-auto h-screen p-4'>
            {children}
        </div>
        
    </div>
  )
}
