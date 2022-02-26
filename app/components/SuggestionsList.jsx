import ShowDisplayCard from './ShowDisplayCard'

function SuggestionsList({profile, suggestions}) {
  
  return (
    <div className='w-full pb-6 -mt-1 bg-slate-300'>
      {suggestions.length ? (
      <ul>
        {suggestions.map(show => (
          <li key={show._id}>
            <ShowDisplayCard show={show} likeButton={false} />
          </li>
        ))}
      </ul>
      ) : (
        <p className='p-2 mx-6 text-sm text-center rounded-md bg-slate-200 font-open'>Currently no suggestions<br/>Try adding some Learning Goals for <strong>{profile.name}</strong></p>
      )}
    </div>
  )
}

export default SuggestionsList