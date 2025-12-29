import { useState } from 'react';
import { motion } from 'motion/react';
import { Activity, Heart, Shield, Globe, BarChart3, Bell, Users } from 'lucide-react';

export default function App() {
  return (
<div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 overflow-x-hidden flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex flex-col justify-between"
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
    <section className="flex-1 flex flex-col items-center justify-center px-6 py-6 relative">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
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
        <h2 className="text-white mb-3 px-4">
          Invisible Protection for Loved Ones at Home
        </h2>

        <p className="text-slate-300 mb-6 px-4 max-w-2xl mx-auto">
          Coming Soon: 24/7 Vitals Monitoring, Instant Fall Detection, Secure
          Family Dashboards
        </p>

        {/* NEW: House + connected cards visual */}
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
    <div className="relative w-full max-w-4xl mx-auto mt-10 h-44 sm:h-52 md:h-60">
      {/* soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[260px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* dotted connectors (SVG overlay) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
      >
        {/* left card -> house */}
        <DataLink d="M22 18 H34 V30 H44" delay={0} />

        {/* top-right card -> house */}
        <DataLink d="M78 14 H66 V22 H58" delay={0.35} />

        {/* bottom-right card -> house */}
        <DataLink d="M78 46 H66 V36 H60" delay={0.7} />

        {/* small “pips” on corners */}
        <Pip x={34} y={18} />
        <Pip x={34} y={30} />
        <Pip x={66} y={14} />
        <Pip x={66} y={22} />
        <Pip x={66} y={46} />
        <Pip x={66} y={36} />
      </svg>

      {/* center house */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <HouseGlyph />
      </div>

      {/* icon cards around the house */}
      <IconCard className="left-[18%] top-[30%]">
        <Heart className="w-7 h-7 text-slate-100" />
      </IconCard>

      <IconCard className="left-[82%] top-[23%]">
        <div className="relative">
          <Shield className="w-7 h-7 text-slate-100" />
          <Globe className="w-4 h-4 text-cyan-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </IconCard>

      <IconCard className="left-[82%] top-[77%]">
        <BarChart3 className="w-7 h-7 text-cyan-200" />
      </IconCard>
    </div>
  );
}

function DataLink({ d, delay = 0 }) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="rgba(34,211,238,0.55)"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="3 5"
      style={{ filter: 'drop-shadow(0 0 6px rgba(34,211,238,0.25))' }}
      animate={{
        strokeDashoffset: [0, -32],
        opacity: [0.55, 0.9, 0.55],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'linear',
        delay,
      }}
    />
  );
}

function Pip({ x, y }) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r="0.7"                           // 👈 smaller dot
      fill="rgba(34,211,238,0.55)"      // 👈 softer color
      animate={{ opacity: [0.25, 0.8, 0.25] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}


function IconCard({ children, className }) {
  return (
    <motion.div
      className={`absolute ${className} -translate-x-1/2 -translate-y-1/2`}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="relative">
        <div className="absolute -inset-3 rounded-2xl bg-cyan-400/10 blur-xl" />
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-900/70 border border-white/10 shadow-[0_0_0_1px_rgba(34,211,238,0.18)] backdrop-blur flex items-center justify-center">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

function HouseGlyph() {
  return (
    <motion.svg
      width="320"
      height="200"
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[220px] sm:w-[260px] md:w-[320px] drop-shadow-[0_0_14px_rgba(255,255,255,0.22)]"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: [0.85, 1, 0.85], scale: [0.98, 1, 0.98] }}
      transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* roof */}
      <path
        d="M50 95 L160 25 L270 95"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* chimney */}
      <path
        d="M215 44 V26 H238 V56"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* walls */}
      <path
        d="M70 90 V170 H250 V90"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* door */}
      <path
        d="M105 170 V125 Q105 112 118 112 H132 Q145 112 145 125 V170"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* window */}
      <rect
        x="175"
        y="112"
        width="55"
        height="38"
        rx="4"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="3"
      />
      <path d="M175 131 H230" stroke="rgba(255,255,255,0.9)" strokeWidth="3" />
      <path
        d="M202.5 112 V150"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="3"
      />
    </motion.svg>
  );
}

function FeaturesSection() {
  const features = [
    { icon: Activity, title: '24/7 Vitals Tracking' },
    { icon: Bell, title: 'Instant Fall Alerts' },
    { icon: Users, title: 'Family Dashboards' },
  ];

  return (
    <section className="py-6 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
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
