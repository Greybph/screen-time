import {useState, useContext, useEffect} from 'react'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'
import { useFetcher } from 'remix'
import { UserContext } from '../root'
import LikesWarningPopup from './LikesWarningPopup'

function LikeButton({title}) {
  const userContext = useContext(UserContext)
  const [isLiked, setIsLiked] = useState(userContext?.likes.includes(title))
  const [showLikesWarning, setShowLikesWarning] = useState(!sessionStorage.getItem("LIKES_WARNING_SHOWED"))
  const [warningShowed, setWarnignShowed] = useState(false)
  const fetcher = useFetcher()

  useEffect(() => {
    if (warningShowed) {
      sessionStorage.setItem("LIKES_WARNING_SHOWED", true)
    }
  },[warningShowed])

  function noUserHandleLike(e) {
    e.preventDefault()
    if (showLikesWarning && !warningShowed) {
      setWarnignShowed(true)
      setShowLikesWarning(false)
    }
  }

  return (
    <>
    {warningShowed && <LikesWarningPopup />}
    {!isLiked ? (
      <fetcher.Form method='post' className='relative flex items-center justify-center px-2'>
        <input type='hidden' name='_action' value='unlike' />
        <input type='hidden' name='show' value={title} />
        <button 
          type="submit"
          onClick={userContext ? null : noUserHandleLike}
        >
          <BsSuitHeart
            onClick={() => setIsLiked(true)}
            className='text-2xl text-slate-900 dark:text-white'
            />
        </button>
      </fetcher.Form>
    ) : (
      <fetcher.Form method='post' className='relative flex items-center justify-center px-2'>
        <input type='hidden' name='_action' value='like' />
        <input type='hidden' name='show' value={title} />
        <button 
          type="submit"
          onClick={userContext ? null : noUserHandleLike}
        >
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
