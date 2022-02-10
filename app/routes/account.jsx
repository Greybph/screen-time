import RegisterForm from '../components/RegisterForm'
import LoginForm from '../components/LoginForm'
import {useState} from 'react'
import loginUser from '../utils/loginUser'
import { useActionData } from 'remix'
import registerUser from '../utils/registerUser'

export async function action({request}) {
  const data = await request.formData()
  const {_action, ...values} = Object.fromEntries(data)

  if (_action === 'login') {
    return loginUser(values)
  }

  if (_action === 'register') {
    return registerUser(values)

  }
}

function AccountPage() {
  const [hasAccount, setHasAccount] = useState(false)
  const action = useActionData()
  
  return (
    <div>
      {action?.error ? <p>{action?.error}</p> : ''}
      {hasAccount ? 
        <LoginForm onClick={() => setHasAccount(false)} />
      :
        <RegisterForm onClick={() => setHasAccount(true)} />  
      }
    </div>
  )
}

export default AccountPage