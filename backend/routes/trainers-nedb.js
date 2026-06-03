const express = require('express');
const router = express.Router();

// Mock data
const trainers = [
  {
    _id: '1',
    name: 'Sarah Johnson',
    specialty: 'Strength Training',
    bio: 'Certified personal trainer with 10+ years of experience in strength and conditioning.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    certifications: ['NASM-CPT', 'CSCS'],
    experience: '10+ years',
    rating: 4.9,
    programs: ['1', '4']
  },
  {
    _id: '2',
    name: 'Mike Chen',
    specialty: 'HIIT & Cardio',
    bio: 'Former professional athlete specializing in high-intensity interval training.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    certifications: ['ACE', 'ISSA'],
    experience: '8 years',
    rating: 4.8,
    programs: ['2']
  },
  {
    _id: '3',
    name: 'Emma Wilson',
    specialty: 'Yoga & Mobility',
    bio: 'Yoga instructor and mobility specialist focused on functional movement.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    certifications: ['RYT-500', 'FMS'],
    experience: '6 years',
    rating: 4.9,
    programs: ['3', '6']
  },
  {
    _id: '4',
    name: 'David Martinez',
    specialty: 'Bodybuilding',
    bio: 'Competitive bodybuilder with expertise in muscle building and nutrition.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    certifications: ['IFBB Pro', 'Nutrition Coach'],
    experience: '12 years',
    rating: 4.7,
    programs: ['5']
  }
];

// Get all trainers
router.get('/', (req, res) => {
  res.json(trainers);
});

// Get single trainer
router.get('/:id', (req, res) => {
  const trainer = trainers.find(t => t._id === req.params.id);
  
  if (!trainer) {
    return res.status(404).json({ message: 'Trainer not found' });
  }

  res.json(trainer);
});

module.exports = router;
