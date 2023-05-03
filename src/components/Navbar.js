import Image from 'next/image'
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/client"



import logo from '../../assets/images/MasSolar logo.png'

function Navbar() {
  return (
    // <div className='text-black'>Navbar</div>
    <div className='bg-green-500 flex p-5 items-center w-full top-0 fixed z-20'>
      {/* <Image src={logo} alt="" height={200} width={200}/> */}
      <h1 className='ml-20 text-3xl'>MasSolar</h1>
      <div className='flex-1 ml-24'>
        <ul className='flex gap-10'>
          <li>About Us</li>
          <li>Benefits</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className='flex space-x-5'>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Sign Up</a></li>
      </div>
    </div>
  )
}

export default Navbar