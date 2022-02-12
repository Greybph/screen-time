import {Form, useTransition} from 'remix'
import {UserContext} from '../root'
import {CgBoy, CgGirl} from 'react-icons/cg'
import {useState, useContext} from 'react'

function AddProfileModal() {
  const transition = useTransition()
  const [selectGender, setSelectGender] = useState('')
  const userContext = useContext(UserContext)
  
  return (
    <Form 
    method="post" 
    className="px-10 py-8 shadow rounded-b-md bg-slate-300">
        <input type="hidden" name="userId" value={userContext?._id} />
        <div className="space-y-4">
          <h1 className="text-2xl text-center text-slate-900 dark:text-white">Add Profile</h1>
          <div> 
            <input type="hidden" name="gender" value={selectGender} />
            <div className='flex justify-evenly'>
              <CgBoy 
                className={`${selectGender === 'boy' && 'bg-slate-100'} text-6xl p-2 rounded-full cursor-pointer text-sky-500`}
                onClick={() => setSelectGender('boy')}
              />
              <CgGirl 
                className={`${selectGender === 'girl' && 'bg-slate-100'} text-6xl p-2 rounded-full text-pink-400 cursor-pointer`} 
                onClick={() => setSelectGender('girl')}
              />
            </div>
          </div>
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold text-gray-600 dark:text-slate-400">Name</label>
            <input name="name" type="text" required 
              className="w-full px-4 py-2 rounded-md bg-slate-100 outline-slate-700" 
            />
          </div>
          <div className='relative'>
            <label htmlFor="age" className="block mb-1 font-semibold text-gray-600 dark:text-slate-400">Age</label>
            <input 
              name="age" type="number" required
              className="w-full px-4 py-2 rounded-md bg-slate-100 outline-slate-700"
            />
          </div>
        </div>
        <button 
          type='submit' 
          className="w-full py-2 mt-4 text-lg tracking-wide text-white rounded-md bg-slate-900 dark:bg-slate-700"
        >
          {transition.submission ? "Adding..." : "Done"}
        </button>
      </Form>
  )
}

export default AddProfileModal