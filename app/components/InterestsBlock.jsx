import {useState} from 'react'
import { useActionData } from 'remix'
import {AiOutlinePlus} from 'react-icons/ai'
import {CgChevronDown} from 'react-icons/cg'
import InterestsModal from '~/components/InterestsModal'

function InterestsBlock({profile}) {
  const action = useActionData()
  const [openInterests, setOpenInterests] = useState(action?.success)

  return (
    <div className='flex items-center justify-between w-full px-3 py-3 rounded-md bg-slate-300'>
      <span className='text-xl text-slate-900'>Interests</span>
      {profile?.interests.length ? (
        <CgChevronDown 
          className="text-2xl text-slate-900" 
          onClick={() => setOpenInterests(true)}
        />
      ) : (
          <AiOutlinePlus className="text-2xl text-slate-900"
            onClick={() => setOpenInterests(true)}
          />
      )}

      {openInterests && <InterestsModal 
        profile={profile} 
        onClick={() => setOpenInterests(false)} 
      />} 
    </div>  
  )
}

export default InterestsBlock