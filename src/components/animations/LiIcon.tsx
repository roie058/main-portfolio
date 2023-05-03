import { motion, useScroll } from 'framer-motion'
import React, { Ref, RefObject, useRef } from 'react'

type Props = {liRef:RefObject<HTMLLIElement>}

const LiIcon = (props: Props) => {
 
    const {scrollYProgress}=useScroll({target:props.liRef,offset:["center end",'center center']})
  return (
    <figure className=' absolute left-0 stroke-dark'>
        <svg className='-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]' width="75" height="75" viewBox='0 0 100 100'>
            <circle cx="75" cy="50" r="20" className=' stroke-primary dark:stroke-primaryDark stroke-1 fill-none'/>
            <motion.circle style={{pathLength:scrollYProgress}}  cx="75" cy="50" r="20" className='stroke-[5px] fill-light'/>
            <circle cx="75" cy="50" r="10" className=' animate-pulse stroke-1 fill-primary dark:fill-primaryDark'/>
        </svg>
    </figure>
  )
}

export default LiIcon