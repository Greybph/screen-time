

function SuggestionsModal({profile}) {
  return (
    <div className="w-full px-6 py-6 mx-8 -mt-1 shadow rounded-b-md bg-slate-300">
      {profile.goals.length ? (
        <p>LENGTH</p>
      ) : (
        <p className='p-2 mx-6 text-sm text-center rounded-md bg-slate-200 font-open'>The shows we suggest for {profile.name} will go here</p>
      )}
    </div>
  )
}

export default SuggestionsModal