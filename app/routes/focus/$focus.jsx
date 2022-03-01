import Shows from '~/models/Shows'
import {useCatch, useLoaderData} from 'remix'
import ShowDisplayCard from '../../components/ShowDisplayCard'

export async function loader({params}) {
  const shows = await Shows.find({'focus': {$in: params.focus}})

  if (!shows.length) {
    throw new Response("Not Found", {
      status: 404
    })
  }
  return {shows, focus: params.focus}
}

export function CatchBoundary() {
  return <div>Focus not found</div>
}

function $FocusPage() {
  const shows = useLoaderData().shows
  const focus = useLoaderData().focus

  return (
    <div className='flex flex-col items-center justify-center px-10 mt-28'>
      <h3 className='text-3xl text-center text-slate-900'>{focus}</h3>
      {shows.map(show => 
        <ShowDisplayCard waitForLoad={false} key={show._id} likeButton={false} show={show} />
      )}
    </div>
  )
}

export default $FocusPage