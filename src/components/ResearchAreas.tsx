import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const ResearchAreas = () => {
    const researchAreascontent = [
        {
            logo: '/lightning.png',
            title: 'Artificial Intelligence',
            description: 'Exploring the frontiers of AI, from machine learning to natural language processing.',
            
        },
        {
            logo: '/lightning.png',
            title: 'Artificial Intelligence',
            description: 'Exploring the frontiers of AI, from machine learning to natural language processing.',
            
        },
        {
            logo: '/lightning.png',
            title: 'Artificial Intelligence',
            description: 'Exploring the frontiers of AI, from machine learning to natural language processing.',
            
        },
        {
            logo: '/lightning.png',
            title: 'Artificial Intelligence',
            description: 'Exploring the frontiers of AI, from machine learning to natural language processing.',
            
        },
        {
            logo: '/lightning.png',
            title: 'Artificial Intelligence',
            description: 'Exploring the frontiers of AI, from machine learning to natural language processing.',
            
        },
        {
            logo: '/lightning.png',
            title: 'Artificial Intelligence',
            description: 'Exploring the frontiers of AI, from machine learning to natural language processing.',
            
        },
        
    ]
  return (
    <div className='flex flex-col w-full bg-white p-4 font-sans gap-5 pr-3'>
      <div><h1 className='max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans '>Key Research Areas</h1></div>
      <div className=' max-w-4xl mx-auto'>
        <Link href="/research" ><div className='font-sans bg-white text-black p-3 px-4 rounded-4xl m-3 w-fit flex flex-row gap-3 items-center border-2 cursor-pointer hover:text-white hover:bg-neutral-800 duration-200' > Our Research and Publications <FaArrowRightLong/></div></Link>
      </div>
      <div className='flex flex-col items-center justify-center p-4 font-sans gap-5 max-w-7xl mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {researchAreascontent.map((area, index) => (
                
                <div key={index} className="bg-neutral-100 rounded-lg p-6 flex flex-col ">
                <img src={area.logo} alt={`${area.title} logo`} className=" h-16 w-16"/>
                <h2 className='text-xl md:text-2xl text-black font-semibold'>{area.title}</h2>
                <p className='text-lg text-neutral-700'>{area.description}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ResearchAreas
