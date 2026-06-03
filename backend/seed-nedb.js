const { dbHelpers } = require('./database');

// Mock data
const trainers = [
  {
    name: 'Sarah Johnson',
    specialty: 'Strength Training',
    bio: 'Certified personal trainer with 10+ years of experience in strength and conditioning.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    certifications: ['NASM-CPT', 'CSCS'],
    experience: '10+ years',
    rating: 4.9,
    programs: []
  },
  {
    name: 'Mike Chen',
    specialty: 'HIIT & Cardio',
    bio: 'Former professional athlete specializing in high-intensity interval training.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    certifications: ['ACE', 'ISSA'],
    experience: '8 years',
    rating: 4.8,
    programs: []
  },
  {
    name: 'Emma Wilson',
    specialty: 'Yoga & Mobility',
    bio: 'Yoga instructor and mobility specialist focused on functional movement.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    certifications: ['RYT-500', 'FMS'],
    experience: '6 years',
    rating: 4.9,
    programs: []
  },
  {
    name: 'David Martinez',
    specialty: 'Bodybuilding',
    bio: 'Competitive bodybuilder with expertise in muscle building and nutrition.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    certifications: ['IFBB Pro', 'Nutrition Coach'],
    experience: '12 years',
    rating: 4.7,
    programs: []
  }
];

const exercises = [
  {
    name: 'Push-ups',
    description: 'Classic bodyweight exercise for chest, shoulders, and triceps.',
    category: 'Strength',
    equipment: [],
    muscleGroups: ['Chest', 'Shoulders', 'Triceps'],
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
    instructions: 'Start in a plank position, lower your body until chest nearly touches the floor, then push back up.',
    tips: ['Keep core engaged', 'Maintain straight line from head to heels', 'Lower with control']
  },
  {
    name: 'Squats',
    description: 'Fundamental lower body exercise for legs and glutes.',
    category: 'Strength',
    equipment: [],
    muscleGroups: ['Quadriceps', 'Glutes', 'Hamstrings'],
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&q=80',
    instructions: 'Stand with feet shoulder-width apart, lower hips back and down, then return to standing.',
    tips: ['Keep weight in heels', 'Keep chest up', 'Go as low as comfortable']
  },
  {
    name: 'Burpees',
    description: 'Full-body exercise combining squat, push-up, and jump.',
    category: 'Cardio',
    equipment: [],
    muscleGroups: ['Full Body'],
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=400&q=80',
    instructions: 'Start standing, drop to squat, kick feet back to plank, do push-up, jump feet back, and jump up.',
    tips: ['Maintain rhythm', 'Land softly', 'Keep core tight']
  },
  {
    name: 'Plank',
    description: 'Isometric exercise for core strength and stability.',
    category: 'Strength',
    equipment: [],
    muscleGroups: ['Core'],
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80',
    instructions: 'Hold a straight line from head to heels on forearms and toes.',
    tips: ['Engage core', 'Squeeze glutes', 'Keep breathing']
  },
  {
    name: 'Lunges',
    description: 'Single-leg exercise for lower body strength and balance.',
    category: 'Strength',
    equipment: [],
    muscleGroups: ['Quadriceps', 'Glutes', 'Hamstrings'],
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80',
    instructions: 'Step forward with one leg, lower hips until both knees are at 90 degrees, then return to standing.',
    tips: ['Keep front knee behind toes', 'Keep torso upright', 'Alternate legs']
  },
  {
    name: 'Jumping Jacks',
    description: 'Cardio exercise to elevate heart rate and improve coordination.',
    category: 'Cardio',
    equipment: [],
    muscleGroups: ['Full Body'],
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=400&q=80',
    instructions: 'Jump while spreading legs and raising arms overhead, then return to starting position.',
    tips: ['Land softly', 'Keep rhythm', 'Breathe steadily']
  }
];

const recipes = [
  {
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

async function seed() {
  try {
    console.log('Seeding NeDB database...');

    // Clear existing data
    await dbHelpers.remove('trainers', {}, { multi: true });
    await dbHelpers.remove('exercises', {}, { multi: true });
    await dbHelpers.remove('programs', {}, { multi: true });
    await dbHelpers.remove('workouts', {}, { multi: true });
    await dbHelpers.remove('recipes', {}, { multi: true });
    console.log('Cleared existing data');

    // Insert trainers
    const createdTrainers = await dbHelpers.insert('trainers', trainers);
    console.log('Inserted trainers');

    // Insert exercises
    const createdExercises = await dbHelpers.insert('exercises', exercises);
    console.log('Inserted exercises');

    // Insert recipes
    await dbHelpers.insert('recipes', recipes);
    console.log('Inserted recipes');

    // Create programs
    const programs = [
      {
        title: 'Total Body Transformation',
        description: 'Complete body transformation program with strength and cardio exercises.',
        category: 'Strength',
        difficulty: 'Intermediate',
        duration: '8 weeks',
        weeks: 8,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
        trainer: createdTrainers[0]._id,
        exercises: createdExercises.slice(0, 4).map(e => e._id),
        rating: 4.8,
        reviews: [],
        enrolledUsers: []
      },
      {
        title: 'Fat Burn Express',
        description: 'High-intensity program designed to burn fat quickly.',
        category: 'Fat Loss',
        difficulty: 'Advanced',
        duration: '6 weeks',
        weeks: 6,
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
        trainer: createdTrainers[1]._id,
        exercises: createdExercises.slice(2, 6).map(e => e._id),
        rating: 4.7,
        reviews: [],
        enrolledUsers: []
      },
      {
        title: 'Beginner Starter',
        description: 'Perfect program for fitness beginners to build a strong foundation.',
        category: 'Beginner',
        difficulty: 'Beginner',
        duration: '4 weeks',
        weeks: 4,
        image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?w=800&q=80',
        trainer: createdTrainers[2]._id,
        exercises: createdExercises.slice(0, 3).map(e => e._id),
        rating: 4.9,
        reviews: [],
        enrolledUsers: []
      },
      {
        title: 'Home Workout Pro',
        description: 'Effective workouts you can do at home with minimal equipment.',
        category: 'Home',
        difficulty: 'Intermediate',
        duration: '6 weeks',
        weeks: 6,
        image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&q=80',
        trainer: createdTrainers[0]._id,
        exercises: createdExercises.slice(0, 5).map(e => e._id),
        rating: 4.6,
        reviews: [],
        enrolledUsers: []
      },
      {
        title: 'Gym Power Builder',
        description: 'Advanced gym program for maximum muscle and strength gains.',
        category: 'Gym',
        difficulty: 'Advanced',
        duration: '12 weeks',
        weeks: 12,
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80',
        trainer: createdTrainers[3]._id,
        exercises: createdExercises.slice(0, 4).map(e => e._id),
        rating: 4.8,
        reviews: [],
        enrolledUsers: []
      },
      {
        title: 'Mobility Master',
        description: 'Improve flexibility and reduce pain with targeted mobility work.',
        category: 'Mobility',
        difficulty: 'Beginner',
        duration: '4 weeks',
        weeks: 4,
        image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?w=800&q=80',
        trainer: createdTrainers[2]._id,
        exercises: createdExercises.slice(3, 6).map(e => e._id),
        rating: 4.9,
        reviews: [],
        enrolledUsers: []
      }
    ];

    const createdPrograms = await dbHelpers.insert('programs', programs);
    console.log('Inserted programs');

    // Create workouts for each program
    const workouts = [];
    createdPrograms.forEach(program => {
      for (let week = 1; week <= program.weeks; week++) {
        for (let day = 1; day <= 3; day++) {
          workouts.push({
            title: `Week ${week} - Day ${day}`,
            program: program._id,
            week,
            day,
            exercises: program.exercises.map(exerciseId => ({
              exercise: exerciseId,
              sets: 3,
              reps: '12',
              duration: '45 sec',
              rest: '30 sec'
            })),
            duration: 45,
            description: `Full body workout for week ${week}, day ${day}`
          });
        }
      }
    });

    await dbHelpers.insert('workouts', workouts);
    console.log('Inserted workouts');

    // Update trainers with their programs
    for (let i = 0; i < createdTrainers.length; i++) {
      const trainerPrograms = createdPrograms.filter(p => p.trainer === createdTrainers[i]._id);
      await dbHelpers.update('trainers', { _id: createdTrainers[i]._id }, { $set: { programs: trainerPrograms.map(p => p._id) } });
    }
    console.log('Updated trainers with programs');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seed();
