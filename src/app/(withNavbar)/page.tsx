import { Hero } from '@/components/Hero';
import Link from 'next/link';
import { GlanceProjects } from '@/components/GlanceProjects';
import ResearchAreas from '@/components/ResearchAreas';
import { TimelineDemo } from '@/components/Timeline';
import { TeamGlance } from '@/components/TeamGlance';

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full bg-white">
      
      <Hero/>
      {/* <TextGenerate/> */}
      <GlanceProjects/>
      <ResearchAreas/> 
      <TimelineDemo/>
      {/* Meet the team section */}
      <section className="pb-10 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mt-6 sm:mt-10 w-full rounded-xl mx-auto p-2 sm:p-4 border border-neutral-200 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 justify-between items-center">
          <div className="p-2 sm:p-4 text-lg sm:text-2xl md:text-5xl text-center font-sans w-full md:w-fit font-bold text-neutral-800">
            Meet The Team
          </div>
          <div className="flex justify-center">
            <TeamGlance/>
          </div>
          <div className="flex flex-col items-center justify-center mt-4 md:mt-0">
            {/* <Link href="/research" ><div className='font-sans bg-white text-black p-3 px-4 rounded-4xl m-3 w-fit flex flex-row gap-3 items-center border-2 cursor-pointer' > Know More <FaArrowRightLong/></div></Link> */}
            <Link href="/team" className="inline-flex h-10 sm:h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 sm:px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Know More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
