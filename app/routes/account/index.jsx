import {useState} from 'react'
import { useActionData } from 'remix'
import RegisterForm from '~/components/RegisterForm'
import LoginForm from '~/components/LoginForm'
import saveUser from '~/utils/saveUser'
import loginUser from '~/utils/loginUser'

export async function action({request}) {
  const data = await request.formData()
  const {_action, ...values} = Object.fromEntries(data)
 
  if (_action === 'register') {
    return saveUser(values)
  }

  if (_action === 'login') {
    return loginUser(values)
  }
}

function Account() {
  const action = useActionData()
  const [userHasAccount, setUserHasAccount] = useState(false)

  return (
  
    <div className='mx-auto mt-32'>
      <h1 className='px-4 text-3xl text-center dark:text-white'>
        {userHasAccount ? 'Welcome back': 'Let\'s get started...'}
      </h1>
      {userHasAccount ? 
          <LoginForm onClick={() => setUserHasAccount(false)}/>
          :
          <RegisterForm error={action?.error} onClick={() => setUserHasAccount(true)}/>
        }
      {action?.error ? 
        <h1 className='font-sans text-center text-red-700 '>{action?.error}</h1>
        : ''
      }

    </div>
  )
}

export default Account
