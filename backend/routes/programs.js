const express = require('express');
const router = express.Router();
const Program = require('../models/Program');
const auth = require('../middleware/auth');

// Get all programs
router.get('/', async (req, res) => {
  try {
    const { category, difficulty } = req.query;
    const filter = {};
    
    if (category) filter.category = category;
    if (difficulty) filter.difficulty = difficulty;

    const programs = await Program.find(filter)
      .populate('trainer')
      .populate('exercises');
    
    res.json(programs);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get single program
router.get('/:id', async (req, res) => {
  try {
    const program = await Program.findById(req.params.id)
      .populate('trainer')
      .populate('exercises');
    
    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }

    res.json(program);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Enroll in program
router.post('/:id/enroll', auth, async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    
    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }

    const user = await User.findById(req.user._id);
    
    if (user.currentProgram) {
      return res.status(400).json({ message: 'You already have an active program' });
    }

    user.currentProgram = program._id;
    program.enrolledUsers.push(user._id);
    
    await user.save();
    await program.save();

    res.json({ message: 'Successfully enrolled in program' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Add review to program
router.post('/:id/review', auth, async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const program = await Program.findById(req.params.id);
    
    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }

    program.reviews.push({
      user: req.user._id,
      rating,
      comment
    });

    // Calculate average rating
    const totalRating = program.reviews.reduce((sum, review) => sum + review.rating, 0);
    program.rating = totalRating / program.reviews.length;

    await program.save();

    res.json(program);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
