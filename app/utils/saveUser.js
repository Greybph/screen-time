import Users from "../models/Users"
import { redirect } from "remix"
import hasher from 'password-hash'

export default async function saveUser(values) {
  const exsitingUser = await Users.findOne({username: values.username})

  if (values.username === '' || values.username.includes(" ")) {
    return values.username === "" ?  
      {error: "Please provide a username"} :
      {error: "Username cannot contain spaces"}
  }

  if (exsitingUser) {
    return {error: "Sorry, that username is taken"}
  }  

  if (!values.email.includes("@")) {
    return {error: "Please provide a valid email"}
  }  
  
  const hash = hasher.generate(values.password)
  Users.create({
    username: values.username,
    email: values.email,
    password: hash
  })

  return redirect('/dashboard')
}