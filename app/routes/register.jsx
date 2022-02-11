import RegisterForm from '../components/RegisterForm'
import LoginForm from '../components/LoginForm'
import registerUser from '../utils/registerUser'
import AuthErrorPopup from '../components/AuthErrorPopup'
import {useState} from 'react'
import { useActionData, useTransition } from 'remix'

export async function action({request}) {
  const data = await request.formData()
  const {...values} = Object.fromEntries(data)

  return registerUser(values)
}

function RegisterPage() {
  const action = useActionData()
  const transition = useTransition()
  
  return (
    <div>
      {action?.error && transition.state === 'idle' 
        ? <AuthErrorPopup error={action?.error} /> 
        : ''
      }
      <RegisterForm />  
    </div>
  )
}

export default RegisterPage