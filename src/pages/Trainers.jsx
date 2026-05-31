import { useState, useEffect } from 'react'
import TrainerCard from '../components/TrainerCard'
import { trainersAPI } from '../services/api'

export default function Trainers() {
  const [trainers, setTrainers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTrainers()
  }, [])

  const fetchTrainers = async () => {
    try {
      const data = await trainersAPI.getAll()
      setTrainers(data)
    } catch (error) {
      console.error('Error fetching trainers:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-4">Our Trainers</h1>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Meet our expert fitness professionals dedicated to helping you achieve your goals.
        </p>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Loading trainers...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainers.map((trainer) => (
              <TrainerCard key={trainer._id} trainer={trainer} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
