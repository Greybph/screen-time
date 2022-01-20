import RegisterForm from '../components/RegisterForm'
import AlertPop from '../components/AlertPop'
import { useActionData } from 'remix'

export async function action({request}) {
  const form = await request.formData()
  const user = Object.fromEntries(form)
  const errors = {}

  if (user.username === '') {
    errors.usernameError = "Please provide your username"
  }
  if (!user.email.includes('@')) {
    errors.emailError = "Please enter a valid email"
  }
  
  if (Object.keys(errors).length) {
    return errors
  }
  return user
}

function Register() {
  const data = useActionData()
  let user
  let error

  if (data) {
    if (data.username) user = data.username
    if (data.emailError || data.usernameError) error = data.emailError || data.usernameError
  }

  return (
    <>
      <RegisterForm />   
      {user && <AlertPop type='success' title={`Welcome ${user}`} message="Your account has been registered!" />}
      {error && <AlertPop type='error' title='Woops' message={error} />}
    </>
  )
}

export default Register
