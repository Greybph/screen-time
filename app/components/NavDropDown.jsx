import { Link } from "remix"
import gsap from 'gsap'
import {useEffect, useRef} from 'react'
import {CgSearch, CgController, CgChevronDown, CgSun, CgSupport} from 'react-icons/cg'

function NavDropDown({isOpen}) {
  const navRef = useRef()
  const listRef = useRef()

  useEffect(() => {
    const listItems = [...listRef.current.children]
    const tl = gsap.timeline()

    if (isOpen) {
      gsap.to(navRef.current, {y: 0, duration: .3, ease: 'none'}), 
      gsap.to(listItems, {opacity: 1, y: -60, stagger: .1}, '+=.2')
    } else {
      tl.to(listItems.reverse(), {opacity: 0, y: -80, duration: .2, stagger: .1}),
      tl.to(navRef.current, {y: '-100%', duration: .1}, '-=.3')
    }
  
  }, [isOpen])
  
  return (
    <div ref={navRef} className={`fixed -translate-y-full top-0 z-0 flex items-center justify-center flex-col w-full p-5 duration-500 ease-in-outbg-white bg-white`}>
      {/* ${isOpen ? 'translate-y-0' : '-translate-y-full'} */}
      <ul ref={listRef} className="w-full px-4 mt-10 translate-y-20">
        <li className="relative mb-7">
          <CgSearch className="absolute text-2xl text-black/[.5] top-1/4 left-5" />
          <input type='text' className="w-full h-10 pl-12 text-black placeholder-black/[.8] border border-yellow-800/[.45] rounded-full outline-none bg-stone-200" placeholder="Search" />
        </li>
        <li className="pr-3 opacity-0">
          <Link to='/about' className="flex items-center justify-between py-3 border-b cursor-pointer border-yello-800">
            <span className="flex items-center justify-center">
              <CgController className="text-4xl"/>
              <span className="pl-2 text-lg font-medium">About</span>
            </span>
            <CgChevronDown className="mr-4"/>
          </Link>
        </li>
        <li className="pr-3 opacity-0">
          <Link to='/contact' className="flex items-center justify-between py-3 border-b cursor-pointer border-yello-800">
            <span className="flex items-center justify-center">
              <CgSun className="text-4xl"/>
              <span className="pl-2 text-lg font-medium">Contact</span>
            </span>
            <CgChevronDown className="mr-4" />
          </Link>
        </li>
        <li className="pr-3 opacity-0">
          <Link to='/contact' className="flex items-center justify-between py-3 border-b cursor-pointer">
            <span className="flex items-center justify-center">
              <CgSupport className="text-4xl"/>
              <span className="pl-2 text-lg font-medium">Services</span>
            </span>
            <CgChevronDown className="mr-4" />
          </Link>
        </li>
        <li className="opacity-0">
          <Link to='/contact' className="flex items-center justify-between py-3 cursor-pointer">
            <p className="text-lg">Log In</p>
          </Link>
        </li>
        <li className="opacity-0">
          <Link to='/contact' className="flex items-center justify-between py-3 cursor-pointer">
            <p className="text-lg">Create Profile</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavDropDown
