import Shows from '../models/Shows'
import {useLoaderData} from 'remix'

export async function loader() {
  const shows = await Shows.find({})
  return shows 
}

function about() {
  const shows = useLoaderData()
  return (
    <div className='border border-green-500 '>
      <h1>{shows[0].title}</h1>
    </div>
  )
}

export default about
