import { RiArrowUpDownFill } from 'react-icons/ri'
import { useState } from 'react'
import { Link } from 'remix'
import LikeButton from './LikeButton'

function ShowDisplayCard({show}) {
  const [hideFocus, setHideFocus] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)
  const focuses = show.focus
  
  return (
    <div className="flex flex-col mx-auto mb-10 w-72">
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
            onLoad={() => setImageLoaded(true)}
            className={`rounded-t-lg w-full ${!hideFocus ? 'opacity-0': ''}`}
          />
        </Link>
      </div>
      <div hidden={!imageLoaded}>
        <div className='flex justify-between w-full bg-white rounded-b-lg shadow dark:bg-slate-800 '>
            <button 
              onClick={() => setHideFocus(!hideFocus)}
              className='px-3 py-2 rounded-bl-lg '
            >
              <RiArrowUpDownFill className='text-2xl text-slate-900 dark:text-white' /> 
            </button>
          <LikeButton title={show.title} />
        </div>
      </div>
    </div> 
  )
}

export default ShowDisplayCard;
