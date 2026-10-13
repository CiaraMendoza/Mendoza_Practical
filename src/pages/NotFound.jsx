import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">404 Not Found</h1>
      <Link to="/" className="text-indigo-600 dark:text-indigo-400 underline">Go home</Link>
    </div>
  )
}
