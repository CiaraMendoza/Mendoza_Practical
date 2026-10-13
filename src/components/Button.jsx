export default function Button({ label, onClick, variant = 'primary', children }) {
  const styles = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded text-sm font-medium ${styles[variant] ?? styles.primary}`}
    >
      {children}
      {label}
    </button>
  )
}
