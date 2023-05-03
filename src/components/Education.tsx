import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './animations/LiIcon'

type Props = {}

const Detailes:React.FC<{type:string,time:string,place:string,info:string}>=({type,time,place,info})=>{
    const liRef=useRef<HTMLLIElement>(null)

    return <li ref={liRef} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]'>
        <LiIcon liRef={liRef}/>
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5,type:'spring'}}>
            <h3 className=' capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}&nbsp; </h3>
            <span className=' capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time}|{place}
            
            
            </span>
            <p className=' font-medium w-full md:text-sm'>{info}</p>
        </motion.div>
    </li>
}

const Education = (props: Props) => {
    const lineRef=useRef<HTMLDivElement>(null)
const {scrollYProgress}=    useScroll({target:lineRef,offset:["start end",'center start']})
  return (
    <div className='my-64' >
        
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Education</h2>
        <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div style={{scaleY:scrollYProgress}}  ref={lineRef} className=' absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]' />
            <ul className=' w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Detailes type='Course' place='Colt Steele' time='2021' info='The web development bootcamp'/>
                <Detailes type='Course' place='Academind' time='2021' info='React - The Complete Guide (incl Hooks, React Router, Redux)'/>
                <Detailes type='Course' place='Academind' time='2021' info='React, NodeJS, Express & MongoDB - The MERN Fullstack Guide'/>
           
            </ul>
        </div>


        </div>

  )
}

export default Education