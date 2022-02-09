import {useEffect, useState, useRef} from 'react'
import {useLoaderData} from 'remix'
import Shows from '../../models/Shows'
import LikedShowsList from '../../components/LikedShowsList'
import FlashMessage from 'react-flash-message'
import {CgChevronDown} from 'react-icons/cg'
import {AiOutlinePlus} from 'react-icons/ai'
import Users from '../../models/Users'

export async function action({request}) {
  const userId = await request.headers.get("Cookie")
  console.log(userId)
  console.log("ppp")
  return null
}

export async function loader({request}) {
  const userId = await request.headers.get("Cookie")
  const user = await Users.findOne({_id: userId})
  console.log(user)
  return user
}

function Dashboard() {
  const user = useLoaderData()
  const [openKids, setOpenKids] = useState(false)

  return (
    <div className='px-10 mt-32'>
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
