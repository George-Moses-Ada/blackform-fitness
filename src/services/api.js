const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper function to handle API responses
async function handleResponse(response) {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
}

// Auth API
export const authAPI = {
  register: async (name, email, password) => {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    return handleResponse(response);
  },

  login: async (email, password) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return handleResponse(response);
  },

  getCurrentUser: async (token) => {
    const response = await fetch(`${API_URL}/auth/me`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return handleResponse(response);
  }
};

// Programs API
export const programsAPI = {
  getAll: async (filters = {}) => {
    const params = new URLSearchParams(filters);
    const response = await fetch(`${API_URL}/programs?${params}`);
    return handleResponse(response);
  },

  getById: async (id) => {
    const response = await fetch(`${API_URL}/programs/${id}`);
    return handleResponse(response);
  },

  enroll: async (id, token) => {
    const response = await fetch(`${API_URL}/programs/${id}/enroll`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return handleResponse(response);
  },

  addReview: async (id, rating, comment, token) => {
    const response = await fetch(`${API_URL}/programs/${id}/review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ rating, comment })
    });
    return handleResponse(response);
  }
};

// Workouts API
export const workoutsAPI = {
  getByProgram: async (programId) => {
    const response = await fetch(`${API_URL}/workouts/program/${programId}`);
    return handleResponse(response);
  },

  getById: async (id) => {
    const response = await fetch(`${API_URL}/workouts/${id}`);
    return handleResponse(response);
  },

  complete: async (id, duration, notes, token) => {
    const response = await fetch(`${API_URL}/workouts/${id}/complete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ duration, notes })
    });
    return handleResponse(response);
  }
};

// Users API
export const usersAPI = {
  getProgress: async (token) => {
    const response = await fetch(`${API_URL}/users/progress`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return handleResponse(response);
  },

  updateProfile: async (name, avatar, token) => {
    const response = await fetch(`${API_URL}/users/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ name, avatar })
    });
    return handleResponse(response);
  },

  getStats: async (token) => {
    const response = await fetch(`${API_URL}/users/stats`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return handleResponse(response);
  }
};

// Trainers API
export const trainersAPI = {
  getAll: async () => {
    const response = await fetch(`${API_URL}/trainers`);
    return handleResponse(response);
  },

  getById: async (id) => {
    const response = await fetch(`${API_URL}/trainers/${id}`);
    return handleResponse(response);
  }
};

// Nutrition API
export const nutritionAPI = {
  getAll: async (filters = {}) => {
    const params = new URLSearchParams(filters);
    const response = await fetch(`${API_URL}/nutrition?${params}`);
    return handleResponse(response);
  },

  getById: async (id) => {
    const response = await fetch(`${API_URL}/nutrition/${id}`);
    return handleResponse(response);
  }
};
