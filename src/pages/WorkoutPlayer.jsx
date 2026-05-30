import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { exercises } from '../data/exercises'

export default function WorkoutPlayer() {
  const { id } = useParams()
  const [currentExercise, setCurrentExercise] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [timeLeft, setTimeLeft] = useState(45)
  const [completed, setCompleted] = useState(false)

  const exercise = exercises[currentExercise]
  const progress = ((currentExercise + 1) / exercises.length) * 100

  useEffect(() => {
    let interval
    if (isPlaying && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0 && isPlaying) {
      setIsPlaying(false)
      if (currentExercise < exercises.length - 1) {
        setCurrentExercise((prev) => prev + 1)
        setTimeLeft(exercises[currentExercise + 1].duration)
      } else {
        setCompleted(true)
      }
    }
    return () => clearInterval(interval)
  }, [isPlaying, timeLeft, currentExercise])

  const handleNext = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise((prev) => prev + 1)
      setTimeLeft(exercises[currentExercise + 1].duration)
      setIsPlaying(false)
    } else {
      setCompleted(true)
    }
  }

  const handlePrevious = () => {
    if (currentExercise > 0) {
      setCurrentExercise((prev) => prev - 1)
      setTimeLeft(exercises[currentExercise - 1].duration)
      setIsPlaying(false)
    }
  }

  if (completed) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-4xl font-bold text-white mb-4">Workout Complete!</h1>
          <p className="text-gray-400 mb-8">Great job! You've completed all exercises.</p>
          <Link
            to="/dashboard"
            className="inline-block px-8 py-4 text-lg font-semibold text-black bg-accent-lime rounded-lg hover:bg-accent-lime/90 transition-colors"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to={`/programs/${id}`} className="text-gray-400 hover:text-white">
            ← Exit Workout
          </Link>
        </div>

        <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 mb-6">
          <div className="relative h-64 md:h-96">
            <img
              src={exercise.image}
              alt={exercise.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl md:text-8xl font-bold text-white mb-4">
                  {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                </div>
                <div className="text-white text-xl">{exercise.name}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">{exercise.name}</h2>
              <p className="text-gray-400">
                {exercise.sets} sets × {exercise.reps} {exercise.reps === 1 ? 'hold' : 'reps'}
              </p>
            </div>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 bg-accent-lime rounded-full flex items-center justify-center hover:bg-accent-lime/90 transition-colors"
            >
              {isPlaying ? (
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Exercise {currentExercise + 1} of {exercises.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className="bg-accent-lime h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentExercise === 0}
              className="px-6 py-3 text-sm font-medium text-white border border-gray-700 rounded-full hover:border-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors"
            >
              {currentExercise === exercises.length - 1 ? 'Complete' : 'Next'}
            </button>
          </div>
        </div>

        {currentExercise < exercises.length - 1 && (
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-white font-semibold mb-4">Next Exercise</h3>
            <div className="flex items-center">
              <img
                src={exercises[currentExercise + 1].image}
                alt={exercises[currentExercise + 1].name}
                className="w-20 h-20 rounded-lg object-cover mr-4"
              />
              <div>
                <div className="text-white font-medium">{exercises[currentExercise + 1].name}</div>
                <div className="text-gray-400 text-sm">
                  {exercises[currentExercise + 1].sets} sets × {exercises[currentExercise + 1].reps} reps
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
