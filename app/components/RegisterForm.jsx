import {Form} from 'remix'

function RegisterForm() {


  return (
    <Form method="POST">
      <div className="w-screen max-w-sm px-10 py-8 shadow-md bg-white-100 rounded-xl">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-center text-gray-600">Register</h1>
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-gray-600">Username</label>
            <input name="username" type="text" className="w-full px-4 py-2 rounded-md outline-none bg-indigo-50" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-gray-600">Email</label>
            <input name="email" type="text" className="w-full px-4 py-2 rounded-md outline-none bg-indigo-50" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-gray-600">Password</label>
            <input name="password" type="password" className="w-full px-4 py-2 rounded-md outline-none bg-indigo-50" />
          </div>
        </div>
        <button className="w-full py-2 mt-4 text-lg tracking-wide text-indigo-100 rounded-md bg-gradient-to-tr from-pink-600 to-purple-600">Register</button>
      </div>
  </Form>
  )
}

export default RegisterForm
