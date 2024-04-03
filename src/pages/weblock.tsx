import AnimatedText from '@/components/animations/AnimatedText'
import Transition from '@/components/animations/Transition'
import { LinkArrow } from '@/components/brand/Icons'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import WebImage from '../../public/images/weblockImage.png'
import { motion } from 'framer-motion'
import Step1Gif from '../../public/images/steps/step1.gif'
import Step2Gif from '../../public/images/steps/step2.gif'
import Step3Gif from '../../public/images/steps/step3.gif'
import Step4Gif from '../../public/images/steps/step4.gif'
import Step5Gif from '../../public/images/steps/step5.gif'
import Step6Gif from '../../public/images/steps/step 6.gif'
type Props = {}

const FramerImage = motion(Image)


const FeaturedProject:React.FC<{type:string,title:string,summary:string,img:StaticImageData,link?:string,github:string}>=({type,title,summary,img,link,github})=>{


    return <section className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
       <div className=' absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 xs:w-full xs:rounded-[1.5rem]' />
        <div  className='flex justify-center w-1/2  overflow-hidden rounded-lg lg:w-full'>
<FramerImage whileHover={{scale:1.05}} transition={{duration:0.2}} src={img} alt={title} className='w-full max-w-[500px] object-contain h-auto max-h-[300px]' priority sizes='(max-width:768px) 80vw, (max-width:1200px) 50vw, 50vw'/>
        </div>
        <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
            <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
            <div  className=' hover:underline underline-offset-2'>
<h2 className='my-2 w-full text-left text-4xl font-bold  sm:text-2xl'>{title}</h2>
        </div>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
        
        {link && <Link href={link} target='_blank' className='bg-dark text-light rounded-lg p-2 px-6 text-lg font-semibold border border-solid border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:border-light dark:hover:bg-dark dark:hover:text-light sm:px-4 sm:text-base  '>
            Visit Store
        </Link>}
        </div>
        </div>
    </section>
}

const weblock = (props: Props) => {
  return (
    <>
    <Head>
    <title>Roie&apos;s portfolio | WebLock project Page</title>
    <meta key={'description'} name="description" content="WebLock official page and support" />
    
  </Head>
  <Transition/>
    <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16 flex flex-col justify-center items-center'>
        <div className="flex flex-col items-center justify-between w-full lg:flex-col">
          <div className='w-full md:w-full'>
          <Image src={WebImage} alt='roie leibovich' className='w-[100%] h-[50vh] object-contain lg:hidden md:inline-block md:w-[100%] md:h-[30vh]  ' priority sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw,50vw'/>
          </div>
        <div className='w-[70%] flex flex-col text-center items-center self-center lg:w-full   lg:text-center'>
      
          <AnimatedText className='!text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-3xl sm:!text-xl' text='WebLock - an extension that helps you control your bad habits.'/>
          <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>This tool offers a seamless solution for increasing productivity and minimizing distractions while browsing the web. With just a few clicks, you can block access to specific websites for a designated period, allowing you to stay focused on your tasks without being tempted by time-consuming or distracting sites. </p>
<div className='flex items-center self-start mt-2 lg:self-center'>
  <Link className='flex items-center bg-dark text-light p-2.5 rounded-lg px-6 text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid  border-transparent hover:border-dark dark:bg-light dark:text-dark  dark:hover:bg-dark dark:hover:text-light dark:hover:border-light md:p-2 md:px-4 md:text-base   ' href={"/Roi's Resume (fs).pdf"} target='_blank'>Download 
  <LinkArrow className='w-6 ml-1'/>
  </Link>
  <Link href={'mailto:roie058@gmail.com'} className='ml-4 text-lg font-medium capitalize text-dark dark:text-light underline md:text-base'>Contact</Link>
</div>
        </div>
        </div>
        <div className=' mt-16 w-[60%] lg:w-[80%] col-span-3 flex flex-col items-center justify-center xl:col-span-4 md:order-2 md:col-span-8 gap-8 '>
    <h2 className='mb-4 text-3xl font-bold  text-dark dark:text-light'>Instructions:</h2>
    <FeaturedProject type='Step 1' title='Install the Extension:' summary="If you haven't already, Install the extension files from the store." img={Step1Gif} link='' github=''/>
    <FeaturedProject type='Step 2' title='Open the Popup:' summary="Click on the extension icon (usually located next to the address bar in Chrome) to open the extension popup." img={Step2Gif} link='' github=''/>
    <FeaturedProject type='Step 3' title='Add Blocked Websites:' summary='In the popup, navigate to "Blocked List" you can add websites to your blocked list by typing the URL of the website into the input field and clicking the "Add" button.' img={Step3Gif} link='' github=''/>
    <FeaturedProject type='Step 4' title='Remove Blocked Websites:' summary='On the "Blocked List", you can remove websites by clicking the "Remove" button next to the desired URL.' img={Step4Gif} link='' github=''/>
    <FeaturedProject type='Step 5' title='Toggle Blocking State:' summary='On the Home page of the popup, Use the time-selector to adjust the block time, then press the toggle button labeled "start" to turn the blocking feature on. When the toggle is in the "on" position, the extension will block access to the listed websites and cannot be turned off!.' img={Step5Gif} link='' github=''/>
    <FeaturedProject type='Step 6' title='Enjoy Motivational Content:' summary='If you attempt to access a blocked website while blocking is active, the extension will redirect you to a random David Goggins motivational video.' img={Step6Gif} link='' github=''/>
   
    </div>
            </Layout>
            </main>
</>
  )
}

export default weblock