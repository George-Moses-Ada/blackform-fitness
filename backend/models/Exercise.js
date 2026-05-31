const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Strength', 'Cardio', 'Flexibility', 'Balance']
  },
  equipment: {
    type: [String],
    default: []
  },
  muscleGroups: {
    type: [String],
    default: []
  },
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Beginner'
  },
  image: {
    type: String
  },
  videoUrl: {
    type: String
  },
  instructions: {
    type: String
  },
  tips: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Exercise', exerciseSchema);
