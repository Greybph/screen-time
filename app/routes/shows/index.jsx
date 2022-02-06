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
        className='pb-4 text-2xl leading-normal dark:text-white'
      >
        Discover the shows that fit your child's needs.
      </h3>
      <h3 className='self-start py-4 mt-20 text-2xl tracking-wide dark:text-white'>Focus</h3>
      <p 
        className='self-start pb-4 tracking-wide text-slate-800 dark:text-slate-400'
      >
        Children shows often have a specific teaching focus
      </p>
      <FocusSelect shows={shows} />
      <div className='w-full my-10 border border-emerald-300'></div>
      <h3 className='self-start pb-4 text-2xl tracking-wide dark:text-white'>Age</h3>
      <p 
        className='self-start pb-4 tracking-wide text-slate-800 dark:text-slate-400'
      >
        Find the right shows for your child's age
      </p>
        <AgeSelect shows={shows} />
    </div>
  )
}

export default Browse;
