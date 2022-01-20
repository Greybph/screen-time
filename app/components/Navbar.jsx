import { useState, useRef, useEffect } from "react"
import { Link } from "remix"
import{ VscMenu, VscClose} from 'react-icons/vsc'
import NavDropDown from './NavDropDown'
import gsap from 'gsap'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  

  return (
    <>
    <nav className="fixed top-0 z-10 flex items-center justify-between w-screen pt-3 pb-3 pl-4 pr-3 bg-transparent">
      <Link to='' className="text-3xl">screenTime</Link>
      <ul className="flex items-center">
        <li className="mr-5">
        </li>
        <li>
          <button
          className="z-10 flex items-center justify-center w-10 h-10 bg-green-200 rounded-full"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <VscClose className="text-2xl" /> : <VscMenu className="text-2xl"/>}
        </button>
        </li>
      </ul>
    </nav>
    <NavDropDown isOpen={menuOpen} /> 
    </>
  )
}

export default Navbar
