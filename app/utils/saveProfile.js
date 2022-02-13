import Users from '../models/Users'

export default async function saveProfile(values) {
  if (values.gender === '') {
    return {error: "Select a gender icon for " + values.name}
  }
  
  if (values.icon === '') {
    return {error: "Select a profile icon " + values.name}
  }
  

  await Users.findByIdAndUpdate(values.userId, {$push: {
    profiles: {
      name: values.name,
      age: values.age,
      gender: values.gender,
      icon: values.icon,
      likes: []
    }}})
  
  return {
    success: true,
    name: values.name,
    gender: values.gender,
    icon: values.icon,
  }
}