import girlOnTablet from '../assets/kids-on-phone.jpg'
import {Link} from 'remix'
import {BsArrowRightCircleFill} from 'react-icons/bs'

function Index() {

  return (    
    <div className="relative px-10 mt-28 ">
    <h1 className='text-2xl leading-normal transition-colors duration-700 delay-500 text-slate-900 md:text-4xl dark:text-white'>
      Make the most of their screen time
    </h1>
    <Link to='register'>
      <button 
        className='w-full py-2 mt-4 text-lg tracking-wide text-white transition-colors duration-700 delay-500 rounded-md bg-slate-900'
      >
        Get Started
      </button><br />
    </Link>
    <Link to='/shows'>
      <button 
        className='w-full py-1 mt-4 text-lg tracking-wide transition-colors duration-700 delay-500 border-4 rounded-md text-slate-900 border-slate-900'
      >
        Browse
      </button>
    </Link>
    <img 
      className='w-11/12 mx-auto mt-20 rounded-lg shadow-md' 
      src={girlOnTablet} alt="young child using a tablet" 
      title='Photo by McKaela Taylor on Unsplash'
    />
    <h2 className='mt-20 text-2xl leading-normal text-black dark:text-white'>Our kids are spending more time on screens than ever before.</h2>
    <Link to='about' className='flex items-center justify-between px-2 my-20'>
      <span className='text-xl text-gray-700 dark:text-gray-400'>Learn how we can help</span>
      <BsArrowRightCircleFill className='text-4xl text-slate-900 dark:text-yellow-300'/>
    </Link>
  </div>
  )
}

export default Index
  

