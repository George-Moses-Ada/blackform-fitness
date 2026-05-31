import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProgramCard from '../components/ProgramCard'
import TestimonialCard from '../components/TestimonialCard'
import { programsAPI } from '../services/api'
import { testimonials } from '../data/testimonials'

export default function Home() {
  const [featuredPrograms, setFeaturedPrograms] = useState([])

  useEffect(() => {
    fetchPrograms()
  }, [])

  const fetchPrograms = async () => {
    try {
      const data = await programsAPI.getAll()
      setFeaturedPrograms(data.slice(0, 4))
    } catch (error) {
      console.error('Error fetching programs:', error)
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="Fitness"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            TRANSFORM YOUR <span className="text-accent-lime">BODY</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Premium fitness platform with expert-led programs, workout tracking, nutrition guidance, and a dashboard that keeps your progress visible. 
            Train smarter, achieve faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/programs"
              className="px-8 py-4 text-lg font-semibold text-black bg-accent-lime rounded-full hover:bg-accent-lime/90 transition-colors"
            >
              Start Training
            </Link>
            <Link
              to="/programs"
              className="px-8 py-4 text-lg font-semibold text-white border border-white rounded-full hover:bg-white hover:text-black transition-colors"
            >
              View Programs
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-sm">Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">Expert</div>
              <div className="text-sm">Training</div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Categories - Bento Style */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Training Categories</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Choose the path that fits your goals and start your transformation today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Large Card - Strength */}
            <Link to="/programs" className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group border border-gray-800 hover:border-accent-lime transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
                alt="Strength Training"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-2xl mb-2">Build Strength</h3>
                <p className="text-gray-300 text-sm">Expert-designed programs to build lean muscle and power</p>
              </div>
            </Link>

            {/* Small Card - Fat Loss */}
            <Link to="/programs" className="relative rounded-2xl overflow-hidden group border border-gray-800 hover:border-accent-lime transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80"
                alt="Fat Loss"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-lg">Fat Loss</h3>
                <p className="text-gray-300 text-xs">Burn calories efficiently</p>
              </div>
            </Link>

            {/* Small Card - Mobility */}
            <Link to="/programs" className="relative rounded-2xl overflow-hidden group border border-gray-800 hover:border-accent-lime transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1544367563-12123d8965cd?w=400&q=80"
                alt="Mobility"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-lg">Mobility</h3>
                <p className="text-gray-300 text-xs">Move better, feel better</p>
              </div>
            </Link>

            {/* Text Card - Beginner */}
            <Link to="/programs" className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-accent-lime transition-all duration-300 flex flex-col justify-center">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-white font-semibold text-lg mb-2">Beginner Friendly</h3>
              <p className="text-gray-400 text-sm mb-4">Perfect starting point for your fitness journey</p>
              <span className="text-accent-lime text-sm font-medium">Start Here →</span>
            </Link>

            {/* Small Card - Home Workouts */}
            <Link to="/programs" className="relative rounded-2xl overflow-hidden group border border-gray-800 hover:border-accent-lime transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=400&q=80"
                alt="Home Workouts"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-lg">Home Workouts</h3>
                <p className="text-gray-300 text-xs">Train anywhere, anytime</p>
              </div>
            </Link>

            {/* Small Card - Gym */}
            <Link to="/programs" className="relative rounded-2xl overflow-hidden group border border-gray-800 hover:border-accent-lime transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&q=80"
                alt="Gym"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-lg">Gym Power</h3>
                <p className="text-gray-300 text-xs">Maximize your gains</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">How It Works</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Simple steps to start your fitness journey with BLACKFORM.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-2xl font-bold">1</span>
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Choose Your Program</h3>
              <p className="text-gray-400">Browse our expert-designed programs and select one that matches your goals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-2xl font-bold">2</span>
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Follow the Schedule</h3>
              <p className="text-gray-400">Stick to your weekly workout plan with video-guided sessions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-2xl font-bold">3</span>
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Track Progress</h3>
              <p className="text-gray-400">Monitor your achievements and watch your body transform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-white">Featured Programs</h2>
            <Link to="/programs" className="text-accent-lime hover:underline font-medium">
              View All →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPrograms.map((program) => (
              <ProgramCard key={program._id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Why BLACKFORM */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Why BLACKFORM</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Experience the difference of premium fitness training.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-white font-semibold text-lg mb-2">Expert-Designed</h3>
              <p className="text-gray-400 text-sm">Programs created by certified fitness professionals.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-white font-semibold text-lg mb-2">Any Device</h3>
              <p className="text-gray-400 text-sm">Train anywhere on your phone, tablet, or computer.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-white font-semibold text-lg mb-2">Track Progress</h3>
              <p className="text-gray-400 text-sm">Monitor your workouts, calories, and achievements.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="text-3xl mb-4">🥗</div>
              <h3 className="text-white font-semibold text-lg mb-2">Nutrition Guides</h3>
              <p className="text-gray-400 text-sm">Meal plans and recipes to fuel your transformation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">What Members Say</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Join thousands who have transformed their lives with BLACKFORM.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Simple Pricing</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Choose the plan that fits your fitness journey.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-white font-semibold text-xl mb-2">Starter</h3>
              <div className="mb-6">
                <span className="text-white text-4xl font-bold">$19</span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-300 text-sm">✓ Beginner programs</li>
                <li className="text-gray-300 text-sm">✓ Basic tracking</li>
                <li className="text-gray-300 text-sm">✓ Limited nutrition guides</li>
              </ul>
              <Link
                to="/pricing"
                className="block w-full py-3 text-center text-sm font-medium text-white border border-gray-700 rounded-lg hover:border-white transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 border border-accent-lime relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-1 bg-accent-lime text-black text-xs font-bold rounded-full">
                  POPULAR
                </span>
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Pro</h3>
              <div className="mb-6">
                <span className="text-white text-4xl font-bold">$39</span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-300 text-sm">✓ All workout programs</li>
                <li className="text-gray-300 text-sm">✓ Full dashboard</li>
                <li className="text-gray-300 text-sm">✓ Nutrition guides</li>
                <li className="text-gray-300 text-sm">✓ Trainer recommendations</li>
              </ul>
              <Link
                to="/pricing"
                className="block w-full py-3 text-center text-sm font-medium text-black bg-accent-lime rounded-lg hover:bg-accent-lime/90 transition-colors"
              >
                Get Started
              </Link>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-white font-semibold text-xl mb-2">Elite</h3>
              <div className="mb-6">
                <span className="text-white text-4xl font-bold">$79</span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-300 text-sm">✓ Everything in Pro</li>
                <li className="text-gray-300 text-sm">✓ Personalized plan</li>
                <li className="text-gray-300 text-sm">✓ Advanced analytics</li>
                <li className="text-gray-300 text-sm">✓ Priority support</li>
              </ul>
              <Link
                to="/pricing"
                className="block w-full py-3 text-center text-sm font-medium text-white border border-gray-700 rounded-lg hover:border-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-accent-lime">Transform</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join BLACKFORM today and start your journey to a stronger, healthier you.
          </p>
          <Link
            to="/signup"
            className="inline-block px-8 py-4 text-lg font-semibold text-black bg-accent-lime rounded-full hover:bg-accent-lime/90 transition-colors"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </div>
  )
}
