import {useState, useEffect} from 'react'
import { useActionData, useTransition } from 'remix'
import {CgChevronDown} from 'react-icons/cg'
import {AiOutlinePlus, AiOutlineClose} from 'react-icons/ai'
import AddProfileModal from './AddProfileModal'
import ProfilesList from './ProfilesList'
import AlertPopup from './AlertPopup'

function ProfilesBlock({user}) {
  const [openCreateProfile, setOpenCreateProfile] = useState(false) 
  const [showProfiles, setShowProfiles] = useState(false)
  const action = useActionData()
  const transition = useTransition()

  useEffect(() => {
    if (action?.success) {
      setOpenCreateProfile(false)
      setShowProfiles(true)
    }
  }, [action])

  return (
    <>
      <div className='flex items-center justify-between px-3 py-3 bg-slate-300'>
        <span className='text-xl text-slate-900'>Profiles</span>
        
        {user.profiles.length 
          ? 
            showProfiles ?
              <AiOutlineClose
                className={`${openCreateProfile && showProfiles ? 'translate-y-14': ''} text-2xl transition-transform duration-300 delay-100`} 
                onClick={openCreateProfile ? 
                  () => setOpenCreateProfile(false) : 
                  () => setShowProfiles(false)
                } 
              /> 
            : 
              <CgChevronDown 
                className='text-3xl text-slate-900' 
                onClick={() => setShowProfiles(true)}
              /> 
          : <AiOutlinePlus
              className={`${openCreateProfile  ? 'translate-y-12 rotate-45 relative z-50' : ''} text-3xl text-slate-900 transition-all duration-300`} 
              onClick={() => {setOpenCreateProfile(!openCreateProfile)}}
            /> 
        }
        
      </div>
    
      {openCreateProfile && <AddProfileModal />}
    
      {showProfiles && 
        <ProfilesList 
          profiles={user?.profiles} 
          onClick={() => setOpenCreateProfile(true)}
        />
      }

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
            title={`Profile created for ${action?.name}`}
            message={`
              Click ${action?.gender === 'boy' ? 'his' : 'her'} name to get started 
            `}
            type='success'
            duration={5000}
          /> 
        : ''
      }

    </>
  )
}

export default ProfilesBlock