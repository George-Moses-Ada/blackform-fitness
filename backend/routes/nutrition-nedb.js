const express = require('express');
const router = express.Router();

// Mock data
const recipes = [
  {
    _id: '1',
    title: 'Protein Power Bowl',
    description: 'High-protein meal perfect for post-workout recovery.',
    category: 'Lunch',
    calories: 450,
    protein: 35,
    carbs: 40,
    fat: 15,
    prepTime: '15 min',
    ingredients: ['Grilled chicken breast', 'Quinoa', 'Avocado', 'Cherry tomatoes', 'Olive oil'],
    instructions: ['Cook quinoa according to package', 'Grill chicken and slice', 'Combine all ingredients', 'Drizzle with olive oil'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
    tags: ['high-protein', 'post-workout']
  },
  {
    _id: '2',
    title: 'Green Smoothie',
    description: 'Nutrient-packed smoothie for a quick energy boost.',
    category: 'Smoothie',
    calories: 280,
    protein: 15,
    carbs: 45,
    fat: 8,
    prepTime: '5 min',
    ingredients: ['Spinach', 'Banana', 'Greek yogurt', 'Almond milk', 'Chia seeds'],
    instructions: ['Blend all ingredients until smooth', 'Add ice if desired', 'Serve immediately'],
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&q=80',
    tags: ['quick', 'healthy']
  },
  {
    _id: '3',
    title: 'Overnight Oats',
    description: 'Easy breakfast that prepares itself overnight.',
    category: 'Breakfast',
    calories: 350,
    protein: 12,
    carbs: 55,
    fat: 10,
    prepTime: '5 min',
    ingredients: ['Rolled oats', 'Almond milk', 'Chia seeds', 'Berries', 'Honey'],
    instructions: ['Mix oats, milk, and chia seeds', 'Refrigerate overnight', 'Top with berries and honey'],
    image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=400&q=80',
    tags: ['easy', 'meal-prep']
  },
  {
    _id: '4',
    title: 'Grilled Salmon',
    description: 'Omega-rich fish with vegetables for a healthy dinner.',
    category: 'Dinner',
    calories: 420,
    protein: 40,
    carbs: 20,
    fat: 22,
    prepTime: '25 min',
    ingredients: ['Salmon fillet', 'Asparagus', 'Lemon', 'Olive oil', 'Garlic'],
    instructions: ['Season salmon with lemon and garlic', 'Grill for 12-15 minutes', 'Serve with grilled asparagus'],
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80',
    tags: ['high-protein', 'omega-3']
  }
];

// Get all recipes
router.get('/', (req, res) => {
  const { category } = req.query;
  let filtered = recipes;

  if (category) {
    filtered = filtered.filter(r => r.category === category);
  }

  res.json(filtered);
});

// Get single recipe
router.get('/:id', (req, res) => {
  const recipe = recipes.find(r => r._id === req.params.id);
  
  if (!recipe) {
    return res.status(404).json({ message: 'Recipe not found' });
  }

  res.json(recipe);
});

module.exports = router;
