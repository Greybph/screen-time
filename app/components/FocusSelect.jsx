import {useState} from 'react'
import Select from 'react-select'
import focusOptions from '~/focusOptions'
import ShowDisplayCard from './ShowDisplayCard'

function FocusSelect({shows}) {
  const [focusFilter, setFocusFilter] = useState()

  function handleFilter(e) {
    setFocusFilter(e)
  }

  function compareFocus(show, target) {
    return target.every(f => show.focus.includes(f.value))
  }

  return (
    <div className='w-full'>
      <Select 
        placeholder="Search by focus..."
        onChange={handleFilter} 
        isMulti 
        isSearchable={false}
        captureMenuScroll
        options={focusOptions}
        className="w-full basic-multi-select"
      />
      {focusFilter?.length ? shows.map(show => {
        if (compareFocus(show, focusFilter)) 
          return <ShowDisplayCard key={show._id} show={show} />
          else return ''
      }) : ''
      }
    </div>
  )
}

export default FocusSelect