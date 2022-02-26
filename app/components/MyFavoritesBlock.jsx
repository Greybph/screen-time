import {useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {CgChevronDown} from 'react-icons/cg'
import MyFavoritesList from './MyFavoritesList'

function MyFavoritesBlock({user, favorites}) {
  const [showFavorites, setShowFavorites] = useState(false)

  return (
    <div className='mt-4 bg-slate-300'>
      <div 
        className='flex items-center justify-between px-3 py-3 rounded-t-md bg-slate-300'
        onClick={() => setShowFavorites(!showFavorites)}
      >
        <span className='text-xl text-slate-900'>My Favorites</span>
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
        <MyFavoritesList 
          favorites={favorites} 
        />
      }
    </div>
  )
}

export default MyFavoritesBlock