import Users from "../models/Users"
import hasher from 'password-hash'
import { redirect } from "remix"

export default async function registerUser(values) {
  const possibleUser = await Users.findOne({username: values.username})

  if (possibleUser) {
    return {error: 'That username is taken'}
  }

  if (values.username === '') {
    return {error: "Please provide a username"}
  }

  if (values.email === '' || !values.email.includes('@')) {
    return {error: 'Please provide a valid email address'}
  }

  hashedPw = hasher.generate(values.password)

  const user = await Users.create({username: values.username, email: values.email, password: hashedPw})
 
  return redirect('/dashboard', {
    headers: {
      "Set-Cookie": user._id
    }
  })
}