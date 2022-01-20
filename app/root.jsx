import Navbar from "./components/Navbar";
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
import gsap from "gsap";

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
    } else {
      setDarkMode(false)
    }
  },[])

  useEffect(() => {
    darkMode ? localStorage.setItem('theme', 'dark') : localStorage.removeItem('theme')
  }, [darkMode])
  
  return (
    <html lang="en" className={`${darkMode ? 'dark' : ''}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className= "transition-colors duration-1000 delay-300 bg-neutral-200 dark:bg-slate-900">
        <Navbar darkMode={() => setDarkMode(!darkMode)} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}
