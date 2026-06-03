const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Shared in-memory storage
const storage = require('./auth-nedb');

// Get user progress
router.get('/progress', (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userProgress = storage.progress.filter(p => p.user === decoded._id);
    userProgress.sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt));
    res.json(userProgress);
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
});

// Update user profile
router.put('/profile', (req, res) => {
  const { name, avatar } = req.body;
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userIndex = storage.users.findIndex(u => u._id === decoded._id);
    
    if (userIndex === -1) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (name) storage.users[userIndex].name = name;
    if (avatar) storage.users[userIndex].avatar = avatar;
    
    res.json(storage.users[userIndex]);
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
});

// Get user stats
router.get('/stats', (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = storage.users.find(u => u._id === decoded._id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user.stats);
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
});

module.exports = router;
