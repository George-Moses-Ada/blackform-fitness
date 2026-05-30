import ProgressBar from '../components/ProgressBar'
import { programs } from '../data/programs'

export default function Dashboard() {
  const activeProgram = programs[0]

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome back</h1>
          <p className="text-gray-400">Track your progress and continue your fitness journey.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="text-gray-400 text-sm mb-2">Weekly Progress</div>
            <div className="text-3xl font-bold text-white mb-2">75%</div>
            <ProgressBar progress={75} />
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="text-gray-400 text-sm mb-2">Completed Workouts</div>
            <div className="text-3xl font-bold text-white">24</div>
            <div className="text-green-400 text-sm mt-1">+4 this week</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="text-gray-400 text-sm mb-2">Calories Burned</div>
            <div className="text-3xl font-bold text-white">8,450</div>
            <div className="text-green-400 text-sm mt-1">+1,200 this week</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="text-gray-400 text-sm mb-2">Current Streak</div>
            <div className="text-3xl font-bold text-white">12 days</div>
            <div className="text-accent-lime text-sm mt-1">🔥 Keep it up!</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-xl font-bold text-white mb-4">Current Program</h2>
            <div className="flex items-start mb-4">
              <img
                src={activeProgram.image}
                alt={activeProgram.title}
                className="w-24 h-24 rounded-lg object-cover mr-4"
              />
              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg mb-1">{activeProgram.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{activeProgram.description}</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">{activeProgram.difficulty}</span>
                  <span className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">{activeProgram.duration}</span>
                </div>
              </div>
            </div>
            <ProgressBar progress={60} label="Program Progress" />
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-xl font-bold text-white mb-4">Upcoming Workouts</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-black rounded-lg border border-gray-800">
                <div>
                  <div className="text-white font-medium text-sm">Lower Body Strength</div>
                  <div className="text-gray-500 text-xs">Today • 45 min</div>
                </div>
                <button className="px-3 py-1 text-xs font-medium text-black bg-accent-lime rounded-full hover:bg-accent-lime/90 transition-colors">
                  Start
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-black rounded-lg border border-gray-800">
                <div>
                  <div className="text-white font-medium text-sm">Core + Mobility</div>
                  <div className="text-gray-500 text-xs">Tomorrow • 30 min</div>
                </div>
                <button className="px-3 py-1 text-xs font-medium text-white border border-gray-700 rounded-full hover:border-white transition-colors">
                  View
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-black rounded-lg border border-gray-800">
                <div>
                  <div className="text-white font-medium text-sm">Upper Body Strength</div>
                  <div className="text-gray-500 text-xs">Wednesday • 50 min</div>
                </div>
                <button className="px-3 py-1 text-xs font-medium text-white border border-gray-700 rounded-full hover:border-white transition-colors">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-xl font-bold text-white mb-4">Recommended Programs</h2>
            <div className="space-y-4">
              {programs.slice(1, 4).map((program) => (
                <div key={program.id} className="flex items-center p-3 bg-black rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-16 h-16 rounded-lg object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{program.title}</h3>
                    <p className="text-gray-400 text-sm">{program.difficulty} • {program.duration}</p>
                  </div>
                  <button className="px-3 py-1 text-xs font-medium text-white border border-gray-700 rounded-full hover:border-white transition-colors">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-xl font-bold text-white mb-4">This Week's Activity</h2>
            <div className="grid grid-cols-7 gap-2">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                <div key={day} className="text-center">
                  <div className="text-gray-500 text-xs mb-2">{day}</div>
                  <div
                    className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center text-xs ${
                      index < 5
                        ? 'bg-accent-lime text-black'
                        : 'bg-gray-800 text-gray-500'
                    }`}
                  >
                    {index < 5 ? '✓' : '-'}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Total time this week</span>
                <span className="text-white font-medium">3h 45m</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-gray-400">Workouts completed</span>
                <span className="text-white font-medium">5/6</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
