import {Link} from 'remix'
import {AiOutlinePlus} from 'react-icons/ai'
import pigIcon from '../assets/pigIcon.svg'
import catIcon from '../assets/catIcon.svg'
import dogIcon from '../assets/dogIcon.svg'
import pandaIcon from '../assets/pandaIcon.svg'


function ProfilesList({profiles, onClick}) {

  function setIcon(icon) {
    switch (icon) {
      case 'pig':
        return pigIcon 
      case 'cat':
        return catIcon
      case 'dog':
        return dogIcon
      case 'panda':
        return pandaIcon
    }
  }

  return (
    <div className='text-xl border-t text-slate-900 bg-slate-300 border-slate-300'>
      {profiles.map(profile => (
        <Link
          to={`/dashboard/${profile.name}`} 
          className='flex items-center justify-between px-6 py-2'>
          <span className='text-xl text-slate-900'>{profile.name}</span>
          <img 
            src={setIcon(profile.icon)} alt="icon" 
            className={`${profile.icon === 'soccer' || profile.icon === 'football' ? 'w-8' : 'w-10'}`}
          />
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