import { useState, useEffect } from 'react'
import ProgramCard from '../components/ProgramCard'
import FilterBar from '../components/FilterBar'
import { programsAPI } from '../services/api'

export default function Programs() {
  const [programs, setPrograms] = useState([])
  const [filteredPrograms, setFilteredPrograms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPrograms()
  }, [])

  const fetchPrograms = async () => {
    try {
      const data = await programsAPI.getAll()
      setPrograms(data)
      setFilteredPrograms(data)
    } catch (error) {
      console.error('Error fetching programs:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleFilter = (filters) => {
    let filtered = programs

    if (filters.goal !== 'All') {
      filtered = filtered.filter(p => p.category === filters.goal)
    }
    if (filters.difficulty !== 'All') {
      filtered = filtered.filter(p => p.difficulty === filters.difficulty)
    }
    if (filters.duration !== 'All') {
      filtered = filtered.filter(p => p.duration === filters.duration)
    }

    setFilteredPrograms(filtered)
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-4">Programs</h1>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Choose from our expert-designed fitness programs tailored to your goals and experience level.
        </p>

        <FilterBar onFilter={handleFilter} />

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Loading programs...</p>
          </div>
        ) : filteredPrograms.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program._id} program={program} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No programs match your filters. Try adjusting your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
