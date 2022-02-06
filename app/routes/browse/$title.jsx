import { Link, useLoaderData } from 'remix'
import Shows from '../../models/Shows'
import {useState, useRef, useEffect} from 'react'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

export async function loader({params}) {
  const title = params.title.replaceAll('-', " ")
  const show = await Shows.find({title: title})
  return show[0]
}

export async function action() {
  return null
}

function Title() {
  const show = useLoaderData()
  const [sliderIndex, setSliderIndex] = useState(0)
  const [sliderText, setSliderText] = useState(show.focus[sliderIndex])
  const focusCarouselRef = useRef()

  useEffect(() => {
    setSliderText(show.focus[sliderIndex])
  }, [sliderIndex])

  function handleRightClick() {
    sliderIndex === show.focus.length - 1 ? 
      setSliderIndex(0)
    :
      setSliderIndex(sliderIndex + 1)
  }
  

  function handleLeftClick() {
    sliderIndex === 0 ?
      setSliderIndex(show.focus.length - 1)
    :
      setSliderIndex(sliderIndex - 1)
  }
  
  return (
    <div className='flex flex-col items-center justify-center px-10 mt-32'>
      <h1 className='mb-4 text-3xl text-center text-slate-900 dark:text-white'>{show?.title}</h1>
      <img 
        src={show?.image} alt={`${show?.title} title image`}
        className="mb-2 rounded-md w-72"
        />
      <div className='flex items-center justify-center w-full my-4'>
        <IoIosArrowBack 
          onClick={handleLeftClick}
          className='text-6xl dark:text-slate-700'
        />
        <span 
          className='w-5/6 text-xl text-center dark:text-white whitespace-nowrap'
        >
          {sliderText}
        </span>
        <IoIosArrowForward 
          onClick={handleRightClick}
          className='text-6xl dark:text-slate-700' 
        />
      </div>
      <p className='leading-8 tracking-wide text-center text-slate-900 dark:text-slate-400'>{show?.description}</p>
      <Link 
        to='/browse'
        className='w-full py-2 mt-4 text-lg tracking-wide text-center text-white rounded-md bg-slate-900 dark:bg-slate-700'
      >
        Back
      </Link>
    </div>
  )
}

export default Title;
