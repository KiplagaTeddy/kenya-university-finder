import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { type University } from '../data/universities'
import '../App.css'

function UniversityDetailPage() {
  const { id } = useParams()
  const [university, setUniversity] = useState<University | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/universities.json')
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load universities: ${res.status}`)
        }
        return res.json()
      })
      .then((data: University[]) => {
        const found = data.find(u => u.id === Number(id))
        setUniversity(found ?? null)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <div className="app">
        <p className="loading">Loading university...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="app">
        <p className="error">⚠️ {error}</p>
        <Link to="/" className="back-link">← Back to search</Link>
      </div>
    )
  }

  if (!university) {
    return (
      <div className="app">
        <p>University not found.</p>
        <Link to="/">← Back to search</Link>
      </div>
    )
  }

  return (
    <div className="app">
      <Link to="/" className="back-link">← Back to search</Link>

      <div className="card-header">
        <h1>{university.name}</h1>
        <span className={`badge badge-${university.type.toLowerCase()}`}>
          {university.type}
        </span>
      </div>

      <p className="county">📍 {university.county} County</p>
      <p className="fees">Fees: Ksh {university.fees_per_year.toLocaleString()} / year</p>
      <p className="cutoff">Min cutoff: {university.cutoff} points</p>

      <h3>Courses offered</h3>
      <div className="courses">
        {university.courses.map(c => (
          <span key={c} className="course-tag">{c}</span>
        ))}
      </div>

      {university.website ? (
        <a href={university.website} target="_blank" rel="noreferrer" className="visit-link">
          Visit website →
        </a>
      ) : (
        <span className="visit-link-unavailable">Website not yet available</span>
      )}
    </div>
  )
}

export default UniversityDetailPage