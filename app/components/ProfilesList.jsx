import {Link} from 'remix'
import {AiOutlinePlus} from 'react-icons/ai'
import setIcon from '../utils/setIcon'

function ProfilesList({profiles, onClick}) {

  return (
    <div 
      onClick={onClick}  
      className='text-xl border-t text-slate-900 bg-slate-300 border-slate-300'
    >
      {profiles.map((profile , idx)=> (
        <Link
          key={idx}
          to={`/dashboard/${profile.name}`} 
          className='flex items-center justify-between px-6 py-2'>
          <span className='text-xl text-slate-900'>{profile.name}</span>
          <img 
            src={setIcon(profile.icon)} alt="profile icon" 
            className={`${profile.icon === 'soccer' || profile.icon === 'football' ? 'w-8' : 'w-10'}`}
          />
        </Link>
      )
      )}
      <div className='flex items-center justify-between px-3 py-3 bg-slate-400'>
        <span>Add Profile</span>
        <AiOutlinePlus className='text-2xl' />
      </div>
    </div>
  )
}

export default ProfilesList