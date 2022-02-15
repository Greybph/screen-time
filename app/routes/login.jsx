import LoginForm from '../components/LoginForm'
import loginUser from '../utils/loginUser'
import AlertPopup from '../components/AlertPopup'
import { redirect, useActionData, useTransition } from 'remix'

export async function action({request}) {
  const data = await request.formData()
  const { ...values} = Object.fromEntries(data)

  return loginUser(values)
}

export async function loader({request}) {
  const userId = await request.headers.get("Cookie")
  if (userId && userId !== 'clear') {
    return redirect('/dashboard')
  }
 
  return null
}

function LoginPage() {
  const action = useActionData()
  const transition = useTransition()

  return (
    <div>
      {action?.error && transition.state === 'idle'
        ? <AlertPopup 
          title='Woops!'
          message={action?.error}
          type='error'
          duration={5000}
        /> 
        : ''
      }
      <LoginForm href='/register' />
    </div>
  )
}

export default LoginPage
