import {useEffect, useState, useRef, useContext} from 'react'
import {useActionData, useLoaderData, useTransition} from 'remix'
import {BsChevronDown} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import {UserContext} from '../../root'
import AddProfileModal from '../../components/AddProfileModal'
import saveProfile from '../../utils/saveProfile'
import AlertPopup from '../../components/AlertPopup'
import Users from '../../models/Users'

export async function action({request}) {
  const data = await request.formData()
  const {...values} = Object.fromEntries(data)
  return saveProfile(values)
}

export async function loader({request}) {
  const userId = await request.headers.get("Cookie")
  const user = await Users.findById(userId)
  return user
}

function Dashboard() {
  const transition = useTransition()
  const action = useActionData()
  const user = useLoaderData()
  const userContext = useContext(UserContext)
  const [openCreateProfile, setOpenCreateProfile] = useState(false) 

  useEffect(() => {
    if (action?.success) {
      setOpenCreateProfile(false)
    }
  }, [action])

  return (
    <div className='px-8 mt-32'>
      <h1 className="mx-auto mb-8 text-2xl w-fit">Dashboard</h1>
      <div className='flex items-center justify-between px-3 py-3 rounded-t-md bg-slate-300'>
        <span className='text-xl text-slate-900'>Profiles</span>
        
      {user.profiles.length 
        ? <BsChevronDown className='text-xl' /> 
        : <AiOutlinePlus
            className={`${openCreateProfile ? 'translate-y-12 rotate-45 relative z-50' : ''} text-3xl text-slate-900 transition-all duration-300`} 
            onClick={() => {openCreateProfile ? setOpenCreateProfile(false) : setOpenCreateProfile(true)}}
          /> 
      }
       
      </div>

      {openCreateProfile && <AddProfileModal />}
      {/* openShowProfiles && <ProfileList */}
      {action?.error && transition.state === 'idle' 
        ? <AlertPopup 
            title='Woops!'
            message={action?.error} 
            type='error'
            duration={5000}
          /> 
        : ''
      }
      {action?.success && transition.state === 'idle' 
        ? <AlertPopup 
            title="Profile created"
            message={action?.success}
            type='success'
            duration={5000}
          /> 
        : ''
      }
    </div>
  )
}

export default Dashboard
