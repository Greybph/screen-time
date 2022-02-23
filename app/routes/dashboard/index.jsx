import {useLoaderData, redirect, Link} from 'remix'
import saveProfile from '../../utils/saveProfile'
import Users from '../../models/Users'
import Shows from '../../models/Shows'
import ProfilesBlock from '../../components/ProfilesBlock'
import MyFavoritesBlock from '../../components/MyFavoritesBlock'
import LinkBlock from '../../components/LinkBlock'

export async function action({request}) {
  const data = await request.formData()
  const {...values} = Object.fromEntries(data)
  return saveProfile(values)
}

export async function loader({request}) {
  const userId = await request.headers.get("Cookie")

  if (!userId || userId === 'clear') {
    return redirect('/register')
  }

  const user = await Users.findById(userId)
  const shows = await Shows.find({})
  return {
    user: user,
    shows: shows,
  }
}

function Dashboard() {
  const loader = useLoaderData()
 
  return (
    <main className='px-8 mt-28'>
      <h1 className="mx-auto mb-8 text-2xl w-fit">Dashboard</h1>
      <ProfilesBlock user={loader.user} />    
      <MyFavoritesBlock user={loader.user} shows={loader.shows} />
      <LinkBlock title='Discover' to='/shows' />        
    </main>
  )
}

export default Dashboard
