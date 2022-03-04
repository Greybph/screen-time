import { useState} from "react"
import { Link } from "remix"
import{ VscMenu, VscClose} from 'react-icons/vsc'
import NavDropDown from './NavDropDown'
import {FaRegLightbulb} from 'react-icons/fa'
import clsx from "clsx"


function Navbar({darkMode, shows}) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 z-50 flex justify-between w-screen px-4 py-3 mt-3 bg-transparent">
        <Link to='' onClick={() => setMenuOpen(false)} className="text-xl font-extrabold transition-colors duration-700 delay-500 text-slate-900 dark:text-emerald-300 font-mont">screenTime</Link>
        <ul className="flex items-center lg:hidden">
          <li className="flex mr-2">
            <button onClick={darkMode} className="bg-transparent rounded-full ">
              <FaRegLightbulb title="Dark/Light" className="text-2xl transition-colors duration-700 delay-500 dark:text-yellow-300 text-slate-900"/>
            </button>
            <button
              className="z-10 flex items-center justify-center w-10 h-10 ml-5 transition-colors duration-700 delay-500 rounded-full bg-slate-900 dark:bg-emerald-300"
              onClick={() => setMenuOpen(!menuOpen)} 
            >
              {menuOpen ? 
                <VscClose className="text-2xl text-yellow-300 transition-colors duration-700 delay-500 dark:text-black" /> 
              : 
                <VscMenu className="text-2xl text-yellow-300 transition-colors duration-700 delay-500 dark:text-black"/>}
            </button>
          </li>
        </ul>

        <ul className="hidden lg:flex">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </nav>
      <NavDropDown shows={shows} isOpen={menuOpen} onNavigate={() => setMenuOpen(!menuOpen)} darkMode={darkMode}/> 
    </>
  )
}

export default Navbar
