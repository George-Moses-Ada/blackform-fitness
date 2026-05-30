export default function PricingCard({ plan, isYearly, isPopular }) {
  const monthlyPrice = plan.monthly
  const yearlyPrice = plan.yearly
  const price = isYearly ? yearlyPrice : monthlyPrice
  const period = isYearly ? '/year' : '/month'

  return (
    <div className={`bg-gray-900 rounded-2xl p-8 border ${
      isPopular ? 'border-accent-lime' : 'border-gray-800'
    } hover:border-gray-700 transition-all duration-300 relative`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="px-4 py-1 bg-accent-lime text-black text-xs font-bold rounded-full">
            MOST POPULAR
          </span>
        </div>
      )}
      <h3 className="text-white font-semibold text-xl mb-2">{plan.name}</h3>
      <div className="mb-6">
        <span className="text-white text-4xl font-bold">${price}</span>
        <span className="text-gray-400 text-sm">{period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-accent-lime mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 text-sm font-medium rounded-full transition-colors ${
        isPopular
          ? 'bg-accent-lime text-black hover:bg-accent-lime/90'
          : 'bg-white text-black hover:bg-gray-200'
      }`}>
        Get Started
      </button>
    </div>
  )
}
