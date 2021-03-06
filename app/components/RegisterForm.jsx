import {Form, Link, useTransition} from 'remix'
import { useState } from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs'

function RegisterForm() {
  const transition = useTransition()
  const [minLength, setMinLength] = useState(false)

  function handleChange(e) {
    e.target.value.length < 4 ? setMinLength(false) : setMinLength(true)
  }
  
  return (
    <div>
      <Form method="post" className="max-w-sm px-10 py-8 mx-auto mt-24 bg-transparent">
        <div className="space-y-4">
          <h1 className="text-2xl text-center transition-colors duration-700 delay-500 text-slate-900 dark:text-white">Sign-up</h1>
          <div>
            <label htmlFor="username" className="block mb-1 font-semibold text-gray-600 transition-colors duration-700 delay-500 dark:text-slate-400">Username</label>
            <input name="username" type="text" className="w-full px-4 py-2 bg-gray-300 rounded-md outline-slate-700" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-gray-600 transition-colors duration-700 delay-500 dark:text-slate-400">Email</label>
            <input name="email" type="text" className="w-full px-4 py-2 bg-gray-300 rounded-md outline-slate-700" />
          </div>
          <div className='relative'>
            <label htmlFor="password" className="block mb-1 font-semibold text-gray-600 transition-colors duration-700 delay-500 dark:text-slate-400">Password</label>
            <input 
              name="password" type="password" minLength='4'
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-300 rounded-md outline-slate-700"
              />
            <BsFillCheckCircleFill
              className={`${minLength ? '' : 'opacity-0'} absolute text-xl text-slate-900 top-10 -right-8`}
            />
          </div>
        </div>
        <button 
          type='submit' 
          className="w-full py-2 mt-4 text-lg tracking-wide text-white transition-colors duration-700 delay-500 rounded-md bg-slate-900 dark:bg-slate-700"
        >
          {transition.submission ? "Submitting..." : "Done"}
        </button>
      </Form>
      <p className='text-center text-gray-600 transition-colors duration-700 delay-500 dark:text-slate-500'>Already have an account?</p>
      <div className='flex items-center justify-center'>
        <Link
          to='/login'
          className='text-center underline transition-colors duration-700 delay-500 cursor-pointer text-slate-800 dark:text-white'
          >
            Login
          </Link>
      </div>
    </div>
  )
}

export default RegisterForm
