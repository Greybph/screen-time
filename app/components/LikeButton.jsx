import {useState, useEffect} from 'react'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'
import { Form, useFetcher } from 'remix'

function LikeButton({title}) {
  const fetcher = useFetcher()
  const [isLiked, setIsLiked] = useState()
  return (
  <button
     className='px-4 py-2 rounded-br-lg'
     onClick={() => setIsLiked(!isLiked)}
  >
    {isLiked 
      ? 
      <>
        <BsSuitHeartFill 
          onClick={() => 
            fetcher.submit({_action: 'decrement', title: title}, {method: 'post', action: '/like'})}
          className='text-2xl text-slate-900 dark:text-white' 
        /> 
      </>
      :
      <>
        <BsSuitHeart 
          onClick={() => 
            fetcher.submit({_action: 'increment', title: title}, {method: 'post', action: '/like'})}
          className='text-2xl text-slate-900 dark:text-white'
        />
      </>
    }
  </button>
  // </fetcher.Form>
  )
}

export default LikeButton
