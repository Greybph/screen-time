import {useState, useEffect} from 'react'
import ShowDisplayCard from './ShowDisplayCard'


function LikedShowsList({shows, likes}) {
  
  return (
    <div>
      <ul>
        {shows.map(show => {
          if (likes.includes(show.title)) {
            return (
              <li key={show._id}>
                <ShowDisplayCard show={show} likeButton={false} />
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}

export default LikedShowsList