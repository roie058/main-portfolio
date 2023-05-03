import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg sm:text-base'>

 
    <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6' >
      <span>{new Date().getFullYear()} &copy; All Rights Reserved. </span>
      <div className='flex items-center pt-2'>
       Built With <span className=' text-primary dark:text-primaryDark text-2xl px-1'>&#9825; </span> by&nbsp; <Link className='underline underline-offset-2' href={'/'}>Roie Leibovich</Link>    
        </div>  
      
    </Layout>
    </footer>
  )
}

export default Footer