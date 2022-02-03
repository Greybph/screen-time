import { Form, useLoaderData } from 'remix'
import { useState, useEffect } from 'react';
import ShowDisplayCard from '~/components/ShowDisplayCard';
import Shows from '~/models/Shows'
import Select from 'react-select'
import focusOptions from '~/focusOptions'
import { set } from 'mongoose';

export async function loader() {
  const shows = await Shows.find({})
  return shows
}

function Browse() {
  const shows = useLoaderData()
  const [filterFocus, setFilterFocus] = useState()
  

  function handleFilter(e) {
       setFilterFocus(e)
  }

  function compareFocus(show, target) {
    return target.every(f => show.focus.includes(f.value))
  }

  return (
    <div className='flex flex-col items-center justify-center px-10 mt-32'>
      <h3 
        className='pb-4 text-2xl leading-normal text-black dark:text-white'
      >
        Discover the shows that fit your child's needs.
      </h3>
      <Select 
        onChange={handleFilter} isMulti options={focusOptions}
        className="w-full basic-multi-select"
    classNamePrefix="select"
      />
      {filterFocus?.length ? shows.map(show => {
        if (compareFocus(show, filterFocus)) return <ShowDisplayCard key={show._id} show={show} />
        else return ''
      }) : ''
      }
    </div>
  )
}

export default Browse;
