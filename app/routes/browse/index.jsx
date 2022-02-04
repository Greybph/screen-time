import { Form, useLoaderData } from 'remix'
import { useState, useEffect } from 'react';
import ShowDisplayCard from '~/components/ShowDisplayCard';
import Shows from '~/models/Shows'
import Select from 'react-select'
import focusOptions from '~/focusOptions'
import FocusSelect from '~/components/FocusSelect'

export async function loader() {
  const shows = await Shows.find({})
  return shows
}

function Browse() {
  const shows = useLoaderData()
 
  return (
    <div className='flex flex-col items-center justify-center px-10 mt-32'>
      <h3 
        className='pb-4 text-2xl leading-normal text-black dark:text-white'
      >
        Discover the shows that fit your child's needs.
      </h3>
      {shows &&
        <FocusSelect shows={shows} />
      }
    </div>
  )
}

export default Browse;
