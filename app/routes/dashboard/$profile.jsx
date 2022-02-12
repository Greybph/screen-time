import { useLoaderData } from "remix"

export async function loader({params}) {
  return params.profile
}

function ProfilePage() {
  const profileName = useLoaderData()
  return (
    <div>{profileName}</div>
  )
}

export default ProfilePage