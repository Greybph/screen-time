import {useState, useEffect} from 'react'
import ShowDisplayCard from './ShowDisplayCard'

function LikedShowsList({shows}) {
  const [likedShows, setLikedShows] = useState([])

  useEffect(() => {
    let likes = Object.keys(localStorage)
    setLikedShows(likes)
    console.log(likedShows)
  },[])

  return (
    <div>
      {shows.map(show => {
        if (likedShows.includes(show.title)) {
          return <ShowDisplayCard key={show._id} show={show} />
        }
      })}
    </div>
  )
}

export default LikedShowsList