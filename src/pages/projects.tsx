import AnimatedText from '@/components/animations/AnimatedText'
import { GithubIcon } from '@/components/brand/Icons'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import TravelBuddyPic from '../../public/images/travelbuddy.jpg'
import PortfolioPic from '../../public/images/portfolio.jpg'
import FoodsterPic from '../../public/images/Foodster.jpg'
import MatzevotPic from '../../public/images/matzevot.jpg'
import BurgerPrincePic from '../../public/images/burgerprince.jpg'
import AndersonRetailPic from '../../public/images/andersonretail.jpg'
import Transition from '@/components/animations/Transition'
import { motion } from 'framer-motion'
type Props = {}

const FramerImage = motion(Image)


const FeaturedProject:React.FC<{type:string,title:string,summary:string,img:StaticImageData,link:string,github:string}>=({type,title,summary,img,link,github})=>{


    return <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
       <div className=' absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 xs:w-full xs:rounded-[1.5rem]' />
        <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
<FramerImage whileHover={{scale:1.05}} transition={{duration:0.2}} src={img} alt={title} className='w-full h-auto' priority sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw,50vw'/>
        </Link>
        <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
            <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
            <Link href={link} target='_blank' className=' hover:underline underline-offset-2'>
<h2 className='my-2 w-full text-left text-4xl font-bold  sm:text-2xl'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
        <Link href={github} className='w-10' target='_blank'>
            <GithubIcon/>
        </Link>
        <Link href={link} target='_blank' className='bg-dark text-light ml-4 rounded-lg p-2 px-6 text-lg font-semibold border border-solid border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:border-light dark:hover:bg-dark dark:hover:text-light sm:px-4 sm:text-base  '>
            Visit Project
        </Link>
        </div>
        </div>
    </article>
}

const Project:React.FC<{type:string,title:string,img:StaticImageData,link:string,github:string}>=({type,title,img,link,github})=>{

    return <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative xs:p-4'>
        <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101% xs:rounded-[1.5rem]] ' />
        <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
<FramerImage whileHover={{scale:1.05}} transition={{duration:0.2}} src={img} alt={title} className='w-full h-auto'/>
        </Link>
        <div className='w-full flex flex-col items-start justify-between mt-4'>
            <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
            <Link href={link} target='_blank' className=' hover:underline underline-offset-2'>
<h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
        </Link>
      
        <div className='w-full mt-2 flex flex-row-reverse justify-between items-center'>
        <Link href={github} className='w-8 md:w-6' target='_blank'>
            <GithubIcon/>
        </Link>
        <Link href={link} target='_blank' className='text-lg font-semibold underline md:text-base '>
            Visit
        </Link>
        </div>
        </div>
    </article>
}

const projects = (props: Props) => {
  return (
    <>
    <Head>
    <title>Roie&apos;s portfolio | Projects Page</title>
    <meta key={'description'} name="description" content="Projects page that shows you my work in action" />
    
  </Head>
  <Transition/>
    <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
            <AnimatedText text='Imagination Trumps Knowledge!' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0' >
<div className='col-span-12'>
    <FeaturedProject img={TravelBuddyPic} type='Featured Project-NEW!' github='https://github.com/roie058/travel-buddy' link='https://travel-buddy-one.vercel.app' summary="Fully working travel advisor app with interacrive map working with many travel and weather api&apos;s to help you plan the perfect trip" title='Travel Buddy'/>
</div>
<div className='col-span-6 sm:col-span-12'>
<Project img={BurgerPrincePic} type='Featured Project' github='/' link='https://burger-prince.netlify.app' title='Burger Prince'/>
</div>
<div className='col-span-6 sm:col-span-12'>
<Project img={PortfolioPic} type='Featured Project' github='https://github.com/roie058/portfolio' link='https://roie-leibovich.vercel.app' title='Personal Website'/>
</div>
<div className='col-span-12'>
<FeaturedProject img={FoodsterPic} type='Featured Project' github='https://github.com/roie058/foodster' link='https://foodster-il.onrender.com' summary='discover restaurants around you add restaurants and rate others including claster map reviews and authentication' title='Foodster app'/>
</div>
<div className='col-span-6 sm:col-span-12'>
<Project img={MatzevotPic} type='Featured Project' github='https://github.com/roie058/matzevot-leb' link='https://matzevot-leb.vercel.app' title='Matzevot Leibovich Website'/>
</div>
<div className='col-span-6 sm:col-span-12'>
<Project img={AndersonRetailPic} type='Featured Project' github='https://github.com/roie058/market' link='https://anderson-retail.netlify.app' title='Anderson Retail'/>

</div>
            </div>
        </Layout>
    </main>
    </>
  )
}

export default projects