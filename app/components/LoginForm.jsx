import {Form} from 'remix'

function LoginForm({onClick}) {
  return (
    <div>
      <Form method="post" className="max-w-sm px-10 py-8 mx-auto mt-24 bg-transparent">
        <input type="hidden" name="_action" value="login" />
        <div className="space-y-4">
          <h1 className="text-2xl text-center text-slate-900 dark:text-white">Login</h1>
          <div>
            <label htmlFor="username" className="block mb-1 font-semibold text-gray-600 dark:text-slate-400">Username</label>
            <input name="username" type="text" className="w-full px-4 py-2 bg-gray-300 rounded-md outline-none" />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-semibold text-gray-600 dark:text-slate-400">Password</label>
            <input name="password" type="password" minLength='4' className="w-full px-4 py-2 bg-gray-300 rounded-md outline-none" />
          </div>
        </div>
        <button type='submit' className="w-full py-2 mt-4 text-lg tracking-wide text-white rounded-md bg-slate-900 dark:bg-slate-700">Done</button>
      </Form>
      <p className='text-center text-gray-600 dark:text-slate-500'>Or create an account</p>
      <p 
      className='text-center underline cursor-pointer text-slate-900 dark:text-white'
      onClick={onClick}
      >
        Sign-up
      </p>
    </div>
  )
}

export default LoginForm
