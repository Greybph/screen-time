import girlOnTablet from '../assets/kids-on-phone.jpg'
import {Link} from 'remix'
import {BsArrowRightCircleFill} from 'react-icons/bs'
import dogIcon from '~/assets/dogIcon.svg'
import catIcon from '~/assets/catIcon.svg'
import pigIcon from '~/assets/pigIcon.svg'
import pandaIcon from '~/assets/pandaIcon.svg'
import {useState} from 'react'

function Index() {
  const [idx, setIdx] = useState(0)
  const icons = [catIcon, dogIcon, pigIcon, pandaIcon]

  function increment() {
    idx === 3 ? 
      setIdx(0)
    :
      setIdx(idx + 1)
  }

  return (    
    <div className="relative px-10 mt-28">
    <h1 className='mb-16 text-2xl leading-normal tracking-wide transition-colors duration-700 delay-500 text-slate-900 dark:text-white'>
      Make the most of their screen time
    </h1>
    <img 
      className='w-24 mx-auto mb-10'
      onClick={increment} 
      src={icons[idx]} alt="animal icon" 
    />
    <Link to='register'>
      <button 
        className='w-full py-1 text-lg tracking-wide transition-colors duration-700 delay-500 border-4 rounded-md text-slate-900 border-slate-900 dark:text-white dark:border-white'
      >
        Get Started
      </button><br />
    </Link>
    <Link to='/shows'>
      <button 
        className='w-full py-2 my-4 text-lg tracking-wide text-white transition-colors duration-700 delay-500 rounded-md bg-slate-900 dark:bg-slate-800'
      >
        Browse
      </button>
    </Link>
    <img 
      className='w-11/12 mx-auto my-10 rounded-lg shadow-md' 
      src={girlOnTablet} alt="young child using a tablet" 
      title='Photo by McKaela Taylor on Unsplash'
    />
    <p className='text-2xl leading-normal text-black transition-colors duration-700 delay-500 dark:text-white'>Our kids are spending more time on screens than ever before.</p>
    <Link to='about' className='flex items-center justify-between px-2 my-10'>
      <span className='text-xl text-gray-700 transition-colors duration-700 delay-500 dark:text-gray-400'>Learn how we can help</span>
      <BsArrowRightCircleFill className='text-4xl transition-colors duration-700 delay-500 text-slate-900 dark:text-yellow-300'/>
    </Link>
  </div>
  )
}

export default Index
  

