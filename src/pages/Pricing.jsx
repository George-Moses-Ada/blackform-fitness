import { useState } from 'react'
import PricingCard from '../components/PricingCard'

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: 'Starter',
      monthly: 19,
      yearly: 190,
      features: [
        'Access to beginner programs',
        'Basic workout tracking',
        'Limited nutrition guides',
        'Community access'
      ]
    },
    {
      name: 'Pro',
      monthly: 39,
      yearly: 390,
      features: [
        'All workout programs',
        'Full progress dashboard',
        'Complete nutrition guides',
        'Trainer recommendations',
        'Priority support'
      ]
    },
    {
      name: 'Elite',
      monthly: 79,
      yearly: 790,
      features: [
        'Everything in Pro',
        'Personalized training plan',
        'Advanced analytics',
        '1-on-1 coaching session',
        'Priority support',
        'Exclusive content'
      ]
    }
  ]

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">Choose Your Plan</h1>
        <p className="text-gray-400 mb-8 text-center max-w-2xl mx-auto">
          Invest in your health with a plan that fits your goals and budget.
        </p>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 rounded-full p-1 border border-gray-800 inline-flex">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                !isYearly ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                isYearly ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly <span className="text-accent-lime text-xs">Save 17%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              isYearly={isYearly}
              isPopular={index === 1}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-left">
              <h3 className="text-white font-semibold mb-2">Can I cancel my subscription anytime?</h3>
              <p className="text-gray-400 text-sm">Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-left">
              <h3 className="text-white font-semibold mb-2">Do you offer a free trial?</h3>
              <p className="text-gray-400 text-sm">Yes, we offer a 7-day free trial on all plans so you can experience BLACKFORM before committing.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-left">
              <h3 className="text-white font-semibold mb-2">What equipment do I need?</h3>
              <p className="text-gray-400 text-sm">We have programs for all equipment levels - from bodyweight-only to full gym setups. Each program lists required equipment.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-left">
              <h3 className="text-white font-semibold mb-2">Can I switch programs?</h3>
              <p className="text-gray-400 text-sm">Absolutely! You can switch between any programs in your plan at any time without additional cost.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
