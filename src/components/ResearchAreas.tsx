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
    <div className='flex flex-col w-full bg-white p-2 sm:p-4 font-sans gap-5 pr-0 sm:pr-3'>
      <div>
        <h1 className='max-w-7xl pl-2 sm:pl-4 mx-auto text-lg sm:text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans'>
          Key Research Areas
        </h1>
      </div>
      <div className='max-w-4xl mx-auto'>
        <Link href="/research">
          <div className='bg-gradient-to-br from-blue-700 to-pink-700 p-1 md:p-0.5 rounded-full hover:from-blue-800 hover:to-pink-800 duration-100 '>
            <div className='font-sans bg-white text-black p-3 rounded-full w-fit flex flex-row gap-2 sm:gap-3 items-center border-2 cursor-pointer hover:text-white hover:bg-neutral-800 duration-200 animate-none'>
            Our Research and Publications <FaArrowRightLong/>
          </div>
          </div>
          
        </Link>
      </div>
      <div className='flex flex-col items-center justify-center p-2 sm:p-4 font-sans gap-4 sm:gap-5 max-w-7xl mx-auto'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {researchAreascontent.map((area, index) => (
                <div key={index} className="bg-neutral-100 rounded-lg p-4 sm:p-6 flex flex-col ">
                  <img src={area.logo} alt={`${area.title} logo`} className="h-12 w-12 sm:h-16 sm:w-16"/>
                  <h2 className='text-lg sm:text-xl md:text-2xl text-black font-semibold'>{area.title}</h2>
                  <p className='text-base sm:text-lg text-neutral-700'>{area.description}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ResearchAreas
