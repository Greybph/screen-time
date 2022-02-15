import { redirect } from "remix";

export async function action() {
  return redirect('/', {
    headers: {
      "Set-Cookie": "clear"
    }
  })
}
