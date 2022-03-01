import {useLoaderData, redirect, Form, useFetcher} from 'remix'
import {useState, useEffect} from 'react'
import saveProfile from '../../utils/saveProfile'
import Users from '../../models/Users'
import Shows from '../../models/Shows'
import ProfilesBlock from '../../components/ProfilesBlock'
import MyFavoritesBlock from '../../components/MyFavoritesBlock'
import LinkBlock from '../../components/LinkBlock'
import AlertPopup from '~/components/AlertPopup'
import Axios from 'axios'
import dog from '~/assets/dogIcon.svg'
import Delay from '~/components/Delay'

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
  const [imageId, setImageId] = useState(false)
  const [updatingImage, setUpdatingImage] = useState(false)
  const [invalidImage, setInvalidImage] = useState(false)
  let baseUrl = 'https://res.cloudinary.com/dpnkrz8c8/image/upload/c_thumb,g_face,w_85,h_85,r_max/v1645945686/'
  
  useEffect(() => {

    setImageId(localStorage.getItem('imageId'))
  },[])

  async function uploadImage(files) {
    const path = files[0].name.split('.')

    switch (path[path.length - 1]) {
      case 'jpg':
      case 'png':
      case 'svg':
      case 'jpeg':
        break
      default :
        return setInvalidImage(true)
    }

    setUpdatingImage(true)
    const formData = new FormData()
    formData.append("file", files[0])
    formData.append("upload_preset", 'owdo4rra')
    
    const response = await Axios.post(
      "https://api.cloudinary.com/v1_1/dpnkrz8c8/image/upload", 
      formData
      )
      
    setImageId(response.data.public_id + '.png')
    localStorage.setItem('imageId', response.data.public_id + '.png')
  }  
  
  return (
    <main className='relative px-8 mt-28'>
      {invalidImage && 
        <AlertPopup 
          type='error'
          title='Woops!'
          message='Not a valid image format'
          duration={5000}
        />
      }
      {updatingImage && 
        <AlertPopup 
          type='alert'
          title='Updating picture...'
          message='One moment please'
          duration={5000}
        />
      }
      <h1 className="mb-4 text-3xl text-center text-slate-900">Dashboard</h1>

      <label htmlFor="avatarFile">  
        <img  
          onLoad={() => setUpdatingImage(false)}
          src={imageId ? baseUrl + imageId : dog} alt="profile picture" 
          className={`${updatingImage && 'animate-pulse'} h-20 mx-auto mb-3`}
        />
      </label>
      <input
        className='hidden' 
        type='file' name="avatar" id="avatarFile"
        onChange={e => uploadImage(e.target.files)} 
      />

      <ProfilesBlock user={user} />    
      <MyFavoritesBlock user={user} favorites={favorites} />
      <LinkBlock title='Discover' to='/shows' />   
      <Form action='/logout' method='post'>
        <button
          type='submit' 
          className="w-full py-2 mt-4 text-lg tracking-wide text-white rounded-md bg-slate-900 dark:bg-slate-700"
        >
          Logout
        </button> 
      </Form>
    </main>
  )
}

export default Dashboard
