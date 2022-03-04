import { Link } from 'remix'

function SubMenu({onClick}) {
  return (
    <ul>
      <li className="px-6 py-2 text-md text-slate-900">
        <Link to='/shows' onClick={onClick}>All</Link>
      </li>
      <li className="px-6 py-2 text-md text-slate-900">
        <Link to='/focus' onClick={onClick}>Focus</Link>
      </li>
      <li className="px-6 py-2 border-b text-md text-slate-900">
        <Link to='/ages' onClick={onClick}>Ages</Link>
      </li>
    </ul>
  )
}

export default SubMenu