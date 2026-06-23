import { useParams, Link } from 'react-router-dom'
import { universities } from '../data/universities'
import '../App.css'

function UniversityDetailPage() {
  const { id } = useParams()
  const university = universities.find(u => u.id === Number(id))

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

      <a href={university.website} target="_blank" rel="noreferrer" className="visit-link">
        Visit website →
      </a>
    </div>
  )
}

export default UniversityDetailPage