import Navbar from "./components/Navbar"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import tailwindUrl from './styles/tailwind.css'
import { useEffect, useState } from "react";

export function meta() {
  return { title: "New Remix App" };
}

export function links() {
  return [{rel: 'stylesheet', href: tailwindUrl}]
}


export default function App() {
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet" />
        <Meta />
        <Links />
      </head>
      <body className= "transition-colors duration-1000 delay-300 font-mont bg-emerald-50 dark:bg-slate-900">
        <Navbar darkMode={() => setDarkMode(!darkMode)} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}
