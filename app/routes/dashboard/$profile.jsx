import { useLoaderData } from "remix"
import Users from '~/models/Users'
import dogIcon from '~/assets/dogIcon.svg'
import catIcon from '~/assets/catIcon.svg'
import pandaIcon from '~/assets/pandaIcon.svg'
import pigIcon from '~/assets/pigIcon.svg'
import InterestsBlock from '~/components/InterestsBlock'
import addInterest from '~/utils/addInterest'
import deleteInterest from "~/utils/deleteInterest"

export async function action({request, params}) {
  const formData = await request.formData()
  const {_action, interest} = Object.fromEntries(formData)
  
  if (_action === 'add') {
    addInterest(request, params, interest)
  }

  if (_action === 'delete') {
    return deleteInterest(request, params, interest)
  }

  return null
}

export async function loader({params, request}) {
  const userId = await request.headers.get("Cookie")
  const profileName = params.profile
  const user = await Users.findById(userId)
  const profile = user.profiles.filter(profile => profile.name === profileName)

  return profile[0]
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
      <InterestsBlock profile={profile} />
    </div>
  )
}

export default ProfilePage