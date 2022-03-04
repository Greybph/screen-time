import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {useState, useEffect} from 'react'
import {Link} from 'remix'
function InfoSlider({show, info}) {
  const [sliderIndex, setSliderIndex] = useState(0)
  const [sliderText, setSliderText] = useState(info[sliderIndex])
  
  useEffect(() => {
    setSliderText(info[sliderIndex])
  }, [sliderIndex])
  
  function handleRightClick() {
    sliderIndex === info.length - 1 ? 
      setSliderIndex(0)
    :
      setSliderIndex(sliderIndex + 1)
  }
  
  
  function handleLeftClick() {
    sliderIndex === 0 ?
      setSliderIndex(info.length - 1)
    :
      setSliderIndex(sliderIndex - 1)
    }
    
  return (
    <div className='flex items-center justify-center w-full my-4'>
        <IoIosArrowBack 
          onClick={handleLeftClick}
          className={`${info === show.focus ? 'text-4xl' : 'text-3xl'} text-slate-900 dark:text-slate-700 transition-colors duration-700 delay-500`}
        />
      <span 
        className={`${info === show.focus ? 'w-full' : 'w-1/3'} text-xl text-center text-slate-900 transition-colors tracking-wide duration-700 delay-500 dark:text-white whitespace-nowrap`}
      >
        <Link to={`/focus/${sliderText}`}>
          {sliderText}
        </Link>
      </span>
      <IoIosArrowForward 
        onClick={handleRightClick}
        className={`${info === show.focus ? 'text-4xl' : 'text-3xl'} transition-colors duration-700 delay-500 text-slate-900 dark:text-slate-700`}
      />
    </div>
  )
}

export default InfoSlider