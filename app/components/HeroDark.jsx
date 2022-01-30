import spiralY from '../assets/spiral-y.svg'
import spiralS from '../assets/spiral-s.svg'
import spiralP from '../assets/spiral-p.svg'
import spiralE from '../assets/spiral-e.svg'
import squiggleY from '../assets/sqiuggle-y.svg'
import wave from '../assets/wave.svg'
import girlOnTablet from '../assets/kids-on-phone.jpg'
import graph from '../assets/graph.svg'
import {Link} from 'remix'
import {BsArrowRight, BsArrowRightCircleFill} from 'react-icons/bs'

function HeroDark() {
  return (
  <div className="relative px-10 mt-24 ">
    <h1 className='text-2xl leading-normal transition-colors duration-700 delay-500 md:text-4xl dark:text-white'>Help your child get the most out of their screen time.</h1>
    <button className='px-10 py-4 mt-10 prose-xl text-white transition-colors duration-700 delay-500 rounded-full dark:bg-white dark:text-slate-900 hover:bg-slate-800 bg-slate-900'>Get Started</button><br />
    <button className='py-3 mt-2 prose-xl transition-colors duration-700 delay-500 border-4 rounded-full px-14 text-slate-900 hover:bg-slate-300 border-slate-900 dark:border-emerald-300 dark:text-white'>Browse</button>
    <img className='w-11/12 mx-auto my-20 rounded-lg shadow-md ' src={girlOnTablet} alt="young child using a tablet" />
    {/* Photo by McKaela Taylor on Unsplash */}
    <h2 className='pb-4 text-2xl leading-normal text-black dark:text-white'>Our kids are spending more time on screens than ever before.</h2>
    <Link to='about' className='flex items-center justify-between my-20'>
      <span className='text-xl text-gray-700 dark:text-gray-400'>Learn how we can help</span>
      <BsArrowRightCircleFill className='text-6xl text-slate-900 dark:text-yellow-300'/>
    </Link>
  </div>
  
  )
}

export default HeroDark;
