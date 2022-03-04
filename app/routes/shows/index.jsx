import { useLoaderData, Link } from 'remix'
import Shows from '~/models/Shows'
import Users from '~/models/Users'
import FocusSelect from '~/components/FocusSelect'
import AgeSelect from '~/components/AgeSelect'

export async function action({request}) {
  const data = await request.formData()
  const {_action, show, userId} = Object.fromEntries(data)

  if (_action === 'like') {
    await Shows.findOneAndUpdate({title: show}, {$inc: {likes: 1}})
    await Users.findByIdAndUpdate(userId, {$push: {likes: show}})
  }
  
  if (_action === 'unlike') {
    await Shows.findOneAndUpdate({title: show}, {$inc: {likes: -1}})
    await Users.findByIdAndUpdate(userId, {$pull: {likes: show}})
  }
  console.log("PPP")
  return null
}

export async function loader({request}) {
  const shows = await Shows.find({})
  return {shows}
}

function Browse() {
  const data = useLoaderData()

  return (
    <div className='flex flex-col items-start px-10 mt-28'>
      <h3 
        className='text-2xl text-slate-900 te dark:text-white'
      >
        Discover the shows that fit your child's needs.
      </h3>
      <Link to='/focus' className='py-4 mt-20 text-2xl tracking-wide text-slate-900 dark:text-white'>Focus</Link>
      <p 
        className='pb-4 tracking-wide text-slate-800 dark:text-slate-400'
      >
        Children shows often have a specific teaching focus
      </p>
      <FocusSelect shows={data.shows} />
      <div className='w-full my-10 border-2 border-slate-300'></div>
      <Link to='/ages' className='pb-4 text-2xl tracking-wide text-slate-900 dark:text-white'>Age</Link>
      <p 
        className='pb-4 tracking-wide text-slate-800 dark:text-slate-400'
      >
        Find the right shows for your child's age
      </p>
        <AgeSelect shows={data.shows} />
    </div>
  )
}

export default Browse;
