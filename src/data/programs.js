export const programs = [
  {
    id: 1,
    title: 'Lean Strength',
    goal: 'Strength',
    difficulty: 'Intermediate',
    duration: '8 weeks',
    workouts: 24,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    description: 'A structured strength-building program designed to help users build lean muscle, improve endurance, and develop consistency.',
    equipment: ['Dumbbells', 'Resistance bands', 'Mat'],
    schedule: [
      { day: 'Monday', workout: 'Lower Body Strength' },
      { day: 'Tuesday', workout: 'Core + Mobility' },
      { day: 'Wednesday', workout: 'Upper Body Strength' },
      { day: 'Thursday', workout: 'Active Recovery' },
      { day: 'Friday', workout: 'Full Body Conditioning' },
      { day: 'Saturday', workout: 'Optional Cardio' },
      { day: 'Sunday', workout: 'Rest' }
    ]
  },
  {
    id: 2,
    title: 'Full Body Burn',
    goal: 'Fat Loss',
    difficulty: 'Advanced',
    duration: '4 weeks',
    workouts: 20,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    description: 'High-intensity full body workouts designed to maximize calorie burn and boost metabolism.',
    equipment: ['Dumbbells', 'Kettlebell', 'Mat'],
    schedule: [
      { day: 'Monday', workout: 'HIIT Upper Body' },
      { day: 'Tuesday', workout: 'HIIT Lower Body' },
      { day: 'Wednesday', workout: 'Core Blast' },
      { day: 'Thursday', workout: 'Active Recovery' },
      { day: 'Friday', workout: 'Full Body HIIT' },
      { day: 'Saturday', workout: 'Cardio Intervals' },
      { day: 'Sunday', workout: 'Rest' }
    ]
  },
  {
    id: 3,
    title: 'Core Control',
    goal: 'Strength',
    difficulty: 'Beginner',
    duration: '4 weeks',
    workouts: 12,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    description: 'Focus on building a strong core foundation with targeted ab and stability exercises.',
    equipment: ['Mat', 'Resistance bands'],
    schedule: [
      { day: 'Monday', workout: 'Core Foundations' },
      { day: 'Tuesday', workout: 'Plank Variations' },
      { day: 'Wednesday', workout: 'Oblique Focus' },
      { day: 'Thursday', workout: 'Active Recovery' },
      { day: 'Friday', workout: 'Total Core' },
      { day: 'Saturday', workout: 'Light Cardio' },
      { day: 'Sunday', workout: 'Rest' }
    ]
  },
  {
    id: 4,
    title: 'Beginner Reset',
    goal: 'Beginner',
    difficulty: 'Beginner',
    duration: '2 weeks',
    workouts: 6,
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80',
    description: 'Perfect starting point for beginners to build fitness habits and learn proper form.',
    equipment: ['Mat', 'Light dumbbells'],
    schedule: [
      { day: 'Monday', workout: 'Full Body Basics' },
      { day: 'Tuesday', workout: 'Active Recovery' },
      { day: 'Wednesday', workout: 'Upper Body Intro' },
      { day: 'Thursday', workout: 'Active Recovery' },
      { day: 'Friday', workout: 'Lower Body Intro' },
      { day: 'Saturday', workout: 'Light Walk' },
      { day: 'Sunday', workout: 'Rest' }
    ]
  },
  {
    id: 5,
    title: 'Home Sculpt',
    goal: 'Home',
    difficulty: 'Intermediate',
    duration: '6 weeks',
    workouts: 18,
    image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&q=80',
    description: 'Effective home workouts using minimal equipment for maximum results.',
    equipment: ['Mat', 'Resistance bands', 'Dumbbells'],
    schedule: [
      { day: 'Monday', workout: 'Home Upper Body' },
      { day: 'Tuesday', workout: 'Home Lower Body' },
      { day: 'Wednesday', workout: 'Core + Cardio' },
      { day: 'Thursday', workout: 'Active Recovery' },
      { day: 'Friday', workout: 'Full Body Sculpt' },
      { day: 'Saturday', workout: 'HIIT at Home' },
      { day: 'Sunday', workout: 'Rest' }
    ]
  },
  {
    id: 6,
    title: 'Gym Power',
    goal: 'Gym',
    difficulty: 'Advanced',
    duration: '12 weeks',
    workouts: 36,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    description: 'Comprehensive gym program for serious lifters looking to maximize strength and muscle gains.',
    equipment: ['Barbell', 'Dumbbells', 'Cables', 'Machines'],
    schedule: [
      { day: 'Monday', workout: 'Chest + Triceps' },
      { day: 'Tuesday', workout: 'Back + Biceps' },
      { day: 'Wednesday', workout: 'Legs' },
      { day: 'Thursday', workout: 'Shoulders + Abs' },
      { day: 'Friday', workout: 'Full Body Power' },
      { day: 'Saturday', workout: 'Accessory Work' },
      { day: 'Sunday', workout: 'Rest' }
    ]
  },
  {
    id: 7,
    title: 'Mobility Flow',
    goal: 'Mobility',
    difficulty: 'Beginner',
    duration: '4 weeks',
    workouts: 12,
    image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?w=800&q=80',
    description: 'Improve flexibility, reduce stiffness, and enhance movement quality with targeted mobility work.',
    equipment: ['Mat', 'Foam roller'],
    schedule: [
      { day: 'Monday', workout: 'Hip Mobility' },
      { day: 'Tuesday', workout: 'Spine Flow' },
      { day: 'Wednesday', workout: 'Shoulder Mobility' },
      { day: 'Thursday', workout: 'Full Body Flow' },
      { day: 'Friday', workout: 'Active Recovery' },
      { day: 'Saturday', workout: 'Gentle Yoga' },
      { day: 'Sunday', workout: 'Rest' }
    ]
  },
  {
    id: 8,
    title: 'Fat Loss Conditioning',
    goal: 'Fat Loss',
    difficulty: 'Intermediate',
    duration: '8 weeks',
    workouts: 24,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    description: 'Strategic conditioning program combining strength and cardio for optimal fat loss.',
    equipment: ['Dumbbells', 'Jump rope', 'Mat'],
    schedule: [
      { day: 'Monday', workout: 'Strength + Cardio' },
      { day: 'Tuesday', workout: 'HIIT Intervals' },
      { day: 'Wednesday', workout: 'Upper Body Burn' },
      { day: 'Thursday', workout: 'Active Recovery' },
      { day: 'Friday', workout: 'Lower Body Burn' },
      { day: 'Saturday', workout: 'Steady Cardio' },
      { day: 'Sunday', workout: 'Rest' }
    ]
  }
]
