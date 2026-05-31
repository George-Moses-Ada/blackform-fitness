const express = require('express');
const router = express.Router();
const Trainer = require('../models/Trainer');

// Get all trainers
router.get('/', async (req, res) => {
  try {
    const trainers = await Trainer.find()
      .populate('programs');
    
    res.json(trainers);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get single trainer
router.get('/:id', async (req, res) => {
  try {
    const trainer = await Trainer.findById(req.params.id)
      .populate('programs');
    
    if (!trainer) {
      return res.status(404).json({ message: 'Trainer not found' });
    }

    res.json(trainer);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
