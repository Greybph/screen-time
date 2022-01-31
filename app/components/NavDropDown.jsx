import { Link, useTransition } from "remix"
import gsap from 'gsap'
import {useEffect, useRef} from 'react'
import {CgSearch, CgController, CgChevronDown, CgSun, CgSupport} from 'react-icons/cg'

function NavDropDown({isOpen, onNavigate}) {
  const transition = useTransition()
  const state = transition.state === "loading" ? "loading" : 'idle'
  const navRef = useRef()
  const listRef = useRef()

  useEffect(() => {
    const listItems = [...listRef.current.children]
    const tl = gsap.timeline()

    
    if (isOpen) {
      gsap.to(navRef.current, {opacity: 1}),
      gsap.to(navRef.current, {y: 0, duration: .3}), 
      gsap.to(listItems, {opacity: 1, y: -60, stagger: .1}, '+=.1')
    } 
    if (!isOpen && state === 'idle') {
      tl.to(listItems.reverse(), {opacity: 0,  stagger: .1}),
      tl.to(listItems.reverse(), {y: -100}),
      gsap.to(navRef.current, {y: '-100%', duration: .3}, '-=.8')
      
    } 
    if (!isOpen && state === 'loading') {
      gsap.to(navRef.current, {opacity: 0, duration: 0})
    }
  
  }, [isOpen, state])
  
  return (
    <div ref={navRef} className={`-translate-y-full fixed z-40 duration-500 top-0 h-full flex-col ease-out w-full p-5 bg-white dark:bg-slate-800`}>
      <ul ref={listRef} className="w-full px-4 mt-16 translate-y-20 dark:text-white">
        <li className="relative mb-7">
          <CgSearch className="absolute text-2xl text-black/[.5] top-1/4 left-5" />
          <input type='text' className="w-full h-10 pl-12 text-black placeholder-black/[.8] rounded-full outline-none bg-stone-200" placeholder="Search" />
        </li>
        <li title="About" className="pr-3 opacity-0">
          <Link to='/about' onClick={onNavigate} className="flex items-center justify-between py-3 border-b cursor-pointer">
            <span className="flex items-center justify-center">
              <CgController className="text-4xl"/>
              <span className="pl-2 text-lg font-medium">About</span>
            </span>
            <CgChevronDown className="mr-4"/>
          </Link>
        </li>
        <li title="Browse" className="pr-3 opacity-0">
          <a href='/browse' onClick={onNavigate} className="flex items-center justify-between py-3 border-b cursor-pointer">
            <span className="flex items-center justify-center">
              <CgSun className="text-4xl"/>
              <span className="pl-2 text-lg font-medium">Browse</span>
            </span>
            <CgChevronDown className="mr-4" />
          </a>
        </li>
        <li title="Services" className="pr-3 opacity-0">
          <Link to='/contact' onClick={onNavigate} className="flex items-center justify-between py-3 border-b cursor-pointer">
            <span className="flex items-center justify-center">
              <CgSupport className="text-4xl"/>
              <span className="pl-2 text-lg font-medium">Services</span>
            </span>
            <CgChevronDown className="mr-4" />
          </Link>
        </li>
        <li className="opacity-0">
          <Link to='/contact' className="flex items-center justify-between py-2 mt-2 cursor-pointer">
            <p className="text-lg">Log In</p>
          </Link>
        </li>
        <li className="opacity-0">
          <Link to='/contact' className="flex items-center justify-between py-3 -mt-4 cursor-pointer">
            <p className="text-lg">Create Profile</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavDropDown
