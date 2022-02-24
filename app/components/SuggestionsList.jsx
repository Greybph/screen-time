import ShowDisplayCard from './ShowDisplayCard'

function SuggestionsList({profile, suggestions}) {
  
  return (
    <div className='w-full pb-6 bg-slate-300'>
      {suggestions ? (
      <ul>
        {suggestions.map(show => (
          <li key={show._id}>
            <ShowDisplayCard show={show} likeButton={false} />
          </li>
        ))}
      </ul>
      ) : (
        <p className='p-2 mx-6 text-sm text-center rounded-md bg-slate-200 font-open'>The shows we suggest for {profile.name} will go here</p>
      )}
    </div>
  )
}

export default SuggestionsList