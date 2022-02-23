import { Link, useLoaderData, useCatch } from 'remix'
import Shows from '~/models/Shows'
import ShowDisplayCard from '~/components/ShowDisplayCard'
import InfoSlider from '~/components/InfoSlider'

export async function loader({params}) {
  const title = params.title.replaceAll('-', " ")
  const show = await Shows.find({title: title})
  
  if (!show.length) {
    const top2Shows = await Shows.find({}).limit(2)

    throw new Response(
      JSON.stringify(top2Shows[0]) + "split" + JSON.stringify(top2Shows[1]), {
      status: 404
    })
  }
  
  return show[0]
}

export function CatchBoundary() {
  const caught = useCatch()
  const popularShowsString = caught.data.split("split")
  const popularShows = popularShowsString.map(s => JSON.parse(s))

  return (
    <div className='flex flex-col items-center justify-center px-10 mt-28'>
      <h3 className='text-3xl text-center text-slate-900'>Woops!</h3>
      <p className='mt-2 text-center text-slate-900'>We couldn't find that show</p>
      <h4 className='mt-16 text-2xl text-center text-slate-900'>Here's some popular shows</h4>
      {popularShows.map(show => <ShowDisplayCard show={show} likeButton={false} />)}
      <Link 
        to='/shows'
        className='w-full py-2 mt-8 text-lg tracking-wide text-center text-white rounded-md bg-slate-900 dark:bg-slate-700'
      >
        Discover More
      </Link>
    </div>
  )
}

function Title() {
  const show = useLoaderData()
  
    return (
      <div className='flex flex-col items-center justify-center px-10 mt-32'>
        <h1 className='mb-4 text-3xl text-center text-slate-900 dark:text-white'>{show?.title}</h1>
        <img 
          src={show.image} alt={`${show.title} title image`}
          className="mb-2 rounded-md w-72"
        />
        <InfoSlider show={show} info={show.focus} />
        <p className='leading-8 tracking-wide text-center text-slate-900 dark:text-slate-400'>{show?.description}</p>
        <Link 
          to='/shows'
          className='w-full py-2 my-4 text-lg tracking-wide text-center text-white rounded-md bg-slate-900 dark:bg-slate-700'
        >
          Discover More
        </Link>
    </div>
  )
}

export default Title;
