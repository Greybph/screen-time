import {AiOutlinePlus} from 'react-icons/ai'
import {CgChevronDown} from 'react-icons/cg'
import LearningGoalsModal from './LearningGoalsModal'
import {useState, useEffect} from 'react'
import {useFetcher} from 'remix'

function LearningGoalsBlock({profile}) {
  const [openModal, setOpenModal] = useState(false)
  const transition = useFetcher()

  return (
    <>
      <div
        onClick={() => setOpenModal(!openModal)} 
        className='flex items-center justify-between w-full px-3 py-3 rounded-md bg-slate-300'>
        <span className='text-xl text-slate-900'>Learning Goals</span>
        {openModal ? 
          <AiOutlinePlus className='text-2xl rotate-45 text-slate-900' />
         : 
          <CgChevronDown className='text-2xl text-slate-900' />
        }
      </div>
      {openModal && <LearningGoalsModal profile={profile} />}
    </>
  )
}

export default LearningGoalsBlock