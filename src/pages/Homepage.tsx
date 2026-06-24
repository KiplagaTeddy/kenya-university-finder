import { useState } from 'react'
import { Link } from 'react-router-dom'
import { universities, type University } from '../data/universities'
import { highlightMatch } from '../utils/highlightMatch'
import '../App.css'

function HomePage() {
  const [search, setSearch] = useState('')
  const [countyFilter, setCountyFilter] = useState('All')
  const [typeFilter, setTypeFilter] = useState('All')
  const [sortBy, setSortBy] = useState('default')

  const counties = ['All', ...Array.from(new Set(universities.map(u => u.county))).sort()]
  const types = ['All', 'Public', 'Private', 'Technical']
  

  const filtered: University[] = universities.filter(u => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.county.toLowerCase().includes(search.toLowerCase()) ||
      u.courses.some(c => c.toLowerCase().includes(search.toLowerCase()))
    const matchesCounty = countyFilter === 'All' || u.county === countyFilter
    const matchesType = typeFilter === 'All' || u.type === typeFilter
    return matchesSearch && matchesCounty && matchesType
  })

  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'fees-low':
        return a.fees_per_year - b.fees_per_year
      case 'fees-high':
        return b.fees_per_year - a.fees_per_year
      case 'cutoff-low':
        return a.cutoff - b.cutoff
      case 'cutoff-high':
        return b.cutoff - a.cutoff
      default:
        return 0
    }
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
            value={sortBy}
              onChange={e => setSortBy(e.target.value)}
            className="filter-select"
>
            <option value="default">Sort: Default</option>
            <option value="name">Name (A-Z)</option>
            <option value="fees-low">Fees: Low to High</option>
            <option value="fees-high">Fees: High to Low</option>
            <option value="cutoff-low">Cutoff: Low to High</option>
            <option value="cutoff-high">Cutoff: High to Low</option>
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

      <p className="results-count">{sorted.length} universities found</p>

      <div className="grid">
        {sorted.map(u => (
          <Link key={u.id} to={`/university/${u.id}`} className="card-link">
            <div className="card">
              <div className="card-header">
                <h2>{highlightMatch(u.name, search)}</h2>
                <span className={`badge badge-${u.type.toLowerCase()}`}>{u.type}</span>
              </div>
              <p className="county">📍 {highlightMatch(u.county, search)}</p>
              <p className="fees">Fees: Ksh {u.fees_per_year.toLocaleString()} / year</p>
              <p className="cutoff">Min cutoff: {u.cutoff} points</p>
              <div className="courses">
                {u.courses.map(c => (
                  <span key={c} className="course-tag">{highlightMatch(c, search)}</span>
                ))}
              </div>
            </div>
          </Link>
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

export default HomePage