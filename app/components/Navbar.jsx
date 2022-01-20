import { useState, useRef, useEffect } from "react"
import { Link } from "remix"
import{ VscMenu, VscClose} from 'react-icons/vsc'
import NavDropDown from './NavDropDown'
import gsap from 'gsap'
import {FaRegLightbulb} from 'react-icons/fa'


function Navbar({darkMode}) {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 z-10 flex justify-between w-screen pt-3 pb-3 pl-4 pr-3 mt-3 bg-transparent">
        <Link to='' className="text-3xl transition-colors duration-700 delay-500 dark:text-orange-300">screenTime</Link>
        <ul className="flex items-center ">
  
  
          <li className="flex mr-2">
            
          <button onClick={darkMode} className="bg-transparent rounded-full ">
           <FaRegLightbulb className="text-2xl text-green-200"/>
          </button>

            <button
            className="z-10 flex items-center justify-center w-10 h-10 ml-5 bg-green-200 rounded-full"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <VscClose className="text-2xl" /> : <VscMenu className="text-2xl"/>}
          </button>
          </li>
        </ul>
      </nav>
      <NavDropDown isOpen={menuOpen} darkMode={darkMode}/> 
    </>
  )
}

export default Navbar
