import { Link, useLoaderData } from 'remix'
import Shows from '../../models/Shows'

export async function loader({params}) {
  const title = params.title.replaceAll('-', " ")
  const show = await Shows.find({title: title})
  return show[0]
}

export async function action() {
  return null
}

function Title() {
  const show = useLoaderData()

  return (
    <div className='flex flex-col items-center justify-center px-10 mt-32'>
      <h1 className='mb-4 text-3xl text-center text-slate-900'>{show?.title}</h1>
      <img 
        src={show?.image} alt={`${show?.title} title image`}
        className="mb-4 w-72"
      />
      <p className='leading-8 text-center text-slate-900'>{show?.description}</p>
      <Link 
        to='/browse'
        className='w-full py-2 mt-4 text-lg tracking-wide text-center text-white rounded-md bg-slate-900 dark:bg-slate-700'
      >
        Back
      </Link>
    </div>
  )
}

export default Title;
