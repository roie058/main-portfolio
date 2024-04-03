import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image';
import Pic from '../../../public/roie_leb.png'
type Props = {}


const LinkMotion= motion(Link);

const Logo = (props: Props) => {
  return (
    <div className='flex items-center justify-center mt-2' >
<LinkMotion whileHover={{backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],transition:{duration:1,repeat:Infinity}}} className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transperent dark:border-light'  href={'/'}>
    RL
    <Image alt='Roie Leibovich'  src={Pic} className='w-[90%] absolute opacity-50' />
</LinkMotion>

    </div>
  )
}

export default Logo