import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Activity,
  Heart,
  Bell,
  Users,
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 overflow-x-hidden overflow-y-auto flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col"
      >
        <HeroSection />
        <FeaturesSection />
      </motion.div>
    </div>
  );
}

function HeroSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks! We'll notify ${email} when we launch.`);
    setEmail('');
  };

  return (
    <section className="flex flex-col items-center justify-center px-6 py-10 relative min-h-[80vh]">
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center z-10 max-w-4xl w-full"
      >
        <img
          src="/ALlogo-small.png"
          alt="Elder Healthcare App"
          className="mx-auto mb-6 h-16 sm:h-20 w-auto"
        />

        <h2 className="text-white mb-3 px-2 text-3xl sm:text-5xl font-bold">
          Invisible Protection for Loved Ones at Home
        </h2>

        <p className="text-slate-300 mb-6 px-2 max-w-2xl mx-auto text-sm sm:text-base">
          Coming Soon: 24/7 Vitals Monitoring, Instant Fall Detection,
          Secure Family Dashboards
        </p>

        <CalmSafetyFlow />

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto mt-6"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Get early access updates"
            required
            className="w-full sm:flex-1 px-5 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg"
          >
            Notify Me
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}

function CalmSafetyFlow() {
  return (
    <div className="relative w-full max-w-3xl mx-auto h-36 mt-10 flex items-center justify-center">
      <div className="absolute w-full px-6 sm:px-20">
        <div className="relative h-[3px] rounded-full bg-slate-700/40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-400/40 via-cyan-400/40 to-emerald-400/40" />

          <motion.div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
            }}
            animate={{ backgroundPositionX: ['300%', '-300%'] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
      </div>

      <div className="relative flex w-full justify-between px-6 sm:px-20">
        <FloatingNode>
          <Heart className="w-5 h-5 text-rose-400" />
        </FloatingNode>

        <FloatingNode delay={0.6}>
          <Activity className="w-5 h-5 text-cyan-400" />
        </FloatingNode>

        <FloatingNode delay={1.2}>
          <Users className="w-5 h-5 text-emerald-400" />
        </FloatingNode>
      </div>
    </div>
  );
}

function FloatingNode({ children, delay = 0 }) {
  return (
    <motion.div
      animate={{ y: [4, -4, 4] }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute w-14 h-14 rounded-full bg-cyan-400/15 blur-xl" />
      <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-slate-900/80 border border-cyan-400/30 flex items-center justify-center backdrop-blur">
        {children}
      </div>
    </motion.div>
  );
}

function FeaturesSection() {
  const features = [
    { icon: Activity, title: '24/7 Vitals Tracking' },
    { icon: Bell, title: 'Instant Fall Alerts' },
    { icon: Users, title: 'Family Dashboards' },
  ];

  return (
    <section className="py-10 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <Icon className="w-10 h-10 text-cyan-400 mb-3" />
              <h3 className="text-white">{feature.title}</h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
