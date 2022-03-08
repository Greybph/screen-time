import {Link} from 'remix'
import {useState, useEffect} from 'react'
import {CgController, CgInfo, CgChevronDown, CgChevronRight, CgSearch} from 'react-icons/cg'
import {RiMovie2Line} from 'react-icons/ri'
import {FaRegLightbulb} from 'react-icons/fa'
import SearchBar from './SearchBar'

function NavList({darkMode, shows}) {
  const [openSearch, setOpenSearch] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 1023) {
        setOpenSearch(false)
      }
    }) 
  
    return window.removeEventListener('resize', () => {
      if (window.innerWidth <= 1023) {
        setOpenSearch(false)
      }})
  },[])

  return (
    <>
      <ul className='items-center hidden transition-colors duration-700 delay-500 px-2 tracking-wide -z-20 text-slate-900 dark:text-white lg:flex' >
        <li className='mr-10 group'>
          <Link to='/dashboard' className="flex items-center justify-center">
            <CgController className="text-4xl rotate-45"/>
            <span className="px-2 text-lg group-hover:border-b dark:border-white border-slate-900">Dashboard</span>
          </Link>
        </li>
        <li className='mr-10 group'>
          <Link to='/shows' className="flex items-center justify-center">
            <RiMovie2Line className="text-4xl"/>
            <span className="px-2 text-lg group-hover:border-b dark:border-white border-slate-900">Shows</span>
          </Link>
        </li>
        <li className='mr-8 group'>
          <Link to='/about' className="flex items-center justify-center">
            <CgInfo className="text-4xl"/>
            <span className="px-2 text-lg group-hover:border-b dark:border-white border-slate-900">About</span>
          </Link>
        </li>
        
        <div className='relative px-6 py-2 rounded-md cursor-pointer group bg-emerald-300'>
          <div className='flex items-center justify-between text-slate-900'>
            <span className='pr-4 font-bold'>Account</span>
            <CgChevronDown className='duration-300 group-hover:rotate-180'/>
          </div>
          <div className='absolute left-0 w-full px-6 bg-emerald-300 rounded-b-md'>
            <div className='flex-col justify-start hidden text-slate-900 group-hover:flex'>
              <Link to='/login' className='py-2 hover:scale-110'>Login</Link>
              <Link to='/register' className='pb-4 hover:scale-110'>Sign-Up</Link>
            </div>
          </div>
        </div>
        
        <button className='mx-4 -z-10'>
          <CgSearch className='text-xl' onClick={() => setOpenSearch(true)} />
        </button>
        
        <button onClick={darkMode} className="p-2 mr-2 bg-gray-100 transition-colors duration-700 delay-500 rounded-full dark:bg-slate-900">
          <FaRegLightbulb title="Dark/Light" className="text-2xl transition-colors duration-700 delay-500 dark:text-yellow-300 text-slate-900"/>
        </button>
      </ul>
      {openSearch && <SearchBar shows={shows} onClick={() => setOpenSearch(false)} />}
    </>
  )
}

export default NavList