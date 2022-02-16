import ShowDisplayCard from './ShowDisplayCard'


function LikedShowsList({shows, likes}) {
  
  return (
    <div>
      {likes.length ? (
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
      ) : (
        <div className='flex flex-col justify-between px-3 py-3 rounded-t-md bg-slate-300'>
          <span className='self-center block pb-2 text-sm font-bold text-slate-900 font-open'>The shows you like will go here</span>
        </div>
      )}
    </div>
  )
}

export default LikedShowsList