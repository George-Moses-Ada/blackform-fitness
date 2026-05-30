export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <h3 className="text-white font-semibold text-lg mb-3">{recipe.name}</h3>
        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
          <span>{recipe.calories} cal</span>
          <span>•</span>
          <span>{recipe.protein}g protein</span>
          <span>•</span>
          <span>{recipe.prepTime}</span>
        </div>
        <button className="w-full py-3 text-sm font-medium text-white border border-gray-700 rounded-full hover:border-white transition-colors">
          View Recipe
        </button>
      </div>
    </div>
  )
}
