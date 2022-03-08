import {CgSearch} from 'react-icons/cg'
import {AiOutlinePlus} from 'react-icons/ai'
import ShowDisplayCard from './ShowDisplayCard'
import {useState, useEffect, useRef} from 'react'

function SearchBar({onClick, shows}) {
  const [filteredTitles, setFilteredTitles] = useState([]) 
  const inputRef = useRef()

  function filterShows(e) {
    if (e.target.value == '') {
      return setFilteredTitles([])
    }
    let matches = shows.filter(t => {
     return t.title.toLowerCase().match(e.target.value.toLowerCase()) ||
      t.focus.some(f => f.includes(e.target.value.toLowerCase())) ||
      t.ages.includes(Number(e.target.value))
    })
    setFilteredTitles([...matches])
  }

  return (
    <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-full bg-white -z-10">
      <AiOutlinePlus
        onClick={onClick} 
        className='absolute text-xl rotate-45 cursor-pointer top-8 right-20'
      />
      <div className='flex w-5/6 py-20'>
        <CgSearch className="text-2xl relative text-black/[.5] left-10 top-2" />
        <input
        ref={inputRef}
          onChange={filterShows} 
          type='text'
          className="h-10 w-full px-12 text-black placeholder:text-lg placeholder-black/[.8] rounded-full outline-none bg-stone-200"
          placeholder="Search"
        />
      </div>

      <ul style={{height: filteredTitles.length ? '600px' : ''}} className='flex flex-wrap justify-center overflow-y-auto'>
        {filteredTitles.map(t => (
            <li key={t._id} className='inline-block space-x-4 w-80'>
              <ShowDisplayCard show={t} />
            </li>
          ))
        }
      </ul>

    </div>
  )
}

export default SearchBar