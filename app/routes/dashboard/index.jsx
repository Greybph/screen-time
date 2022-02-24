import {useLoaderData, redirect, Form} from 'remix'
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
  const favorites = await Shows.find({'title': {$in: user.likes}})
  
  return { user, favorites }
}

function Dashboard() {
  const user = useLoaderData().user
  const favorites = useLoaderData().favorites
  
  return (
    <main className='px-8 mt-28'>
      <h1 className="mx-auto mb-8 text-2xl w-fit">Dashboard</h1>
      <ProfilesBlock user={user} />    
      <MyFavoritesBlock user={user} favorites={favorites} />
      <LinkBlock title='Discover' to='/shows' />   
      <Form action='/logout' method='post'>
        <button
          type='submit' 
          className="w-full py-2 mt-4 text-lg tracking-wide text-white rounded-md bg-slate-900 dark:bg-slate-700">
          Logout
        </button> 
      </Form>
    </main>
  )
}

export default Dashboard
