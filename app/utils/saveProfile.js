import Users from '../models/Users'

export default async function saveProfile(values) {
  if (values.gender === '') {
    return {error: "Select a gender icon for " + values.name}
  }
  
  if (values.icon === '') {
    return {error: "Select a profile icon " + values.name}
  }
  
  const user = await Users.findOne({_id: values.userId})
  const profileNames = user.profiles.map(profile => profile.name)
 
  if (profileNames.includes(values.name)) {
    return {error: values.name + ' already has a profile'}
  }

  await Users.findByIdAndUpdate(values.userId, {$push: {
    profiles: {
      name: values.name,
      age: values.age,
      gender: values.gender,
      icon: values.icon,
      likes: [],
      interests: [],
    }}
  })

  return {
    success: true,
    name: values.name,
    gender: values.gender,
    icon: values.icon,
  }
}