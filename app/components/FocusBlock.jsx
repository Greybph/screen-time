import { useState } from "react"
import ShowDisplayCard from "./ShowDisplayCard"
import {CgChevronDown} from 'react-icons/cg'
import {AiOutlinePlus} from 'react-icons/ai'

function FocusBlock({focus, shows}) {
  const [showFavorites, setShowFavorites] = useState(false)

  return (
    <div className='w-full mt-4 rounded-md bg-slate-300'>
      <div 
        className='flex items-center justify-between px-3 py-3 rounded-md bg-slate-300'
        onClick={() => setShowFavorites(!showFavorites)}
      >
        <span className='text-xl text-slate-900'>{focus}</span>
        {showFavorites 
          ? <AiOutlinePlus
            className='text-2xl rotate-45 text-slate-900'
          />
          : 
          <CgChevronDown 
            className='text-2xl text-slate-900'
          />
        }
      </div>
      {showFavorites &&
          <ul>
          {shows.map(show => (
            <li key={show._id}>
              <ShowDisplayCard show={show} likeButton={false} />
            </li>
          ))}
        </ul>
      }
    </div>

  )
}

export default FocusBlock