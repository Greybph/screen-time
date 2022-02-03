import Users from "../models/Users"
import hasher from 'password-hash'
import { redirect } from "remix"

export default async function loginUser(values) {
  const user = await Users.findOne({username: values.username})
  
  if (!user) {
    return {error: "Incorrect username or password"}
  } 
  
  if (hasher.verify(values.password, user.password)) {

    return redirect('/dashboard', {
      headers: {
        "Set-Cookie": user._id
      }
    })
     
  } else {
    
    return {error: "Incorrect username or password"}

  }

}




