import {useState} from 'react'
import {AiOutlinePlus, AiOutlineClose} from 'react-icons/ai'
import LikedShowsList from './LikedShowsList'

function MyFavoritesBlock({shows, user}) {
  const [showFavorites, setShowFavorites] = useState(false)

  return (
    <>
    <div className='flex items-center justify-between px-3 py-3 rounded-t-md bg-slate-300'>
      <span className='text-xl text-slate-900'>My Favorites</span>
      {showFavorites 
        ? <AiOutlineClose
            className='text-3xl text-slate-900'
            onClick={() => setShowFavorites(false)}
            />
        : 
          <AiOutlinePlus 
            className='text-3xl text-slate-900'
            onClick={() => setShowFavorites(true)}
          />
      }
    </div>
      <LikedShowsList shows={shows} likes={user.likes} />
    </>
  )
}

export default MyFavoritesBlock