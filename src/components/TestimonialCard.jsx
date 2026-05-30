export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-white font-semibold">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm">{testimonial.location}</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm mb-4">"{testimonial.text}"</p>
      <span className="text-accent-lime text-xs font-medium">{testimonial.program}</span>
    </div>
  )
}
