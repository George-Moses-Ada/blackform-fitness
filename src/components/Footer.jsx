import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">B</span>
              </div>
              <span className="text-white font-bold text-xl">BLACKFORM</span>
            </div>
            <p className="text-gray-400 text-sm">
              Premium fitness training for those who demand excellence.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/programs" className="text-gray-400 text-sm hover:text-white transition-colors">All Programs</Link></li>
              <li><Link to="/programs" className="text-gray-400 text-sm hover:text-white transition-colors">Strength</Link></li>
              <li><Link to="/programs" className="text-gray-400 text-sm hover:text-white transition-colors">Fat Loss</Link></li>
              <li><Link to="/programs" className="text-gray-400 text-sm hover:text-white transition-colors">Mobility</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/trainers" className="text-gray-400 text-sm hover:text-white transition-colors">Trainers</Link></li>
              <li><Link to="/nutrition" className="text-gray-400 text-sm hover:text-white transition-colors">Nutrition</Link></li>
              <li><Link to="/pricing" className="text-gray-400 text-sm hover:text-white transition-colors">Pricing</Link></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">About</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 BLACKFORM Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
