import {useEffect, useState, useRef, useContext} from 'react'
import {useLoaderData} from 'remix'
import Shows from '../../models/Shows'
import LikedShowsList from '../../components/LikedShowsList'
import FlashMessage from 'react-flash-message'
import {CgChevronDown} from 'react-icons/cg'
import {AiOutlinePlus} from 'react-icons/ai'
import Users from '../../models/Users'
import {UserContext} from '../../root'
import AddProfileModal from '../../components/AddProfileModal'
import ShowDisplayCard from '~/components/ShowDisplayCard'

export async function action({request}) {
  const data = await request.formData()
  const {name, gender, age} = Object.fromEntries(data)
  console.log(name, gender, age)
  return null
}

export async function loader({request}) {
  
  return null
}

function Dashboard() {
  const userContext = useContext(UserContext)
  const [openCreateProfile, setOpenCreateProfile] = useState(false)
  const profileModalRef = useRef()

  function closeModal(e) {

  }

  return (
    <div 
      onClick={openCreateProfile ? closeModal : null}
      className='px-10 mt-32'
    >
      <h1>{userContext?.username}</h1>
      <h1 className="mx-auto mb-8 text-2xl w-fit">Dashboard</h1>
      <div className='flex items-center justify-between px-2 py-2 border border-black rounded-md'>
        <span className='text-lg'>{openCreateProfile ? '' : 'Profiles'}</span>
        <div className='flex'>
          {userContext?.kids 
            ? <CgChevronDown className='text-3xl' />
            : <AiOutlinePlus 
                className={`${openCreateProfile ? 'translate-y-12 rotate-45 relative z-50' : ''} text-3xl transition-all duration-300`} 
                onClick={() => {openCreateProfile ? setOpenCreateProfile(false) : setOpenCreateProfile(true)}}
              />
          }
        </div>
      </div>
      {openCreateProfile && <AddProfileModal ref={profileModalRef} />}
      {/* <LikedShowsList shows={shows}/> */}
    </div>
  )
}

export default Dashboard
