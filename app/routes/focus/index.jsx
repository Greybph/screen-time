import Shows from '~/models/Shows'
import {useLoaderData} from 'remix'
import FocusBlock from '~/components/FocusBlock'

export async function loader() {
  const shows = await Shows.find({})
  return shows
}

function FocusPage() {
  const shows = useLoaderData()
  const focuses = ['Curiosity', 'Literacy', 'Social skills']

  return (
    <div className='flex flex-col items-center justify-center px-10 mt-28'>
      <h3 className='mb-6 text-3xl text-center transition-colors duration-700 delay-500 text-slate-900 dark:text-white'>Teaching focus</h3>
      {focuses.map(focus => 
        <FocusBlock
          key={focus} 
          focus={focus} 
          shows={shows.filter(s => s.focus.includes(focus.toLowerCase()))} 
        />
      )}
    </div>
  )
}

export default FocusPage