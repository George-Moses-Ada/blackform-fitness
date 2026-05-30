import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  return (
    <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Reset Password</h1>
          <p className="text-gray-400">Enter your email to receive a reset link</p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 text-lg font-semibold text-black bg-accent-lime rounded-full hover:bg-accent-lime/90 transition-colors"
            >
              Send Reset Link
            </button>
          </form>

          <p className="mt-8 text-center text-gray-400 text-sm">
            Remember your password?{' '}
            <Link to="/login" className="text-accent-lime hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
