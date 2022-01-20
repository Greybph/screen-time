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
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function meta() {
  return { title: "New Remix App" };
}

export function links() {
  return [{rel: 'stylesheet', href: tailwindUrl}]
}


export default function App() {
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className= "bg-neutral-200">
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}
