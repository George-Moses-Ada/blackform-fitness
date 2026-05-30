import RecipeCard from '../components/RecipeCard'
import { recipes } from '../data/recipes'

export default function Nutrition() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-4">Nutrition</h1>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Fuel your body with delicious, macro-friendly meals designed to support your fitness goals.
        </p>

        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Meal Guidance</h2>
          <p className="text-gray-400 mb-6">
            Proper nutrition is essential for achieving your fitness goals. Our meal plans are designed by nutrition experts to provide the right balance of macronutrients for optimal performance and recovery.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black rounded-xl p-6 border border-gray-800">
              <div className="text-3xl mb-3">🥗</div>
              <h3 className="text-white font-semibold mb-2">Balanced Macros</h3>
              <p className="text-gray-400 text-sm">Optimal protein, carbs, and fats for your goals.</p>
            </div>
            <div className="bg-black rounded-xl p-6 border border-gray-800">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="text-white font-semibold mb-2">Meal Timing</h3>
              <p className="text-gray-400 text-sm">Strategic eating around your workouts.</p>
            </div>
            <div className="bg-black rounded-xl p-6 border border-gray-800">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-white font-semibold mb-2">Easy Prep</h3>
              <p className="text-gray-400 text-sm">Simple recipes that fit your lifestyle.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Featured Recipes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Nutrition Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent-lime rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-black font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Prioritize Protein</h3>
                  <p className="text-gray-400 text-sm">Aim for 1.6-2.2g per kg of body weight for muscle building.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent-lime rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-black font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Stay Hydrated</h3>
                  <p className="text-gray-400 text-sm">Drink at least 8 glasses of water daily for optimal performance.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent-lime rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-black font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Time Your Meals</h3>
                  <p className="text-gray-400 text-sm">Eat 2-3 hours before workouts and within 1 hour after.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent-lime rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-black font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Consistency Matters</h3>
                  <p className="text-gray-400 text-sm">Stick to your nutrition plan for sustainable results.</p>
                </div>
              </div>
            </div>
          </div>
          <button className="mt-8 px-8 py-4 text-lg font-semibold text-black bg-accent-lime rounded-full hover:bg-accent-lime/90 transition-colors">
            Build Your Meal Plan
          </button>
        </div>
      </div>
    </div>
  )
}
