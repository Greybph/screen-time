import {useLoaderData, json, redirect} from 'remix'
import Users from '~/models/Users'

export async function loader({request}) {
  const cookieHeader = request.headers.get("Cookie")
  const user = await Users.findById(cookieHeader)

  if (!user) {
    return redirect('/account')
  }
  return user
}

function Dashboard() {
  const user = useLoaderData()
  return (
    <div>
      <div>{user?.username}</div>
    </div>
  )
}

export default Dashboard
