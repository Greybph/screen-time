import {AiOutlinePlus} from 'react-icons/ai'
import {CgChevronDown} from 'react-icons/cg'
import {useState} from 'react'
import SuggestionsList from './SuggestionsList'

function SuggestionsBlock({profile, suggestions}) {
  const [openSuggestions, setOpenSuggestions] = useState(false)

  return (
    <>
      <div
        onClick={() => setOpenSuggestions(!openSuggestions)} 
        className='flex items-center justify-between w-full px-3 py-3 rounded-md bg-slate-300'
      >
        <span className='text-xl text-slate-900'>Suggestions</span>
        {openSuggestions ? 
          <AiOutlinePlus className='text-2xl rotate-45 text-slate-900' />
        :    
          <CgChevronDown className='text-2xl text-slate-900' />
        }
      </div>
      {openSuggestions && <SuggestionsList profile={profile} suggestions={suggestions} />}
    </>
  )
}

export default SuggestionsBlock