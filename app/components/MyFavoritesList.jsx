import ShowDisplayCard from './ShowDisplayCard'


function MyFavoritesList({favorites}) {
  
  return (
    <div className='pb-6'>
      {favorites.length ? (
      <ul>
        {favorites.map(show => (
          <li key={show._id}>
            <ShowDisplayCard show={show} likeButton={false} />
          </li>
        ))}
      </ul>
      ) : (
        <p className='p-2 mx-6 text-sm text-center rounded-md bg-slate-200 font-open'>The shows you like will go here</p>
      )}
    </div>
  )
}

export default MyFavoritesList