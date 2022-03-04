import Shows from '~/models/Shows'
import {useLoaderData} from 'remix'
import FocusBlock from '~/components/FocusBlock'

export async function loader() {
  const shows = await Shows.find({})
  return shows
}

function AgesPage() {
  const shows = useLoaderData()
  const ages = [3, 4, 5]

  return (
    <div className='flex flex-col items-center justify-center px-10 mt-28'>
      <h3 className='mb-6 text-3xl text-center transition-colors duration-700 delay-500 dark:text-white text-slate-900'>Ages</h3>
      {ages.map(age => 
        <FocusBlock 
          key={age}
          focus={age} 
          shows={shows.filter(s => s.ages.includes(age))} 
        />
      )}
    </div>
  )
}

export default AgesPage