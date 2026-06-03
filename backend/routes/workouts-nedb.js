const express = require('express');
const router = express.Router();

// Mock data
const workouts = [
  {
    _id: '1',
    title: 'Week 1 - Day 1',
    program: '1',
    week: 1,
    day: 1,
    exercises: [
      { exercise: '1', sets: 3, reps: '12', duration: '45 sec', rest: '30 sec' },
      { exercise: '2', sets: 3, reps: '12', duration: '45 sec', rest: '30 sec' },
      { exercise: '3', sets: 3, reps: '12', duration: '45 sec', rest: '30 sec' }
    ],
    duration: 45,
    description: 'Full body workout for week 1, day 1'
  },
  {
    _id: '2',
    title: 'Week 1 - Day 2',
    program: '1',
    week: 1,
    day: 2,
    exercises: [
      { exercise: '4', sets: 3, reps: '12', duration: '45 sec', rest: '30 sec' },
      { exercise: '5', sets: 3, reps: '12', duration: '45 sec', rest: '30 sec' }
    ],
    duration: 45,
    description: 'Full body workout for week 1, day 2'
  },
  {
    _id: '3',
    title: 'Week 1 - Day 3',
    program: '1',
    week: 1,
    day: 3,
    exercises: [
      { exercise: '6', sets: 3, reps: '12', duration: '45 sec', rest: '30 sec' },
      { exercise: '1', sets: 3, reps: '12', duration: '45 sec', rest: '30 sec' }
    ],
    duration: 45,
    description: 'Full body workout for week 1, day 3'
  }
];

// In-memory progress storage
let progress = [];

// Get workouts for a program
router.get('/program/:programId', (req, res) => {
  const programWorkouts = workouts.filter(w => w.program === req.params.programId);
  programWorkouts.sort((a, b) => (a.week - b.week) || (a.day - b.day));
  res.json(programWorkouts);
});

// Get single workout
router.get('/:id', (req, res) => {
  const workout = workouts.find(w => w._id === req.params.id);
  
  if (!workout) {
    return res.status(404).json({ message: 'Workout not found' });
  }

  res.json(workout);
});

// Complete workout
router.post('/:id/complete', (req, res) => {
  const { duration, notes } = req.body;
  const workout = workouts.find(w => w._id === req.params.id);
  
  if (!workout) {
    return res.status(404).json({ message: 'Workout not found' });
  }

  const newProgress = {
    _id: Date.now().toString(),
    user: 'demo-user',
    program: workout.program,
    workout: workout._id,
    duration,
    notes,
    completedAt: new Date()
  };

  progress.push(newProgress);

  res.json({ message: 'Workout completed successfully', progress: newProgress });
});

module.exports = router;
