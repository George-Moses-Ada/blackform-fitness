const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth-nedb'));
app.use('/api/programs', require('./routes/programs-nedb'));
app.use('/api/workouts', require('./routes/workouts-nedb'));
app.use('/api/users', require('./routes/users-nedb'));
app.use('/api/trainers', require('./routes/trainers-nedb'));
app.use('/api/nutrition', require('./routes/nutrition-nedb'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
