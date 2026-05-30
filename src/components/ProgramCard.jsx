import { Link } from 'react-router-dom'

export default function ProgramCard({ program }) {
  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
            {program.goal}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-white font-semibold text-lg mb-2">{program.title}</h3>
        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
          <span>{program.difficulty}</span>
          <span>•</span>
          <span>{program.duration}</span>
          <span>•</span>
          <span>{program.workouts} workouts</span>
        </div>
        <Link
          to={`/programs/${program.id}`}
          className="block w-full py-3 text-center text-sm font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors"
        >
          View Program
        </Link>
      </div>
    </div>
  )
}
