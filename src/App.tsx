import { useState } from 'react'
import { universities, type University } from './data/universities'
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const [countyFilter, setCountyFilter] = useState('All')
  const [typeFilter, setTypeFilter] = useState('All')

  const counties = ['All', ...Array.from(new Set(universities.map(u => u.county))).sort()]
  const types = ['All', 'Public', 'Private', 'Technical']

  const filtered: University[] = universities.filter(u => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.courses.some(c => c.toLowerCase().includes(search.toLowerCase()))
    const matchesCounty = countyFilter === 'All' || u.county === countyFilter
    const matchesType = typeFilter === 'All' || u.type === typeFilter
    return matchesSearch && matchesCounty && matchesType
  })

  return (
    <div className="app">

      <header className="header">
        <h1>🎓 Kenya University Finder</h1>
        <p>Search universities by name, course, county or type</p>
      </header>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by name or course e.g. Computer Science"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-input"
        />
        <div className="filters">
          <select
            value={countyFilter}
            onChange={e => setCountyFilter(e.target.value)}
            className="filter-select"
          >
            {counties.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <select
            value={typeFilter}
            onChange={e => setTypeFilter(e.target.value)}
            className="filter-select"
          >
            {types.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <p className="results-count">{filtered.length} universities found</p>

      <div className="grid">
        {filtered.map(u => (
          <div key={u.id} className="card">
            <div className="card-header">
              <h2>{u.name}</h2>
              <span className={`badge badge-${u.type.toLowerCase()}`}>{u.type}</span>
            </div>
            <p className="county">📍 {u.county} County</p>
            <p className="fees">Fees: Ksh {u.fees_per_year.toLocaleString()} / year</p>
            <p className="cutoff">Min cutoff: {u.cutoff} points</p>
            <div className="courses">
              {u.courses.map(c => (
                <span key={c} className="course-tag">{c}</span>
              ))}
            </div>
            <a href={u.website} target="_blank" rel="noreferrer" className="visit-link">
              Visit website →
            </a>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="empty">
          <p>No universities match your search. Try different filters.</p>
        </div>
      )}

    </div>
  )
}

export default App