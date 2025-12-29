import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Activity,
  HeartPulse,
  Shield,
  Home,
  Bell,
  Users,
} from 'lucide-react';

export default function App() {
  return (
<div className="min-h-screen w-full overflow-y-auto flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex flex-col"
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
    <section className="flex-1 flex flex-col items-center justify-center px-6 py-4 relative">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="text-center z-10 max-w-4xl w-full">
        {/* LOGO */}
        <img
          src="/ALlogo-small.png"
          alt="AwesomeLiving"
          className="mx-auto mb-2 h-9 w-auto drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
        />

       <h2 className="text-white text-xl sm:text-2xl md:text-3xl mb-2">
  Invisible Protection for Loved Ones at Home
</h2>

<p className="text-slate-300 text-sm sm:text-base mb-4 max-w-2xl mx-auto">
  Coming Soon: 24/7 Vitals Monitoring, Instant Fall Detection,
  Secure Family Dashboards
</p>

        <SmartHomeFlow />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto mt-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Get early access updates"
            required
            className="w-full sm:flex-1 px-5 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg"
          >
            Notify Me
          </motion.button>
        </form>
      </div>
    </section>
  );
}

/* ============================= */
/* SMART HOME FLOW (NO OVERFLOW) */
/* ============================= */

function SmartHomeFlow() {
  const centerY = 170;
  const leftEndX = 210;
  const rightEndX = 290;

  const nodes = [
    { x: 80, y: 40, side: 'left', icon: HeartPulse, color: 'text-rose-400' },
    { x: 420, y: 40, side: 'right', icon: Activity, color: 'text-cyan-400' },
    { x: 80, y: 170, side: 'left', icon: Shield, color: 'text-emerald-400' },
    { x: 420, y: 170, side: 'right', icon: Bell, color: 'text-blue-400' },
    { x: 80, y: 300, side: 'left', icon: Users, color: 'text-purple-400' },
    { x: 420, y: 300, side: 'right', icon: Shield, color: 'text-yellow-400' },
  ];

  return (
    <div className="w-full flex justify-center mt-4">
      {/* Responsive scale wrapper */}
      <div className="relative w-full max-w-[500px] aspect-[500/340] scale-90 sm:scale-100">
        <svg
          viewBox="0 0 500 340"
          className="absolute inset-0 w-full h-full"
        >
          {nodes.map((node, index) =>
            node.side === 'left' ? (
              <path
                key={index}
                d={`M ${node.x} ${node.y}
                    C 140 ${node.y}, 160 ${centerY}, ${leftEndX} ${centerY}`}
                stroke="#22d3ee"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                opacity="0.6"
              />
            ) : (
              <path
                key={index}
                d={`M ${node.x} ${node.y}
                    C 360 ${node.y}, 340 ${centerY}, ${rightEndX} ${centerY}`}
                stroke="#22d3ee"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                opacity="0.6"
              />
            )
          )}

          <line
            x1="170"
            y1={centerY}
            x2="330"
            y2={centerY}
            stroke="#22d3ee"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.6"
          />
        </svg>

        {nodes.map(({ x, y, icon: Icon, color }, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: `${(x / 500) * 100}%`,
              top: `${(y / 340) * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Node>
              <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${color}`} />
            </Node>
          </div>
        ))}

        {/* Center Home */}
        <div
          className="absolute"
          style={{
            left: '50%',
            top: `${(centerY / 340) * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 w-16 h-16 bg-cyan-400/25 blur-xl rounded-xl" />
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-slate-900/80 border border-cyan-400/40 flex items-center justify-center">
              <Home className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Node({ children }) {
  return (
    <motion.div
      animate={{ y: [3, -3, 3] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute w-12 h-12 bg-cyan-400/20 blur-lg rounded-full" />
      <div className="relative w-10 h-10 rounded-full bg-slate-900/80 border border-cyan-400/30 flex items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
}

/* ============================= */
/* FEATURES (DESKTOP ONLY)       */
/* ============================= */

function FeaturesSection() {
  const features = [
    { icon: Activity, title: '24/7 Vitals Tracking' },
    { icon: Bell, title: 'Instant Fall Alerts' },
    { icon: Users, title: 'Family Dashboards' },
  ];

  return (
    <section className="py-4 px-6 mt-auto">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center"
            >
              <Icon className="w-8 h-8 text-cyan-400 mb-2" />
              <h3 className="text-white text-sm">
                {feature.title}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

