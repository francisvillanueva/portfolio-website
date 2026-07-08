import { useEffect, useState } from 'react'
import { fetchParts, TABLE_MAP, ID_KEY } from '../lib/partsApi'

export default function PartPicker() {
  const [category, setCategory] = useState('cpu')
  const [parts, setParts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetchParts(category)
      .then(setParts)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [category])

  return (
    <div>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        {Object.keys(TABLE_MAP).map(c => (
          <option key={c} value={c}>{c.toUpperCase()}</option>
        ))}
      </select>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!loading && !error && (
        <ul>
          {parts.map(p => (
            <li key={p[ID_KEY[category]]}>
              {p.Brand} {p.Model}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}