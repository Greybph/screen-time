import Users from '../models/Users'

export default async function updateGoals(goals, request, params) {
  const userId = await request.headers.get("Cookie")
  const user = await Users.findById(userId)
  const profileName = params.profile
  const profileIdxs = user.profiles.map((p, idx) => {
    if (p.name === profileName) return idx 
  })
  const profileIdx = profileIdxs.filter(p => p !== undefined)

  user.profiles[profileIdx].goals = goals

  await Users.findByIdAndUpdate(userId, user)
}