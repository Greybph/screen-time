import {Link} from 'remix'

function ProfilesList({profiles}) {
  return (
    <div className='border-t bg-slate-300 border-slate-300'>
    
      {profiles.map(profile => (
        <Link
          to={`/dashboard/${profile.name}`} 
          className='flex items-center justify-between px-3 py-3'>
          <span className='text-xl text-slate-900'>{profile.name}</span>
        </Link>
      )
      )}
    </div>
  )
}

export default ProfilesList