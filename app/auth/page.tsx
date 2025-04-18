import React from 'react';
import "./authstyles.css"
// import Nav from '../Nav';
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';

function Page() {
  return (
    <div className='auth-main'>
      <div className='auth-form'>
        <h1>Join the Waitlist</h1>
        <h3>We are still working on the product to provide you the best experience.</h3><br/>
        <input className='py-1.5 pl-2'/>
        <Button className='w-[30%] ' variant={'ghost'}>Submit</Button>
      </div>
    </div>
  )
}

export default Page