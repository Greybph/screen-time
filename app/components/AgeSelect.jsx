import {useState} from 'react'
import Select from 'react-select'
import ageOptions from '~/ageOptions'
import ShowDisplayCard from './ShowDisplayCard'
import {RiArrowUpDownFill} from 'react-icons/ri'

function AgeSelect({shows}) {
  const [ageFilter, setAgeFilter] = useState()

  function handleFilter(e) {
    setAgeFilter(e)
  }

  function compareFocus(show, target) {
    return target.every(a => show.ages.includes(a.value))
  }

  return (
    <div className='w-full'>
      <Select 
        placeholder="Search by age..."
        onChange={handleFilter} 
        isMulti 
        isSearchable={false}
        captureMenuScroll
        options={ageOptions}
        className="w-full basic-multi-select"
      />

      {ageFilter?.length ? (
        <div className='flex items-center px-4 py-2 mx-auto mt-4 rounded-md w-fit'>
          <RiArrowUpDownFill className='mr-4 text-2xl text-slate-900'/>
          <span className='text-sm font-bold tracking-wide text-slate-800 font-open'>Toggle teaching focus</span>
        </div>
      ) : ''}

      {ageFilter?.length ? shows.map(show => {
        if (compareFocus(show, ageFilter)) 
          return <ShowDisplayCard key={show._id} show={show} />
          else return ''
      }) : ''
      }
    </div>
  )
}

export default AgeSelect
