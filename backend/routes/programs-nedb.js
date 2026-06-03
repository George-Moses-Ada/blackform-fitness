const express = require('express');
const router = express.Router();

// Mock data
const programs = [
  {
    _id: '1',
    title: 'Total Body Transformation',
    description: 'Complete body transformation program with strength and cardio exercises.',
    category: 'Strength',
    difficulty: 'Intermediate',
    duration: '8 weeks',
    weeks: 8,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    trainer: '1',
    rating: 4.8,
    reviews: []
  },
  {
    _id: '2',
    title: 'Fat Burn Express',
    description: 'High-intensity program designed to burn fat quickly.',
    category: 'Fat Loss',
    difficulty: 'Advanced',
    duration: '6 weeks',
    weeks: 6,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    trainer: '2',
    rating: 4.7,
    reviews: []
  },
  {
    _id: '3',
    title: 'Beginner Starter',
    description: 'Perfect program for fitness beginners to build a strong foundation.',
    category: 'Beginner',
    difficulty: 'Beginner',
    duration: '4 weeks',
    weeks: 4,
    image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?w=800&q=80',
    trainer: '3',
    rating: 4.9,
    reviews: []
  },
  {
    _id: '4',
    title: 'Home Workout Pro',
    description: 'Effective workouts you can do at home with minimal equipment.',
    category: 'Home',
    difficulty: 'Intermediate',
    duration: '6 weeks',
    weeks: 6,
    image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&q=80',
    trainer: '1',
    rating: 4.6,
    reviews: []
  },
  {
    _id: '5',
    title: 'Gym Power Builder',
    description: 'Advanced gym program for maximum muscle and strength gains.',
    category: 'Gym',
    difficulty: 'Advanced',
    duration: '12 weeks',
    weeks: 12,
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80',
    trainer: '4',
    rating: 4.8,
    reviews: []
  },
  {
    _id: '6',
    title: 'Mobility Master',
    description: 'Improve flexibility and reduce pain with targeted mobility work.',
    category: 'Mobility',
    difficulty: 'Beginner',
    duration: '4 weeks',
    weeks: 4,
    image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?w=800&q=80',
    trainer: '3',
    rating: 4.9,
    reviews: []
  }
];

// Get all programs
router.get('/', (req, res) => {
  const { category, difficulty } = req.query;
  let filtered = programs;

  if (category) {
    filtered = filtered.filter(p => p.category === category);
  }
  if (difficulty) {
    filtered = filtered.filter(p => p.difficulty === difficulty);
  }

  res.json(filtered);
});

// Get single program
router.get('/:id', (req, res) => {
  const program = programs.find(p => p._id === req.params.id);
  
  if (!program) {
    return res.status(404).json({ message: 'Program not found' });
  }

  res.json(program);
});

// Enroll in program
router.post('/:id/enroll', (req, res) => {
  res.json({ message: 'Successfully enrolled in program' });
});

// Add review to program
router.post('/:id/review', (req, res) => {
  res.json({ message: 'Review added successfully' });
});

module.exports = router;
