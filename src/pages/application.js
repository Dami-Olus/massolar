import Dashboard from '@/components/userDashboard/Dashboard'
import Header from '@/components/userDashboard/Header'
import Menu from '@/components/userDashboard/Menu'
import React from 'react'

function application() {
  return (
    <div className='bg-[#fafafa] h-screen'>
      {/*header */}
      <Header/>
      
      <div className='flex'>
        {/*left */}
      <Menu/>
      {/*right */}
      <Dashboard/>
      </div>
      
      
      {/*widgets */}
      {/*graph */}
      {/*widgets */}
      {/*Recentapplications */}
      {/*Referrals */}
    </div>
  )
}

export default application