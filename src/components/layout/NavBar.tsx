import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from '../brand/Logo'
import { useRouter } from 'next/router'
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, MoonIcon, SunIcon } from '../brand/Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from '../hooks/useThemeSwitcher'

type Props = {
    href:string,title:string,className?:string,toggle?:()=>void
}

type NavProps = {

}

const CustomLink:React.FC<Props>=({href,title,className=""})=>{
    const router=useRouter()
return(
    <Link href={href} className={`${className} dark:text-light relative group`}>
        {title}
        <span className={`h-[1px] inline-block  bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath===href?'w-full':'w-0'}`}>&nbsp;</span>
    </Link>
)
}

const CustomMobileLink:React.FC<Props>=({href,title,className="",toggle})=>{
    const router=useRouter()
    const handleClick=()=>{
        if(toggle){
            toggle()
        }
       
router.push(href)

    }
return(
    <button onClick={handleClick} className={`${className} dark:text-dark relative group text-light my-2`}>
        {title}
        <span className={`h-[1px] inline-block  bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath===href?'w-full':'w-0'}`}>&nbsp;</span>
    </button>
)
}

const CostumNavLink=motion(Link)

const NavBar = (props: NavProps) => {
  const  {mode,setMode}=useThemeSwitcher()
 const [open,setOpen]=useState(false)


 const handleClick= ()=>{
    setOpen(!open)
 }
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8 '>

<button id='openMenu' name='openMenu' aria-label='open the menu' className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
    <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${open?"rotate-45 translate-y-1":'-translate-y-0.5'}`}></span>
    <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${open?'opacity-0':'opacity-100'}`}></span>
    <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${open?"-rotate-45 -translate-y-1":'translate-y-0.5'}`}></span>
</button>
<div className='w-full flex justify-between items-center lg:hidden'>
<nav>
    <CustomLink href={'/'} title='home' className='mr-4 '/>
    <CustomLink href={'/projects'} title='Projects' className='mx-4 '/>
    <CustomLink href={'/about'} title='About' className='ml-4 '/>


  
</nav>

<nav className='flex items-center justify-center flex-wrap '>
<CostumNavLink className='w-6 mr-3' whileTap={{scale:0.9}} whileHover={{y:-2}} href={'https://www.linkedin.com/in/roie-lebovich'} target='_blank'><LinkedInIcon /></CostumNavLink>
<CostumNavLink className='w-6 mx-3' whileTap={{scale:0.9}}  whileHover={{y:-2}} href={'https://www.instagram.com/roie_leb'} target='_blank'><InstagramIcon/></CostumNavLink>
<CostumNavLink className='w-6 mx-3' whileTap={{scale:0.9}}  whileHover={{y:-2}} href={'https://github.com/roie058'} target='_blank'><GithubIcon className='dark:text-light'/></CostumNavLink>
<CostumNavLink className='w-6 mx-3' whileTap={{scale:0.9}}  whileHover={{y:-2}} href={'https://www.facebook.com/profile.php?id=100000664470842'} target='_blank'><FacebookIcon className='dark:bg-light rounded-lg'/></CostumNavLink>

<button className={`w-6 ml-4 flex items-center justify-center rounded-full p-1 ${mode==='light'?'bg-dark text-light':"bg-light text-dark"}`} onClick={()=>{setMode((mode:string)=> mode==="dark"?'light':'dark')}}>
    {mode==='dark' ?<SunIcon className='fill-dark'/>: <MoonIcon className='fill-dark'/> }
</button>


</nav>
</div>

{open? <motion.div initial={{scale:0,opacity:0,x:'-50%',y:'-50%'}} animate={{scale:1,opacity:1}} className='min-w-[70vw] flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 hidden  lg:flex  '>
<nav className='flex items-center flex-col justify-center'>
    <CustomMobileLink  href={'/'} title='home'  toggle={handleClick}/>
    <CustomMobileLink href={'/projects'} title='Projects'  toggle={handleClick}/>
    <CustomMobileLink href={'/about'} title='About'  toggle={handleClick}/>
  

  
</nav>

<nav className='flex items-center justify-center flex-wrap mt-2 '>
<CostumNavLink className='w-6 mr-3 sm:mx-1' whileTap={{scale:0.9}} whileHover={{y:-2}} href={'https://www.linkedin.com/in/roie-lebovich'} target='_blank'><LinkedInIcon /></CostumNavLink>
<CostumNavLink className='w-6 mx-3 sm:mx-1' whileTap={{scale:0.9}}  whileHover={{y:-2}} href={'https://www.instagram.com/roie_leb'} target='_blank'><InstagramIcon  /></CostumNavLink>
<CostumNavLink className='w-6 mx-3 sm:mx-1' whileTap={{scale:0.9}}  whileHover={{y:-2}} href={'https://github.com/roie058'} target='_blank'><GithubIcon className='dark:bg-dark bg-light dark:text-light rounded-full'/></CostumNavLink>
<CostumNavLink className='w-6 ml-3 sm:mx-1' whileTap={{scale:0.9}}  whileHover={{y:-2}} href={'https://www.facebook.com/profile.php?id=100000664470842'} target='_blank'><FacebookIcon className='bg-light rounded-lg'/></CostumNavLink>

<button className={`w-6 ml-3 sm:ml-1 flex items-center justify-center rounded-full p-1 ${mode==='light'?'bg-dark text-light':"bg-light text-dark"}`} onClick={()=>{setMode((mode:string)=> mode==="dark"?'light':'dark')}}>
    {mode==='dark' ?<SunIcon className='fill-dark'/>: <MoonIcon className='fill-dark'/> }
</button>


</nav>
</motion.div>:null}
<div className=' absolute left-[50%] top-2 translate-x-[-50%]'>
    <Logo/>
    </div>

    </header>
  )
}

export default NavBar