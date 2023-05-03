import { motion } from 'framer-motion'
import React from 'react'

type Props = {text:string,className?:string}


const quoate={
    initial:{opacity:1},
    animate:{opacity:1,transition:{delay:0.5,staggerChildren:0.08}}
}

const single={
    initial:{opacity:0,y:50,},
    animate:{opacity:1,y:0,transition:{duration:1}}
}

const AnimatedText = ({text,className=""}: Props) => {
  return (
    <div className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0`}>
<motion.h1 className={` inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl ${className} `} variants={quoate} initial="initial" animate="animate" >
    {text.split(' ').map((word,i)=>{
return <motion.span variants={single}   key={word+i} className=' inline-block py-2'>
    {word}&nbsp;
</motion.span>

    })}
    </motion.h1>
    </div>
  )
}

export default AnimatedText