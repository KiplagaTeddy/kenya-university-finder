import type { ReactNode } from 'react'

export function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function highlightMatch(text: string, searchTerm: string): ReactNode {  if (!searchTerm.trim()) return text

  const escapedTerm = escapeRegExp(searchTerm)
  const regex = new RegExp(`(${escapedTerm})`, 'gi')
  const parts = text.split(regex)

  return parts.map((part, index) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? (
      <mark key={index} className="search-highlight">{part}</mark>
    ) : (
      part
    )
  )
}