import { useState } from 'react'

function GenreItem({genre}) {


  const [isSelected, setIsSelected] = useState(false)
  return (
    <div className={`${isSelected ? 'bg-slate-900 text-white' : ''} m-2 relative flex flex-col bg-white items-center w-32 h-32 border-2 border-black rounded-full justify-evenly`}>
      <label className='' htmlFor={genre}>{genre.charAt(0).toUpperCase() + genre.slice(1)}</label>
      <input onChange={() => setIsSelected(!isSelected)} checked={isSelected} className='absolute w-32 h-32 opacity-0 cursor-pointer' type="checkbox" name={genre}/>
    </div>
  )
}

export default GenreItem;
