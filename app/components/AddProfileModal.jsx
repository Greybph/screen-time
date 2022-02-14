import {Form, useTransition} from 'remix'
import {UserContext} from '../root'
import {CgBoy, CgGirl} from 'react-icons/cg'
import {useState, useContext} from 'react'
import robotIcon from '../assets/robotIcon.svg'
import dogIcon from '../assets/dogIcon.svg'
import catIcon from '../assets/catIcon.svg'
import unicornIcon from '../assets/unicornIcon.svg'
import footballIcon from '../assets/footballIcon.svg'
import soccerIcon from '../assets/soccerIcon.svg'
import alienIcon from '../assets/alienIcon.svg'

function AddProfileModal() {
  const transition = useTransition()
  const [selectGender, setSelectGender] = useState('')
  const [selectIcon, setSelectIcon] = useState('')
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

          <div className='flex flex-col justify-evenly'>
            <label htmlFor="age" className="block mb-1 font-semibold text-gray-600 dark:text-slate-400">Icon</label>
            <input type="hidden" name="icon" value={selectIcon} />
            <div className='flex py-2 justify-evenly'>
              <img 
                className={`${selectIcon === 'robot' && 'bg-slate-100'} w-14 p-2 rounded-full`} 
                src={robotIcon} alt="Robot icon"
                onClick={() => setSelectIcon("robot")}
                />
              <img 
                className={`${selectIcon === 'cat' && 'bg-slate-100'} w-14 p-2 rounded-full`} 
                src={catIcon} alt="Cat icon" 
                onClick={() => setSelectIcon("cat")}
                />
              <img 
                className={`${selectIcon === 'dog' && 'bg-slate-100'} w-14 p-2 rounded-full`} 
                src={dogIcon} alt="Dog icon" 
                onClick={() => setSelectIcon("dog")}
                />
              <img 
                className={`${selectIcon === 'unicorn' && 'bg-slate-100'} w-14 p-2 rounded-full`} 
                src={unicornIcon} alt="Unicorn icon" 
                onClick={() => setSelectIcon("unicorn")}
                />
              <img 
                className={`${selectIcon === 'soccer' && 'bg-slate-100'} w-14 p-2 rounded-full`} 
                src={soccerIcon} alt="Soccer ball icon" 
                onClick={() => setSelectIcon("soccer")}
                />
              <img 
                className={`${selectIcon === 'football' && 'bg-slate-100'} w-14 p-2 rounded-full`} 
                src={footballIcon} alt="Football icon" 
                onClick={() => setSelectIcon("football")}
              />
            </div>
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