import { useLoaderData } from 'remix'
import Shows from '~/models/Shows'
import FocusSelect from '~/components/FocusSelect'
import AgeSelect from '~/components/AgeSelect'

export async function loader() {
  const shows = await Shows.find({})
  return shows
}

function Browse() {
  const shows = useLoaderData()
 
  return (
    <div className='flex flex-col items-center justify-center px-10 mt-32'>
      <h3 
        className='pb-4 text-2xl leading-normal text-black dark:text-white'
      >
        Discover the shows that fit your child's needs.
      </h3>
        <FocusSelect shows={shows} />
        <AgeSelect shows={shows} />
    </div>
  )
}

export default Browse;
