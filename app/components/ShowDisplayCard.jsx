import { AiOutlineBuild } from 'react-icons/ai'
import { BsCardText, BsSuitHeart, BsSuitHeartFill, BsInfoCircleFill } from 'react-icons/bs'
import { useState } from 'react'
import { Link } from 'remix'

function ShowDisplayCard({show}) {
  const [isLiked, setIsLiked] = useState(false)
  const [hideFocus, setHideFocus] = useState(true)
  
  return (
    <div className="flex flex-col mb-10">
      <div className='relative'>
        <div 
        hidden={hideFocus} 
        className='absolute w-full h-full bg-white rounded-t-lg dark:bg-slate-800'
        >
          <ul className='flex flex-col items-center justify-center mt-4'>
            {show.focus.map(f => 
              <li 
                key={show._id}
                className='text-xl text-slate-900 dark:text-white'
              >
                {f}
              </li>
            )}
          </ul>
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
            className='px-4 py-2 rounded-bl-lg'
          >
            <AiOutlineBuild className='text-2xl text-slate-900 dark:text-white' /> 
          </button>
          <Link 
            to={`${show.title.replace(" ", "-")}`}
            className='px-4 py-2'
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
              <BsSuitHeartFill className='text-2xl text-slate-800 dark:text-white'/> 
            :
              <BsSuitHeart className='text-2xl text-slate-900 dark:text-white'/>
          }
        </button>
      </div>
    </div>

  )
}

export default ShowDisplayCard;
