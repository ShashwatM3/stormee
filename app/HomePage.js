"use client"

import React from 'react';
import "./HomePage.css";
import { Button } from '@/components/ui/button';
import tick from "@/media/tick.png"
import Image from 'next/image';
import Nav from "./Nav";
import { TextReveal } from "@/components/magicui/text-reveal";
import Features from './Features'
import { useRouter } from 'next/navigation';

function HomePage() {
  const router = useRouter();
  return (
    <div className='home-page-main'>
      <Nav/>
      <TextReveal className='bg-white'>Stormee is your intelligent creativity companion. Capture spontaneous ideas, organize them effortlessly, and watch them evolve into innovation. Powered by AI, built for thinkers, dreamers, and doers. </TextReveal>
      <div className='banner'>
        <br/>
        <h1>Let your creativity<br/> run loose</h1><br/>
        <h2>Stormee helps you brainstorm. We help you <b>organize your creativity</b>. We help you cultivate innovation</h2>
        <br/>
        <div className='flex gap-2'>
          <Button className='hover:text-white hover:cursor-pointer' onClick={() => {router.push("/auth")}} variant={'ghost'}>Get Started</Button>
          <Button className='hover:cursor-pointer' onClick={() => {
            const elem = document.getElementById('features');
            if(elem) {
              elem.scrollIntoView({behavior: 'smooth'});
            }
          }} variant={'secondary'}>What we offer</Button>
        </div>
        <br/>
        <h3>Don't let hidden potential overrun your creativity</h3><br/>
        <div className='flex items-center jusitfy-center flex-col gap-6'>
          <div className='flex items-center jusitfy-center gap-2'>
            <Image height={20} src={tick} alt=""/>Easy to use
          </div>
          <div className='flex items-center jusitfy-center gap-2'>
            <Image height={20} src={tick} alt=""/>AI Assistance
          </div>
          <div className='flex items-center jusitfy-center gap-2'>
            <Image height={20} src={tick} alt=""/>Organize your Ideas
          </div>
          <div className='flex items-center jusitfy-center gap-2'>
            <Image height={20} src={tick} alt=""/>Share with family/friends
          </div>
        </div>
      </div>

      {/* <div className='sec-2-main'>
        <div className='sec-2'>
          <h1>Those random ideas that pop in your head <b>do not deserve</b> to be stored in your Notes App</h1>
          <h3>Or a random diary you will eventually loose</h3>
        </div>
      </div> */}
      <Features/>
      <div className='end-quote'>
        <h1>" Every great idea starts with a spark. Stormee helps you turn that spark into a storm "</h1><br/>
        <Button onClick={() => {router.push('/auth')}} variant={'secondary'}>Get Started</Button>
      </div>
      <h1 className='text-center text-white py-10'>Built by <a className='cursor-pointer pb-1 border-b'>Shashwat Mahalanobis</a></h1>
    </div>
  )
}

export default HomePage