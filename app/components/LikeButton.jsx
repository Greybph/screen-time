import {useState, useContext} from 'react'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'
import { useFetcher } from 'remix'
import { UserContext } from '../root'

function LikeButton({title}) {
  const userContext = useContext(UserContext)
  const [isLiked, setIsLiked] = useState(userContext?.likes.includes(title))
  const fetcher = useFetcher()

  return (
    <>
    {!isLiked ? (
      <fetcher.Form method='post' className='flex items-center justify-center px-2'>
        <input type='hidden' name='_action' value='unlike' />
        <input type='hidden' name='show' value={title} />
        <button type="submit">
          <BsSuitHeart
            onClick={() => setIsLiked(true)}
            className='text-2xl text-slate-900 dark:text-white'
            />
        </button>
      </fetcher.Form>
    ) : (
      <fetcher.Form method='post' className='flex items-center justify-center px-2'>
        <input type='hidden' name='_action' value='like' />
        <input type='hidden' name='show' value={title} />
        <button type="submit">
          <BsSuitHeartFill
            onClick={() => setIsLiked(false)}
            className='text-2xl text-slate-900 dark:text-white'
          />
        </button>
      </fetcher.Form>
    )}
  </>
  )
}

{/* <BsSuitHeart
  className='text-2xl text-slate-900 dark:text-white'
/>
<BsSuitHeartFill 
  className='text-2xl text-slate-900 dark:text-white' 
/>  */}

export default LikeButton
