import {Link, useTransition} from 'remix'
import {CgChevronRight} from 'react-icons/cg'

function LinkBlock({title, to}) {
  const transition = useTransition()
  
  return (
    <Link 
        className='flex items-center justify-between px-3 py-3 mt-4 bg-slate-300'
        to={to}
      >
      <span className='text-xl text-slate-900'>{title}</span>
      <CgChevronRight className={`${transition.state === 'loading' && 'animate-bounce'} text-2xl text-slate-900`} />
    </Link>
  )
}

export default LinkBlock