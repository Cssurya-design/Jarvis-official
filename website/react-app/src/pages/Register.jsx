import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, UserPlus, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { registerWithEmail, loginWithGoogle } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await registerWithEmail(email, password, name);
      // Supabase auto-logs in if email confirmation is disabled, otherwise we might need to tell them to check email.
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Failed to register');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch (err) {
      setError('Failed to login with Google');
    }
  };

  return (
    <div className="min-h-screen py-32 px-6 relative z-10 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-card-bg/60 glass-panel border border-accent/20 p-8 rounded-3xl neumorphic-shadow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#0055ff]/10 rounded-full blur-3xl" />
          
          <div className="text-center mb-8 relative z-10">
            <h1 className="text-3xl font-heading font-bold text-white mb-2">Create Account</h1>
            <p className="text-text-secondary">Join the J.A.R.V.I.S network</p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg mb-6 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-5 relative z-10">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-accent/50" />
              </div>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full bg-[#0a0e17]/50 border border-card-border rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-accent/50" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full bg-[#0a0e17]/50 border border-card-border rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-accent/50" />
              </div>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password (min 6 chars)"
                className="w-full bg-[#0a0e17]/50 border border-card-border rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <UserPlus className="h-5 w-5" />
              {isLoading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 flex items-center gap-4 relative z-10">
            <div className="flex-1 h-px bg-card-border" />
            <span className="text-text-secondary text-sm">or</span>
            <div className="flex-1 h-px bg-card-border" />
          </div>

          <div className="mt-6 relative z-10">
            <button 
              onClick={handleGoogleLogin}
              className="w-full bg-white/5 border border-white/10 hover:border-accent hover:bg-white/10 transition-all text-white py-3 rounded-xl flex items-center justify-center gap-3 font-medium"
            >
              Continue with Google
            </button>
          </div>

          <div className="mt-8 text-center text-text-secondary relative z-10">
            Already have an account?{' '}
            <Link to="/login" className="text-accent hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
