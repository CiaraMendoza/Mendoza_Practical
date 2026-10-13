import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { users } from '../data/users'
import ErrorMessage from '../components/ErrorMessage'

export default function UserDetails() {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(users.find((u) => u.id === Number(id)) ?? null)
  }, [id])

  useEffect(() => {
    document.title = user ? user.name : 'User not found'
  }, [user])

  return (
  <div>
    {user ? (
      <div>
        <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Company: {user.company}</p>
        <p>Role: {user.role}</p>
      </div>
    ) : (
      <ErrorMessage message="User not found." />
    )}
    <Link to="/users" className="inline-block mt-4 text-indigo-600 dark:text-indigo-400 underline">
      Back
    </Link>
  </div>
)
}
