import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const Skill:React.FC<{name:string,x:string,y:string}> = ({name,x,y})=>{

return(
    <motion.div initial={{x:0,y:0}} transition={{duration:1}} whileInView={{x,y}} viewport={{once:true}} whileHover={{scale:1.05}} className='flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark py-3 px-6 shadow-dark dark:shadow-light cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-opacity-0 xs:dark:bg-opacity-0 xs:text-dark xs:dark:text-light xs:font-bold'>
    {name}
</motion.div>
)
}


const Skills = (props: Props) => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight lg:bg-circularLightLg md:bg-circularLightMd sm:bg-circularLightSm dark:bg-circularDark lg:dark:bg-circularDarkLg md:dark:bg-circularDarkMd sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]'>
<motion.div whileHover={{scale:1.05}} className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:bg-light dark:text-dark dark:shadow-light cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2'>
    Web
</motion.div>
<Skill name='CSS' x={'-5vw'} y="-8vw"/>
<Skill name='HTML' x={'-20vw'} y="2vw"/>
<Skill name='Javascript' x={'18vw'} y="6vw"/>
<Skill name='Typescript' x={'0vw'} y="14vw"/>
<Skill name='ReactJs' x={'-20vw'} y="-12vw"/>
<Skill name='NextJs' x={'15vw'} y="-15vw"/>
<Skill name='MongoDb' x={'32vw'} y="-5vw"/>
<Skill name='Express' x={'0vw'} y="-22vw"/>
<Skill name='Tailwind CSS' x={'-25vw'} y="15vw"/>
<Skill name='Figma' x={'18vw'} y="19vw"/>
<Skill name='Electron' x={'-33vw'} y="5vw"/>

    </div>
    </>
  )
}

export default Skills