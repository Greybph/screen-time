import {useEffect, useState} from 'react'
import {useLoaderData} from 'remix'
import Shows from '../../models/Shows'
import LikedShowsList from '../../components/LikedShowsList'

export async function loader() {
  const shows = await Shows.find({})
  return shows
}

function Dashboard() {
  const shows = useLoaderData()
 
  return (
    <div className='mt-32'>
      <LikedShowsList shows={shows}/>
    </div>
  )
}

export default Dashboard
