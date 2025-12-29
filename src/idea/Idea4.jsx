import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Heart,
  AlertCircle,
  Users,
  Mail,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export default function Idea4() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="h-screen w-full bg-gradient-to-br from-blue-900 via-teal-800 to-green-700 overflow-hidden relative px-6">

      {/* Background blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto h-full flex flex-col">

        {/* HERO */}
        <div className="pt-16 text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <img
              src="/ALlogo-small.png"
              alt="Awsom Living"
              className="h-16 w-auto "
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Caring for Your{' '}
            <span className="bg-gradient-to-r from-yellow-200 via-green-200 to-blue-200 bg-clip-text text-transparent">
              Loved Ones
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/80 max-w-2xl mx-auto mb-10"
          >
            Advanced health monitoring designed for elder care. Real-time vital tracking,
            emergency alerts, and family connection.
          </motion.p>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onSubmit={handleSubmit}
            className="flex gap-4 max-w-2xl mx-auto"
          >
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold rounded-lg flex items-center gap-2"
            >
              Notify Me
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.form>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-green-300 text-sm"
            >
              Thanks! We’ll keep you updated.
            </motion.div>
          )}
        </div>

        {/* FEATURES */}
        <div className="mt-14 border-t border-white/20 pt-8">
          <p className="text-center text-white/60 text-sm mb-6">Key Features</p>

          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: Heart, title: '24/7 Vital Tracking', desc: 'Heart rate & oxygen monitoring' },
              { icon: AlertCircle, title: 'Fall Detection', desc: 'Instant emergency alerts' },
              { icon: Users, title: 'Family Dashboard', desc: 'Stay connected anytime' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
              >
                <feature.icon className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                <h3 className="text-white font-semibold">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-auto pb-6 text-center text-white/50 text-xs">
          © 2025 Awsom Living. All rights reserved.
        </div>
      </div>
    </div>
  );
}
