import {useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {CgChevronDown} from 'react-icons/cg'
import LikedShowsList from './LikedShowsList'

function MyFavoritesBlock({shows, user}) {
  const [showFavorites, setShowFavorites] = useState(false)

  return (
    <div className='bg-slate-300'>
      <div className='flex items-center justify-between px-3 py-3 rounded-t-md bg-slate-300'>
        <span className='text-xl text-slate-900'>My Favorites</span>
        {showFavorites 
          ? <AiOutlinePlus
              className='text-3xl rotate-45 text-slate-900'
              onClick={() => setShowFavorites(false)}
              />
          : 
            <CgChevronDown 
              className='text-3xl text-slate-900'
              onClick={() => setShowFavorites(true)}
            />
        }
      </div>
      {showFavorites &&
        <LikedShowsList 
          shows={shows} 
          likes={user.likes} 
        />
      }
    </div>
  )
}

export default MyFavoritesBlock