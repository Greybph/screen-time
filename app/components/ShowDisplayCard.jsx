import { RiArrowUpDownFill } from 'react-icons/ri'
import { useState, useEffect } from 'react'
import { Link } from 'remix'
import LikeButton from './LikeButton'

function ShowDisplayCard({show, likeButton = true, onNavigate}) {
  const [hideFocus, setHideFocus] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)
  const focuses = show.focus

  function handleClick() {
    setHideFocus(true)
    onNavigate()
  }

  return (
    <div className="flex flex-col px-4 mx-auto mt-6 w-fit">
      <div className='relative'> 
        <div 
        hidden={hideFocus} 
        className='absolute w-full h-full overflow-y-auto rounded-t-lg bg-slate-400 bg-opacity-80 dark:bg-slate-800'
        >
          <ul className='flex flex-col items-center justify-center mt-4'>
            {focuses.map((focus, idx )=> 
              <li 
                key={idx}
                className='text-xl text-slate-900 dark:text-white'
              >
                <Link 
                  onClick={handleClick} 
                  to={`/focus/${focus}`}
                >
                  {focus}
                </Link>
              </li>
            )} 
          </ul>
        </div>
        <Link 
          to={`/shows/${show.title.replaceAll(" ", "-")}`}
          onClick={handleClick}
        >
          <img 
            src={show.image} 
            alt={`${show.title} title image`} 
            onLoad={() => setImageLoaded(true)}
            className={`rounded-t-md w-full `}
          />
        </Link>
      </div>
      <div hidden={!imageLoaded} >
        <div className='flex justify-between w-full bg-white shadow rounded-b-md dark:bg-slate-700'>
          <button 
            onClick={() => setHideFocus(!hideFocus)}
            className='px-3 py-2 rounded-bl-md '
          >
            <RiArrowUpDownFill title='Teaching focus' className='text-2xl text-slate-900 dark:text-white' /> 
          </button>
          {likeButton && <LikeButton title={show.title} />}
        </div>
      </div>
    </div> 
  )
}

export default ShowDisplayCard;
