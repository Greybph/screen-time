import Users from '../models/Users'
import hasher from 'password-hash'
import { redirect } from 'remix'

export default async function loginUser(values) {
  const user = await Users.findOne({username: values.username})
  
  if (!user) {
    return {error: "Incorrect username or password"}
  }

  const match = hasher.verify(values.password, user.password)

  if (!match) {
    return {error: "Incorrect username or password"}
  }

  return redirect('/dashboard', {
    headers: {
      "Set-Cookie": user._id
    }
  })
}