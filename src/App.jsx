import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Programs from './pages/Programs'
import ProgramDetails from './pages/ProgramDetails'
import WorkoutPlayer from './pages/WorkoutPlayer'
import Dashboard from './pages/Dashboard'
import Trainers from './pages/Trainers'
import Nutrition from './pages/Nutrition'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:id" element={<ProgramDetails />} />
            <Route path="/workout/:id" element={<WorkoutPlayer />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
