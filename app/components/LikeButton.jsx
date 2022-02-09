import {useState, useEffect} from 'react'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'

function LikeButton({title}) {
  const [isLiked, setIsLiked] = useState(localStorage.getItem(title))
  
  useEffect(() => {
    if (isLiked) {
      localStorage.setItem(title, true)
    } else {
      localStorage.removeItem(title)
    }
  }, [isLiked])

  return (
  <button
     className='px-4 py-2 rounded-br-lg'
     onClick={() => setIsLiked(!isLiked)}
  >
    {isLiked 
      ? 
      <>
        <BsSuitHeartFill 
          className='text-2xl text-slate-900 dark:text-white' 
        /> 
      </>
      :
      <>
        <BsSuitHeart 
          className='text-2xl text-slate-900 dark:text-white'
        />
      </>
    }
  </button>
  )
}

export default LikeButton
