import Users from '~/models/Users'
import Shows from '~/models/Shows'

export async function action({request}) {
  const data = await request.formData()
  const {_action, title} = Object.fromEntries(data) 
  
  if (_action === 'increment') {
    await Users.updateOne({username: 'a'}, {$push: {likes: title}})
    
  }

  if (_action === 'decrement') {
    await Users.updateOne({username: 'a'}, {$pull: {likes: `${title}`}})

  }
  console.log(_action, title)
  return null
}

export async function loader() {
  return null
}