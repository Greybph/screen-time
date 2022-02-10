import {useState, useContext} from 'react'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'
import { Form } from 'remix'
import {UserContext} from '../root'

function LikeButton({title, liked = false}) {
const [isLiked, setIsLiked] = useState(false)
const userContext = useContext(UserContext)
  return (
    <>
    {!isLiked ? (
      <Form method='post' className='flex items-center justify-center px-2'>
        <input type='hidden' name='_action' value='unlike' />
        <input type='hidden' name='show' value={title} />
        <button type="submit">
          <BsSuitHeart
            onClick={() => setIsLiked(true)}
            className='text-2xl text-slate-900 dark:text-white'
            />
        </button>
      </Form>
    ) : (
      <Form method='post' className='flex items-center justify-center px-2'>
      <input type='hidden' name='_action' value='like' />
      <input type='hidden' name='show' value={title} />
      <button type="submit">
        <BsSuitHeartFill
          onClick={() => setIsLiked(false)}
          className='text-2xl text-slate-900 dark:text-white'
        />
      </button>
    </Form>
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
