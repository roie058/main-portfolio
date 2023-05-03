import AnimatedText from '@/components/animations/AnimatedText'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, {  useEffect, useRef } from 'react'
import profilePic from '../../public/roie_leb.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skils'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Transition from '@/components/animations/Transition'
type Props = {}

const AnimatedNumbers:React.FC<{value:number,fix?:number}>=({value,fix=1})=>{
   const numberRef=useRef<HTMLSpanElement>(null);
const motionValue=useMotionValue(0);
const springValue=useSpring(motionValue,{duration:3000,});
const isInView=useInView(numberRef);

useEffect(() => {
  if(isInView){
    motionValue.set(value)
  } 
}, [isInView,value,motionValue])

useEffect(() => {
    springValue.on("change",(latest)=>{
if(numberRef&& numberRef.current&&latest.toFixed(0)<=value){
numberRef.current.textContent=latest.toFixed(fix)
}

    })
  
  }, [springValue,value])

    return <span ref={numberRef}></span>
}



const about = (props: Props) => {
  return (
    <>
    <Head>
    <title>Roie's portfolio | About Page</title>
    <meta key={'description'} name="description" content="About me page that shows you what my experience" />
    
  </Head>
  <Transition/>
    <main className='flex w-full flex-col items-center justify-center '>
        <Layout className='pt-16'>
        <AnimatedText text='Passion Fuels Purpose! ' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 '/>
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
<div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 '>
    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
    <p className='font-medium'>Hi, I'm Roie, a fullstack web developer with a passion for creating beautiful, functional, 
and user-centered web apps.with keen intrest in node.js and react development. I am always looking for 
a challenge.</p>
    <p className=' my-4 font-medium'>I believe that design is about more than just making things look pretty – it's about solving problems and 
creating intuitive, enjoyable experiences for users. </p>
    <p className='font-medium'>I'm an hard-worker, fast and independent learner, team player, creative and highly motivated. I bring my commitment to design excellence and user-centered thinking to 
every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
    </div>
    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-8 '>
        <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light ' />
<Image src={profilePic} alt='my picture' className='w-full h-auto rounded-2xl' priority sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw,33vw'/>

    </div>
<div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 '>
   <div className='flex flex-col items-end justify-center xl:items-center'>
    <span className=' inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl '><AnimatedNumbers value={1.5}/>+</span>
    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center xl:text-lg sm:text-base xs:text-sm'>years of experience</h2>
    </div> 
    <div className='flex flex-col items-end justify-center xl:items-center'>
    <span className=' inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers fix={0} value={300}/>%</span>
    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center xl:text-lg sm:text-base xs:text-sm'>amount of dedication  </h2>
    </div> 
    <div className='flex flex-col items-end justify-center xl:items-center'>
    <span className=' inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers fix={0} value={100}/>%</span>
    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center xl:text-lg sm:text-base xs:text-sm'>Satisfaction guaranteed</h2>
    </div> 
</div>


        </div>
        <Skills/>
        <Experience/>
        <Education/>
        </Layout>
        
    </main>
    </>
  )
}

export default about