import {Link, useTransition} from 'remix'
import {CgChevronRight} from 'react-icons/cg'

function DiscoverBlock() {
  const transition = useTransition()
  
  return (
    <Link 
        className='flex items-center justify-between px-3 py-3 bg-slate-300'
        to='/shows'
      >
      <span className='text-xl text-slate-900'>Discover</span>
      <CgChevronRight className={`${transition.state === 'loading' && 'animate-bounce'} text-2xl text-slate-900`} />
    </Link>
  )
}

export default DiscoverBlock