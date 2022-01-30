import { useLoaderData } from 'remix'
import Shows from '../../models/Shows'

export async function loader({params}) {
  const title = params.title
  const show = await Shows.find({title: title.replace("-"," ") })
  return show[0]
}

function Title() {
  const show = useLoaderData()

  return (
    <div>
      <h1>{show.title}</h1>
      <img src={show.image} alt={`${show.title} title image`} />
      <p>{show.description}</p>
      {/* TODO: back button */}
    </div>
  )
}

export default Title;
