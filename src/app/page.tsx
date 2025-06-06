import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full bg-white">
      <Navbar/>
      <Hero/>
    </div>
  );
}
