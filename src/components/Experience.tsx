import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './animations/LiIcon'

type Props = {}

const Detailes:React.FC<{position:string,company:string,companyLink:string,time:string,address:string,work:string}>=({position,company,companyLink,time,address,work})=>{
    const liRef=useRef<HTMLLIElement>(null)

    return <li ref={liRef} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon liRef={liRef}/>
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5,type:'spring'}}>
            <h3 className=' capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp; <a className=' text-primary dark:text-primaryDark capitalize' target='_blank' href={companyLink}>@{company}</a> </h3>
            <span className=' capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time}-{address}
            
            
            </span>
            <p className=' font-medium w-full md:text-sm'>{work}</p>
        </motion.div>
    </li>
}

const Experience = (props: Props) => {
    const lineRef=useRef<HTMLDivElement>(null)
const {scrollYProgress}=    useScroll({layoutEffect:false,target:lineRef,offset:["start end",'center start']})
  return (
    <div className='my-64' >
        
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>
        <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div style={{scaleY:scrollYProgress}}  ref={lineRef} className=' absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]' />
            <ul className=' w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Detailes address='Present' time='07/2022'  position='FullStack Developer (Freelance)' company='Net-Monitor' 
                work="Developed Network traffic Analyzer UI software that parses and visualizes network traffic data, helping the network administrator to keep an eye on the source and destination IP&apos;s , to find thereasons for possible bottlenecks in bandwidth, using Electron React and Typescript." companyLink="https://www.net-monitor.net/"/>
           <Detailes address='11/2022' time='06/2021'  position='Graphic Designer' company='Matzevot Leibovich' 
                work="Designed 100+ unique headstones by request, adhering to typography basic rules. Successfully created vectorized icons and drawings using Graph tech pro studio for a range of
                clients. Managed design projects from start to finish, ensuring all deadlines were met" companyLink="https://www.net-monitor.net/"/>
            </ul>
        </div>


        </div>

  )
}

export default Experience