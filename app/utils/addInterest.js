import Users from '~/models/Users'

async function addInterest(request, params, interest) {
  const userId = await request.headers.get("Cookie")
  const user = await Users.findById(userId)
  const profileName = params.profile
  const profileIdxs = user.profiles.map((p, idx) => {
    if (p.name === profileName) return idx 
  })
  const profileIdx = profileIdxs.filter(p => p !== undefined)


  user.profiles[profileIdx].interests.push(interest.toLowerCase())
  
  await Users.findByIdAndUpdate(userId, user)

  return {success: true}
}

export default addInterest