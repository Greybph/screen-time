import {useState} from 'react'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false)
 
  return (
  <button 
    className='px-4 py-2 rounded-br-lg'
    onClick={() => setIsLiked(!isLiked)}
  >
    {isLiked 
      ? 
        <BsSuitHeartFill className='text-2xl text-red-600 dark:text-yellow-300' /> 
      :
        <BsSuitHeart className='text-2xl text-red-800 dark:text-white'/>
    }
  </button>
  )
}

export default LikeButton
