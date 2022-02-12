import {useEffect, useState, useRef, useContext} from 'react'
import {useActionData, useLoaderData, useTransition} from 'remix'
import Shows from '../../models/Shows'
import LikedShowsList from '../../components/LikedShowsList'
import FlashMessage from 'react-flash-message'
import {CgChevronDown} from 'react-icons/cg'
import {AiOutlinePlus} from 'react-icons/ai'
import Users from '../../models/Users'
import {UserContext} from '../../root'
import AddProfileModal from '../../components/AddProfileModal'
import ShowDisplayCard from '~/components/ShowDisplayCard'
import saveProfile from '../../utils/saveProfile'
import AuthErrorPopup from '~/components/AuthErrorPopup'

export async function action({request}) {
  const data = await request.formData()
  const {...values} = Object.fromEntries(data)
  return saveProfile(values)
}

export async function loader({request}) {
  
  return null
}

function Dashboard() {
  const transition = useTransition()
  const action = useActionData()
  const userContext = useContext(UserContext)
  const [openCreateProfile, setOpenCreateProfile] = useState(false)

  return (
    <div className='px-8 mt-32'>
      <h1 className="mx-auto mb-8 text-2xl w-fit">Dashboard</h1>
      <div className='flex items-center justify-between px-3 py-3 rounded-t-md bg-slate-300'>
        <span className='text-xl text-slate-900'>Profiles</span>
          {userContext?.kids 
            ? <CgChevronDown className='text-3xl' />
            : <AiOutlinePlus 
                className={`${openCreateProfile ? 'translate-y-12 rotate-45 relative z-50' : ''} text-3xl text-slate-900 transition-all duration-300`} 
                onClick={() => {openCreateProfile ? setOpenCreateProfile(false) : setOpenCreateProfile(true)}}
              />
          }
      </div>
      {openCreateProfile && <AddProfileModal />}
      {action?.error && transition.state === 'idle' 
        ? <AuthErrorPopup error={action?.error} /> 
        : ''
      }
      {action?.success && transition.state === 'idle' 
        ? <AuthErrorPopup error={action?.success} /> 
        : ''
      }
    </div>
  )
}

export default Dashboard
