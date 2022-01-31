import { AiOutlineBuild } from 'react-icons/ai'
import { RiArrowUpDownFill } from 'react-icons/ri'
import { BsCardText, BsSuitHeart, BsSuitHeartFill, BsInfoCircleFill } from 'react-icons/bs'
import { useState } from 'react'
import { Link } from 'remix'
import clsx from 'clsx'


function ShowDisplayCard({show}) {
  const [isLiked, setIsLiked] = useState(false)
  const [hideFocus, setHideFocus] = useState(true)
  const focuses = show?.focus
  const {light, dark} = show.color
  const a = light
  const c = clsx(
    a, 'text-2xl'
  )
  

  return (
    <div className="flex flex-col mb-10">
      <div className='relative'>
        <div 
        hidden={hideFocus} 
        className='absolute w-full h-full bg-white rounded-t-lg dark:bg-slate-800'
        >
          {/* <ul className='flex flex-col items-center justify-center mt-4'>
            {focuses.map(focus => 
              <li 
                key={show._id}
                className='text-xl text-slate-900 dark:text-white'
              >
                {focus}
              </li>
            )}
          </ul> */}
        </div>
        <img 
          src={show.image} 
          alt={`${show.title} title image`} 
          className={`rounded-t-lg w-72 ${!hideFocus ? 'opacity-0': ''}`}
        />
      </div>
      <div className='flex justify-between w-full bg-white rounded-b-lg shadow dark:bg-slate-800 '>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setHideFocus(!hideFocus)}
            className='px-3 py-2 rounded-bl-lg'
          >
            <RiArrowUpDownFill className='text-2xl text-slate-900 dark:text-white' /> 
          </button>
          <Link 
            to={`${show.title.replace(" ", "-")}`}
            className='px-3 py-2'
          >
            <BsInfoCircleFill className='text-2xl text-slate-900 dark:text-white'/>
          </Link>
        </div>
        <button 
          className='px-4 py-2 rounded-br-lg'
          onClick={() => setIsLiked(!isLiked)}
        >
          {isLiked 
            ? 
              <BsSuitHeartFill className={c}/> 
            :
              <BsSuitHeart className='text-2xl text-gray-500 dark:text-white'/>
          }
        </button>
      </div>
    </div>

  )
}

export default ShowDisplayCard;

// TODO: add a color to each show in db that corresponds to the image, then style
// the HEART icon based on this color.