import { useEffect, useState } from 'react'
import { users as usersData } from '../data/users'
import UserCard from '../components/UserCard'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

export default function Users({ favorites, onToggleFavorite }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(usersData)
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const filtered = users.filter((u) => u.name.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    document.title = `Users (${filtered.length})`
  }, [filtered.length])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name..."
        className="border rounded px-3 py-2 mb-4 w-full max-w-sm text-black"
      />
      {loading ? (
        <Loader />
      ) : filtered.length === 0 ? (
        <ErrorMessage message="No users found." />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((u) => (
            <UserCard
              key={u.id}
              id={u.id}
              name={u.name}
              email={u.email}
              company={u.company}
              isFavorite={favorites.includes(u.id)}
              onToggleFavorite={() => onToggleFavorite(u.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
