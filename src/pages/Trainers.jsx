import TrainerCard from '../components/TrainerCard'
import { trainers } from '../data/trainers'

export default function Trainers() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-4">Our Trainers</h1>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Meet our expert fitness professionals dedicated to helping you achieve your goals.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </div>
    </div>
  )
}
