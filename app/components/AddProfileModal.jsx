import {Form, useTransition} from 'remix'
import {UserContext} from '../root'
import {CgBoy, CgGirl} from 'react-icons/cg'
import {useState, useContext} from 'react'
import dogIcon from '../assets/dogIcon.svg'
import catIcon from '../assets/catIcon.svg'
import pigIcon from '../assets/pigIcon.svg'
import pandaIcon from '../assets/pandaIcon.svg'
import {AiOutlinePlus} from 'react-icons/ai'



function AddProfileModal({onClick}) {
  const transition = useTransition()
  const [selectGender, setSelectGender] = useState('')
  const [selectIcon, setSelectIcon] = useState('')
  const userContext = useContext(UserContext)
  
  return (
    <Form 
    method="post" 
    className="px-10 py-8 -mt-2 shadow rounded-b-md bg-slate-300">
        <input type="hidden" name="userId" value={userContext?._id} />
        <div className="space-y-4">
          <h1 className="relative text-2xl text-center text-slate-900">Add Profile</h1>
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
            <label htmlFor="name" className="block mb-1 font-semibold text-gray-600">Name</label>
            <input name="name" type="text" required 
              className="w-full px-4 py-2 rounded-md bg-slate-100 outline-slate-700" 
            />
          </div>
          <div className='relative'>
            <label htmlFor="age" className="block mb-1 font-semibold text-gray-600">Age</label>
            <input 
              name="age" type="number" required
              className="w-full px-4 py-2 rounded-md bg-slate-100 outline-slate-700"
            />
          </div>

          <div className='flex flex-col justify-evenly'>
            <label htmlFor="age" className="block mb-1 font-semibold text-gray-600">Icon</label>
            <input type="hidden" name="icon" value={selectIcon} />
            <div className='flex py-2 mx-auto justify-evenly w-fit'>
              <img 
                className={`${selectIcon === 'cat' && 'scale-125'} p-2 rounded-lg`} 
                src={catIcon} alt="Cat icon" 
                onClick={() => setSelectIcon("cat")}
              />
              <img 
                className={`${selectIcon === 'dog' && 'scale-125 scale'} w-fit p-2 rounded-lg`} 
                src={dogIcon} alt="Dog icon" 
                onClick={() => setSelectIcon("dog")}
              />
              <img 
                className={`${selectIcon === 'panda' && 'scale-125'} w-fit p-2 rounded-lg`} 
                src={pandaIcon} alt="Panda icon" 
                onClick={() => setSelectIcon("panda")}
              />
              <img 
                className={`${selectIcon === 'pig' && 'scale-125'} w-fit p-2 rounded-lg`} 
                src={pigIcon} alt="Pig icon" 
                onClick={() => setSelectIcon("pig")}
              />
            </div>
          </div>
        </div>
        <button 
          type='submit' 
          className="w-full py-2 mt-4 text-lg tracking-wide text-white rounded-md bg-slate-900"
        >
          {transition.submission ? "Adding..." : "Done"}
        </button>
      </Form>
  )
}

export default AddProfileModal