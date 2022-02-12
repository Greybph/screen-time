import Users from '../models/Users'

export default async function saveProfile(values) {
  if (values.gender === '') {
    return {error: "Select a gender icon for " + values.name}
  }

  await Users.findByIdAndUpdate(values.userId, {$push: {
    profiles: {
      name: values.name,
      age: values.age,
      gender: values.gender,
      likes: []
    }}})
  
  return {success: 'Profile create for ' + values.name}
}