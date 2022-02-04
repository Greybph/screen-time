import { RiArrowUpDownFill } from 'react-icons/ri'
import { useState } from 'react'
import { Link } from 'remix'
import LikeButton from './LikeButton'

function ShowDisplayCard({show}) {
  const [hideFocus, setHideFocus] = useState(true)
  const focuses = show.focus
  
  return (
    <div className="flex flex-col mb-10">
      <div className='relative'>
        <div 
        hidden={hideFocus} 
        className='absolute w-full h-full bg-white rounded-t-lg dark:bg-slate-800'
        >
          <ul className='flex flex-col items-center justify-center mt-4'>
            {focuses.map((focus, idx )=> 
              <li 
                key={idx}
                className='text-xl text-slate-900 dark:text-white'
              >
                {focus}
              </li>
            )}
          </ul>
        </div>
        <Link to={`${show.title.replaceAll(" ", "-")}`}>
          <img 
            src={show.image} 
            alt={`${show.title} title image`} 
            className={`rounded-t-lg w-full ${!hideFocus ? 'opacity-0': ''}`}
          />
        </Link>
      </div>
      <div className='flex justify-between bg-white rounded-b-lg shadow dark:bg-slate-800 '>
          <button 
            onClick={() => setHideFocus(!hideFocus)}
            className='px-3 py-2 rounded-bl-lg '
          >
            <RiArrowUpDownFill className='text-2xl text-slate-900 dark:text-white' /> 
          </button>
        <LikeButton title={show.title} />
      </div>
    </div>
  )
}

export default ShowDisplayCard;

// TODO: add a color to each show in db that corresponds to the image, then style
// the HEART icon based on this color.