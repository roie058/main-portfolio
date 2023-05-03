
import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import Image from 'next/image'
import ProfilePic from '../../public/photo_no_upscale-removebg-preview.png'
import AnimatedText from '@/components/animations/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/brand/Icons'
import HireMe from '@/components/animations/HireMe'
import LightBulbIcon from '../../public/icons/lightbulb.svg'
import Transition from '@/components/animations/Transition'

export default function Home() {
  return (
    <>
    <Head>
    <title>Roie's portfolio</title>
    <meta key={'description'} name="description" content="Generated by Roie's portfolio" />
    
  </Head>
  <Transition/>
    <main
      className={`flex items-center text-dark dark:text-light w-full min-h-screen`}
    >
      <Layout className='pt-0 md:pt-16 sm:pt-8'>
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className='w-1/2 md:w-full'>
          <Image src={ProfilePic} alt='roie leibovich' className='w-full h-[100vh] object-contain lg:hidden md:inline-block md:w-full md:h-[80vh]' priority sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw,50vw'/>
          </div>
        <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
      
          <AnimatedText className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' text='Making Dreams Come To Life With Code And Design.'/>
          <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>A full-stack developer, I am dedicated to turning ideas into Inovative Beautiful and Responsive web apps for any purpose. 
Explore my latest projects, showcasing my expertise in React.js and web development</p>
<div className='flex items-center self-start mt-2 lg:self-center'>
  <Link className='flex items-center bg-dark text-light p-2.5 rounded-lg px-6 text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid  border-transparent hover:border-dark dark:bg-light dark:text-dark  dark:hover:bg-dark dark:hover:text-light dark:hover:border-light md:p-2 md:px-4 md:text-base   ' download={true} href={'/dummy.pdf'} target='_blank'>Resume 
  <LinkArrow className='w-6 ml-1'/>
  </Link>
  <Link href={'mailto:roie058@gmail.com'} className='ml-4 text-lg font-medium capitalize text-dark dark:text-light underline md:text-base'>Contact</Link>
</div>
        </div>
        </div>
      </Layout>
      <HireMe/>
      <div className=' absolute right-8 bottom-8 inline-block w-24 md:hidden'>
        <Image src={LightBulbIcon} alt='roie leibovich' className='w-full h-auto'/>
      </div>
    </main>
    </>
  )
}
