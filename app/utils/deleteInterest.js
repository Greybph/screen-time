import Users from '~/models/Users'

async function deleteInterest(request, params, interest) {
  const userId = await request.headers.get("Cookie")
  const user = await Users.findById(userId)
  
  const profileName = params.profile
  const profileIdxs = user.profiles.map((p, idx) => 
    p.name === profileName ? idx : null
  )
  const profileIdx = profileIdxs.filter(p => p !== null)
  
  const interestIdx = user.profiles[profileIdx].interests.indexOf(interest.toLowerCase())
  
  user.profiles[profileIdx].interests.splice(interestIdx, 1)
  
  await Users.findByIdAndUpdate(userId, user)

  return {success: true}
}

export default deleteInterest