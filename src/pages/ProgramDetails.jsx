import { useParams, Link } from 'react-router-dom'
import { programs } from '../data/programs'

export default function ProgramDetails() {
  const { id } = useParams()
  const program = programs.find(p => p.id === parseInt(id))

  if (!program) {
    return (
      <div className="pt-24 pb-20 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Program Not Found</h1>
        <Link to="/programs" className="text-accent-lime hover:underline">
          Back to Programs
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/programs" className="text-gray-400 hover:text-white mb-4 inline-block">
            ← Back to Programs
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-96 object-cover rounded-2xl mb-6"
            />
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-4 py-2 bg-gray-900 rounded-full text-sm text-white border border-gray-800">
                {program.goal}
              </span>
              <span className="px-4 py-2 bg-gray-900 rounded-full text-sm text-white border border-gray-800">
                {program.difficulty}
              </span>
              <span className="px-4 py-2 bg-gray-900 rounded-full text-sm text-white border border-gray-800">
                {program.duration}
              </span>
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold text-white mb-4">{program.title}</h1>
            <p className="text-gray-400 mb-6">{program.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                <div className="text-gray-400 text-sm mb-1">Duration</div>
                <div className="text-white font-semibold">{program.duration}</div>
              </div>
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                <div className="text-gray-400 text-sm mb-1">Workouts</div>
                <div className="text-white font-semibold">{program.workouts} sessions</div>
              </div>
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                <div className="text-gray-400 text-sm mb-1">Difficulty</div>
                <div className="text-white font-semibold">{program.difficulty}</div>
              </div>
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                <div className="text-gray-400 text-sm mb-1">Goal</div>
                <div className="text-white font-semibold">{program.goal}</div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-white font-semibold mb-2">Equipment Needed</h3>
              <div className="flex flex-wrap gap-2">
                {program.equipment.map((item, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to={`/workout/${program.id}`}
              className="inline-block px-8 py-4 text-lg font-semibold text-black bg-accent-lime rounded-full hover:bg-accent-lime/90 transition-colors"
            >
              Start Program
            </Link>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Weekly Schedule</h2>
          <div className="grid md:grid-cols-7 gap-4">
            {program.schedule.map((day, index) => (
              <div key={index} className="bg-black rounded-xl p-4 border border-gray-800">
                <div className="text-accent-lime text-sm font-medium mb-2">{day.day}</div>
                <div className="text-white text-sm">{day.workout}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Your Trainer</h2>
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=100&q=80"
              alt="Trainer"
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="text-white font-semibold">Maya Cole</h3>
              <p className="text-gray-400 text-sm">Strength & Conditioning Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
