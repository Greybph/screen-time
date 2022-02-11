import {Form, useFetcher} from 'remix'
import {CgBoy, CgGirl} from 'react-icons/cg'
import {useState} from 'react'

function AddProfileModal({ref}) {
  const fetcher= useFetcher()
  const [selectGender, setSelectGender] = useState('')

  return (
    <fetcher.Form 
      method="post" 
      className="fixed left-0 right-0 w-5/6 px-10 py-8 mx-auto bg-white rounded-md shadow">
        <div className="space-y-4">
          <h1 className="text-2xl text-center text-slate-900 dark:text-white">Add Profile</h1>
          <div>
            <input type="hidden" name="gender" value={selectGender} />
            <div className='flex justify-evenly'>
              <CgBoy 
                className={`${selectGender === 'boy' && 'bg-gray-300'} text-6xl p-2 rounded-full cursor-pointer text-sky-500`}
                onClick={() => setSelectGender('boy')}
              />
              <CgGirl 
                className={`${selectGender === 'girl' && 'bg-gray-300'} text-6xl p-2 rounded-full text-pink-400 cursor-pointer`} 
                onClick={() => setSelectGender('girl')}
              />
            </div>
          </div>
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold text-gray-600 dark:text-slate-400">Name</label>
            <input name="name" type="text" className="w-full px-4 py-2 bg-gray-300 rounded-md outline-slate-700" />
          </div>
          <div className='relative'>
            <label htmlFor="age" className="block mb-1 font-semibold text-gray-600 dark:text-slate-400">Age</label>
            <input 
              name="age" type="number"
              className="w-full px-4 py-2 bg-gray-300 rounded-md outline-slate-700"
            />
          </div>
        </div>
        <button 
          type='submit' 
          className="w-full py-2 mt-4 text-lg tracking-wide text-white rounded-md bg-slate-900 dark:bg-slate-700"
        >
          {fetcher.submission ? "Adding..." : "Done"}
        </button>
      </fetcher.Form>
  )
}

export default AddProfileModal