const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');
const auth = require('../middleware/auth');

// Get workouts for a program
router.get('/program/:programId', async (req, res) => {
  try {
    const workouts = await Workout.find({ program: req.params.programId })
      .populate('exercises.exercise')
      .sort({ week: 1, day: 1 });
    
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get single workout
router.get('/:id', async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id)
      .populate('exercises.exercise')
      .populate('program');
    
    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    res.json(workout);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Complete workout
router.post('/:id/complete', auth, async (req, res) => {
  try {
    const { duration, notes } = req.body;
    const workout = await Workout.findById(req.params.id);
    
    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    const Progress = require('../models/Progress');
    const progress = new Progress({
      user: req.user._id,
      program: workout.program,
      workout: workout._id,
      duration,
      notes
    });

    await progress.save();

    // Update user stats
    const User = require('../models/User');
    const user = await User.findById(req.user._id);
    user.stats.workoutsCompleted += 1;
    user.stats.totalMinutes += duration;
    await user.save();

    res.json({ message: 'Workout completed successfully', progress });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
