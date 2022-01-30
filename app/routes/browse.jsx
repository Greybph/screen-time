import { useLoaderData } from 'remix'
import ShowDisplayCard from '~/components/ShowDisplayCard';
import Shows from '../models/Shows'
import animations from '../styles/animations'

export async function loader() {
  const shows = await Shows.find({})
  return shows
}

function Browse() {
  const shows = useLoaderData()
  
  return (
    <div className='flex flex-col items-center justify-center px-10 mt-24'>
      <h3 className='pb-4 text-2xl leading-normal text-black dark:text-white'>Discover the shows that fit your child's needs.</h3>
      <ShowDisplayCard show={shows[0]} />
      <ShowDisplayCard show={shows[1]} />
    </div>
  )
}

export default Browse;
