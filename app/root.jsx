import Navbar from "./components/Navbar"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "remix";
import tailwindUrl from './styles/tailwind.css'
import { useEffect, useState, createContext } from "react";
import mongoose from 'mongoose'
import Users from './models/Users'

export function meta() {
  return { title: "New Remix App" };
}

export function links() {
  return [{rel: 'stylesheet', href: tailwindUrl}]
}

export const UserContext = createContext()

export async function loader({request}) {
  console.log("ROOT LOADER CALLED")
  mongoose.connect('mongodb://localhost/screen_time', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  const userId = await request.headers.get('Cookie')
  
  if (userId === 'clear') {
    return null
  }

  const user = await Users.findById(userId)

  return user 
 }
 
export default function App() {
  const user = useLoaderData()
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
    } 
    if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('prefers-color-scheme: light)').matches)) {
      setDarkMode(false)
    }
  },[])

  useEffect(() => {
    darkMode ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
  }, [darkMode])
  
  return (
    <html lang="en" className={`${darkMode ? 'dark' : ''}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@500&display=swap" rel="stylesheet" />        <Links />
      </head>
      <body className= "transition-colors duration-1000 delay-300 font-mont bg-emerald-50 dark:bg-slate-900">
        <UserContext.Provider value={user}>
          <Navbar darkMode={() => setDarkMode(!darkMode)} />
          <Outlet />
        </UserContext.Provider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}
