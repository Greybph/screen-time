import Shows from '../models/Shows'
import {useLoaderData} from 'remix'

function about() {
  const shows = useLoaderData()
  return (
    <div className='mt-24'>About
    </div>
  )
}

export default about
