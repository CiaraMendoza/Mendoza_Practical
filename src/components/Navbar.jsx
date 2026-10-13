import { NavLink } from 'react-router-dom'
import Button from './Button'

export default function Navbar({ favoritesCount, darkMode, onToggleDark }) {
  const linkClass = ({ isActive }) => (isActive ? 'font-bold underline' : 'hover:underline')
  return (
    <nav className="flex flex-wrap items-center gap-4 px-6 py-3 bg-indigo-100 dark:bg-gray-800 border-b dark:border-gray-700">
      <NavLink to="/" end className={linkClass}>Home</NavLink>
      <NavLink to="/users" className={linkClass}>Users</NavLink>
      <NavLink to="/about" className={linkClass}>About</NavLink>
      <span className="ml-auto text-sm">Favorites: {favoritesCount}</span>
      <Button label={darkMode ? 'Light Mode' : 'Dark Mode'} onClick={onToggleDark} />
    </nav>
  )
}
