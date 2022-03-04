import { Form, Link, useTransition } from "remix"
import gsap from 'gsap'
import {useEffect, useRef, useContext, useState} from 'react'
import {CgController, CgChevronRight, CgChevronDown, CgSun, CgSupport} from 'react-icons/cg'
import {UserContext} from '../root'
import { CgSearch } from "react-icons/cg"
import ShowDisplayCard from './ShowDisplayCard'
import SubMenu from './Submenu'

function NavDropDown({isOpen, onNavigate, shows}) {
  const transition = useTransition()
  const userContext = useContext(UserContext)
  const [filteredTitles, setFilteredTitles] = useState([])
  const [showSubMenu, setShowSubMenu] = useState(false)
  const state = transition.state === "loading" ? "loading" : 'idle'
  const navRef = useRef()
  const listRef = useRef()
  const inputRef = useRef()

  useEffect(() => {
    navRef.current.scrollTop = 0
   
    if (!isOpen) {
      inputRef.current.value = ''
      setFilteredTitles([])
      setShowSubMenu(false)
    }
    
  },[isOpen])

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

  function filterShows(e) {
    if (e.target.value == '') {
      return setFilteredTitles([])
    }
    let matches = shows.filter(t => {
     return t.title.toLowerCase().match(e.target.value.toLowerCase()) ||
      t.focus.some(f => f.includes(e.target.value.toLowerCase())) ||
      t.ages.includes(Number(e.target.value))
    })
    setFilteredTitles([...matches])
  }

  return (
    <div ref={navRef} className={`${filteredTitles.length && 'overflow-y-scroll'} -translate-y-full h-full fixed z-40 duration-500 top-0 flex-col ease-out w-full p-5 bg-white dark:bg-slate-800`}>
      <ul ref={listRef} className="w-full px-4 mt-16 translate-y-20 dark:text-white">
      <li className="relative mb-7">
      <CgSearch className="absolute text-2xl text-black/[.5] top-1/4 left-5" />
      <input 
        type='text'
        ref={inputRef} 
        className="w-full h-10 pl-12 text-black placeholder-black/[.8] rounded-full outline-none bg-stone-200"
        placeholder="Search"
        onChange={filterShows} 
      />
    </li>
        <li title="Dashboard" className="pr-3 opacity-0">
          <Link to='/dashboard' onClick={onNavigate} className="flex items-center justify-between py-3 border-b cursor-pointer">
            <span className="flex items-center justify-center">
              <CgController className="text-4xl"/>
              <span className="pl-2 text-lg">Dashboard</span>
            </span>
            <CgChevronRight className="mr-4"/>
          </Link>
        </li>
        <li title="Shows" className="pr-3 opacity-0">
          <div 
            onClick={() => setShowSubMenu(!showSubMenu)} 
            className={`${showSubMenu ? '' : 'border-b'} flex items-center justify-between py-3 cursor-pointer`}
          >
            <span className="flex items-center justify-center">
              <CgSun className="text-4xl"/>
              <span className="pl-2 text-lg">Shows</span>
            </span>
            <CgChevronDown className={`${showSubMenu ? 'rotate-180' : ''} transition-transform duration-300 mr-4`} />
          </div>
          {showSubMenu && <SubMenu onClick={() => {
            onNavigate()
            setShowSubMenu(false)
          }} />}
        </li>
        <li title="Learn More" className="pr-3 opacity-0">
          <Link to='/about' onClick={onNavigate} className="flex items-center justify-between py-3 border-b cursor-pointer">
            <span className="flex items-center justify-center">
              <CgController className="text-4xl"/>
              <span className="pl-2 text-lg">About</span>
            </span>
            <CgChevronRight className="mr-4"/>
          </Link>
        </li>

        {userContext ? (
          <li title="Logout" className="opacity-0">
          <Form action='/logout' method='post'
            onClick={onNavigate}
            className="flex items-center justify-between py-2 mt-2 cursor-pointer">
            <button type='submit'>
              <span className="text-lg">Logout</span>
            </button>
          </Form>
        </li>
        ) : (
        <>
          <li title="Login" className="opacity-0">
            <Link to='/login'
              onClick={onNavigate}
              className="flex items-center justify-between py-2 mt-2 cursor-pointer">
              <span className="text-lg">Login</span>
            </Link>
          </li>
          <li title='Register' className="opacity-0">
            <Link to='/register' 
              onClick={onNavigate}
              className="flex items-center justify-between py-3 -mt-4 cursor-pointer">
              <span className="text-lg">Create Profile</span>
            </Link>
          </li>
        </>
        )}
      </ul>

      {filteredTitles.length ? (
        filteredTitles.map(t => 
          <ShowDisplayCard show={t} onNavigate={onNavigate} likeButton={false} key={t._id} />
        )   
      ) : ''}

    </div>
  )
}

export default NavDropDown
