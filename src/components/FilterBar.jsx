import { useState } from 'react'

export default function FilterBar({ onFilter }) {
  const [selectedGoal, setSelectedGoal] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const [selectedDuration, setSelectedDuration] = useState('All')

  const goals = ['All', 'Strength', 'Fat Loss', 'Mobility', 'Beginner', 'Home', 'Gym']
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced']
  const durations = ['All', '2 weeks', '4 weeks', '8 weeks', '12 weeks']

  const handleFilterChange = () => {
    onFilter({
      goal: selectedGoal,
      difficulty: selectedDifficulty,
      duration: selectedDuration
    })
  }

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-gray-400 text-sm mb-2">Goal</label>
          <select
            value={selectedGoal}
            onChange={(e) => { setSelectedGoal(e.target.value); handleFilterChange() }}
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white text-sm focus:border-gray-600 focus:outline-none"
          >
            {goals.map((goal) => (
              <option key={goal} value={goal}>{goal}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-2">Difficulty</label>
          <select
            value={selectedDifficulty}
            onChange={(e) => { setSelectedDifficulty(e.target.value); handleFilterChange() }}
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white text-sm focus:border-gray-600 focus:outline-none"
          >
            {difficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>{difficulty}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-2">Duration</label>
          <select
            value={selectedDuration}
            onChange={(e) => { setSelectedDuration(e.target.value); handleFilterChange() }}
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white text-sm focus:border-gray-600 focus:outline-none"
          >
            {durations.map((duration) => (
              <option key={duration} value={duration}>{duration}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
