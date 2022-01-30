import Shows from '../models/Shows'
import {useLoaderData} from 'remix'

export async function loader() {
  const shows = await Shows.find({})
  return shows 
}

function about() {
  const shows = useLoaderData()
  return (
    <div className='mt-24'>
      {shows.map(show => (
        <>
          <img src={show.image} alt="a" className='w-56' />
          <h1>{show.focus.map(f => (
            <h2>{f}{" "}</h2>
          ))}</h1>
        </>
      ))}
    </div>
  )
}

export default about
