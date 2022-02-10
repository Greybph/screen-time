import {useEffect, useState, useRef, useContext} from 'react'
import {useLoaderData} from 'remix'
import Shows from '../../models/Shows'
import LikedShowsList from '../../components/LikedShowsList'
import FlashMessage from 'react-flash-message'
import {CgChevronDown} from 'react-icons/cg'
import {AiOutlinePlus} from 'react-icons/ai'
import Users from '../../models/Users'
import {UserContext} from '../../root'

export async function action({request}) {

  return null
}

export async function loader({request}) {
  
  return null
}

function Dashboard() {
  const userContext = useContext(UserContext)
  const [openKids, setOpenKids] = useState(false)

  return (
    <div className='px-10 mt-32'>
      <h1>{userContext?.username}</h1>
      <h1 className="mx-auto mb-8 text-2xl w-fit">Dashboard</h1>
      <div className='flex items-center justify-between px-2 py-2 border border-black rounded-md'>
        <span className='text-lg'>Kids</span>
        <div className='flex'>
          <CgChevronDown onClick={() => setOpenKids(!openKids)} className='text-3xl' />
        </div>
      </div>
      {/* <LikedShowsList shows={shows}/> */}
    </div>
  )
}

export default Dashboard
