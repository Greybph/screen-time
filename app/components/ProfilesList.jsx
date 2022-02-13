import {Link} from 'remix'
import {AiOutlinePlus} from 'react-icons/ai'

function ProfilesList({profiles, onClick}) {
  return (
    <div className='text-xl border-t text-slate-900 bg-slate-300 border-slate-300'>
      {profiles.map(profile => (
        <Link
          to={`/dashboard/${profile.name}`} 
          className='flex items-center justify-between'>
          <span className='px-3 py-3 text-xl text-slate-900'>{profile.name}</span>
        </Link>
      )
      )}
      <div className='flex items-center justify-between px-3 py-3 bg-slate-400'>
        <span>Add Profile</span>
        <AiOutlinePlus onClick={onClick} className='text-3xl' />
      </div>
    </div>
  )
}

export default ProfilesList