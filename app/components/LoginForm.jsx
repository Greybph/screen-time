import {Form} from 'remix'

function LoginForm({onClick}) {
  return (
    <div>
      <Form method="post" className="max-w-sm px-10 py-8 mt-24 bg-transparent">
        <input type="hidden" name="_action" value="login" />
        <div className="space-y-4">
          <h1 className="text-2xl text-center text-slate-900">Login</h1>
          <div>
            <label htmlFor="username" className="block mb-1 font-semibold text-gray-600">Username</label>
            <input name="username" type="text" className="w-full px-4 py-2 bg-gray-300 rounded-md outline-none" />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-semibold text-gray-600">Password</label>
            <input name="password" type="password" className="w-full px-4 py-2 bg-gray-300 rounded-md outline-none" />
          </div>
        </div>
        <button type='submit' className="w-full py-2 mt-4 text-lg tracking-wide text-white rounded-md bg-slate-900">Done</button>
      </Form>
      <p className='text-center text-gray-600'>Or create an account</p>
      <p 
      className='text-center underline cursor-pointer text-slate-900'
      onClick={onClick}
      >
        Sign-up
      </p>
    </div>
  )
}

export default LoginForm
