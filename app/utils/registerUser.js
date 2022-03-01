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

  if (!values.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    return {error: "Please provide a valid email"}
  }

  if (values.password.length < 4) {
    return {error: 'Password must be 4+ characters'}
  }

  hashedPw = hasher.generate(values.password)

  const user = await Users.create({username: values.username, email: values.email, password: hashedPw})
 
  return redirect('/dashboard', {
    headers: {
      "Set-Cookie": user._id
    }
  })
}