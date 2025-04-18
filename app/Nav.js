"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

function Nav() {
  const router = useRouter()
  return (
    <div className='nav-main'>
      <div>
        <a>What we offer</a>
        <a>Contact us</a>
        {/* <a onClick={() => {router.push("/auth")}}>Login</a>
        <a onClick={() => {router.push("/auth")}}>Register</a> */}
        <a onClick={() => {router.push("/auth")}}>Join the waitlist</a>
      </div>
    </div>
  )
}

export default Nav