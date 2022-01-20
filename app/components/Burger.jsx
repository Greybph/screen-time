import { useState } from 'react'
import{ VscMenu, VscClose} from 'react-icons/vsc'
import NavDropDown from './NavDropDown'

function Burger() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <button
        className="flex items-center justify-center w-10 h-10 bg-green-200 rounded-full"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <VscClose className="text-2xl" /> : <VscMenu className="text-2xl"/>}
      </button>
    </>

  )
}

export default Burger
