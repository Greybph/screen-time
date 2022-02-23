import { useLoaderData, useCatch, Link } from "remix"
import Users from '~/models/Users'
import dogIcon from '~/assets/dogIcon.svg'
import catIcon from '~/assets/catIcon.svg'
import pandaIcon from '~/assets/pandaIcon.svg'
import pigIcon from '~/assets/pigIcon.svg'
import trashIcon from '~/assets/trashIcon.svg'
import updateGoals from '~/utils/updateGoals'
import LearningGoalsBlock from "../../components/LearningGoalsBlock"

export async function action({request, params}) {
  const formData = await request.formData()
  const {goals} = Object.fromEntries(formData)
  const goalsArr = goals.split(',')

  updateGoals(goalsArr, request, params)

  return null
}

export async function loader({params, request}) {
  const userId = await request.headers.get("Cookie")
  const profileName = params.profile
  const user = await Users.findById(userId)
  const profile = user.profiles.filter(profile => profile.name === profileName)

  if (!profile.length) {
    throw new Response(profileName, {
      status: 404
    })
  }

  return profile[0]
}

export function CatchBoundary() {
  const caught = useCatch()
  return (
    <div className='flex flex-col items-center justify-center px-10 mt-28'>
    <h3 className='text-3xl text-center text-slate-900'>Woops!</h3>
    <p className="mt-2 text-slate-900">That profile doesnt exist</p>
    <h4 className='mt-20 text-2xl text-center text-slate-900'>Would you like to create a profile for {caught.data}?</h4>
    <Link 
      to='/dashboard'
      className='w-full py-2 text-lg tracking-wide text-center text-white rounded-md mt-14 bg-slate-900 dark:bg-slate-700'
    >
      Yes
    </Link>
    <Link 
      to='/dashboard'
      className='w-full py-2 mt-6 text-lg tracking-wide text-center text-white rounded-md bg-slate-800 dark:bg-slate-700'
    >
      No
    </Link>
    </div>
  )
}

function ProfilePage() {
  const profile = useLoaderData()
  
  function setIcon(icon) {
    switch (icon) {
      case 'dog':
        return dogIcon
      case 'cat':
        return catIcon
      case 'pig':
        return pigIcon
      case 'panda':
        return pandaIcon
      }
    }
    
  return (
    <div className="flex flex-col items-center justify-center px-8 mt-28">
      <h3 className="text-3xl text-slate-900">{profile.name}</h3>
      <img 
        src={setIcon(profile.icon)} 
        alt={profile.icon + 'icon'} 
        className='w-20 py-4'
      />
      <LearningGoalsBlock profile={profile} />
      <Link 
        to='/dashboard'
        className='w-full py-2 my-4 text-lg tracking-wide text-center text-white rounded-md bg-slate-900 dark:bg-slate-700'
      >
        Back
      </Link>
    </div>
  )
}

export default ProfilePage