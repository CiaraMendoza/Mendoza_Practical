import { Link } from 'react-router-dom'
import Button from './Button'

export default function UserCard({ id, name, email, company, isFavorite, onToggleFavorite }) {
  return (
    <div className="border rounded-lg p-4 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-sm">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{email}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{company}</p>
      <div className="flex items-center gap-3">
        <Link to={`/users/${id}`} className="text-indigo-600 dark:text-indigo-400 underline text-sm">
          View Details
        </Link>
        <Button
          label={isFavorite ? 'Remove Favorite' : 'Add Favorite'}
          variant={isFavorite ? 'danger' : 'primary'}
          onClick={onToggleFavorite}
        />
      </div>
    </div>
  )
}
