import { Link } from 'remix'

function SubMenu({onClick}) {
  return (
    <ul className=''>
      <li className="px-6 py-2 dark:text-white">
        <Link to='/shows' onClick={onClick}>All</Link>
      </li>
      <li className="px-6 py-2 dark:text-white">
        <Link to='/focus' onClick={onClick}>Focus</Link>
      </li>
      <li className="px-6 pt-2 pb-4 border-b dark:text-white">
        <Link to='/ages' onClick={onClick}>Ages</Link>
      </li>
    </ul>
  )
}

export default SubMenu