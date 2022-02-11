import LoginForm from '../components/LoginForm'
import loginUser from '../utils/loginUser'
import AuthErrorPopup from '../components/AuthErrorPopup'
import { useActionData, useTransition } from 'remix'

export async function action({request}) {
  const data = await request.formData()
  const { ...values} = Object.fromEntries(data)

  return loginUser(values)
}

function LoginPage() {
  const action = useActionData()
  const transition = useTransition()

  return (
    <div>
      {action?.error && transition.state === 'idle'
        ? <AuthErrorPopup error={action?.error} /> 
        : ''
      }
      <LoginForm href='/register' />
    </div>
  )
}

export default LoginPage
