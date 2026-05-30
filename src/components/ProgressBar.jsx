export default function ProgressBar({ progress, label }) {
  return (
    <div className="w-full">
      {label && <p className="text-gray-400 text-sm mb-2">{label}</p>}
      <div className="w-full bg-gray-800 rounded-full h-2">
        <div
          className="bg-accent-lime h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
