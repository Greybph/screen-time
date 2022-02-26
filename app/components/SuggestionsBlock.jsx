import {AiOutlinePlus} from 'react-icons/ai'
import {CgChevronDown} from 'react-icons/cg'
import {useState, useEffect} from 'react'
import SuggestionsList from './SuggestionsList'
import {BsFillExclamationCircleFill} from 'react-icons/bs'

function SuggestionsBlock({profile, suggestions, didUpdate}) {
  const [openSuggestions, setOpenSuggestions] = useState(false)
  const [sawUpdate, setSawUpdate] = useState(false)
 
  useEffect(() => {
    if (didUpdate) setSawUpdate(false)
  }, [didUpdate])

  const handleClick = () => {
    setOpenSuggestions(!openSuggestions)
    setSawUpdate(true)
  }

  return (
    <>
      <div
        onClick={handleClick} 
        className='relative flex items-center justify-between w-full px-3 py-3 mt-10 rounded-md bg-slate-300'
      >
        <span className='text-xl text-slate-900'>Suggestions</span>
        {openSuggestions ? 
          <AiOutlinePlus className='text-2xl rotate-45 text-slate-900' />
        :    
          <CgChevronDown className='text-2xl text-slate-900' />
        }
        {didUpdate && !sawUpdate && 
          <BsFillExclamationCircleFill 
            className='absolute right-0 text-xl -top-2 text-slate-900'
            onClick={handleClick} 
          />
        }
      </div>
      {openSuggestions && 
        <SuggestionsList 
          profile={profile} 
          suggestions={suggestions} 
        />
      }
    </>
  )
}

export default SuggestionsBlock