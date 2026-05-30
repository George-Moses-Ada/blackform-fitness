export default function TrainerCard({ trainer }) {
  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300">
      <div className="h-64 overflow-hidden">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <h3 className="text-white font-semibold text-lg mb-1">{trainer.name}</h3>
        <p className="text-accent-lime text-sm font-medium mb-3">{trainer.specialty}</p>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{trainer.bio}</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-sm">{trainer.programs} programs</span>
          <button className="px-4 py-2 text-sm font-medium text-white border border-gray-700 rounded-full hover:border-white transition-colors">
            View Programs
          </button>
        </div>
      </div>
    </div>
  )
}
