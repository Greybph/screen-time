import { redirect } from "remix";

export async function loader() {
  const a = await fetch('https://words.bighugelabs.com/api/2/2713ee59bb33ec5fe7a12f8ad8e61c17/love/json',  {
    method: 'GET',
  })
  const b = await a.json()
  console.log(b)
 return  redirect('/')
}