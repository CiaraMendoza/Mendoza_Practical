import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Welcome Team Directory</h1>
      <p className="mb-4">Find your teammates, view their details, and mark your favorites.</p>
      <Link to="/users" className="text-indigo-600 dark:text-indigo-400 underline">Browse users</Link>
    </div>
  )
}
