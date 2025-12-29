import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  AlertTriangle,
  LayoutDashboard,
  ShieldCheck,
  Facebook,
  Twitter,
  Instagram,
  Check,
  ChevronRight,
  Mail
} from 'lucide-react';

const AwesomLivingFinal = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const lineTransition = {
    strokeDashoffset: [0, -20],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear'
    }
  };

  return (
    <div className="min-h-[100svh] w-full flex items-center justify-center  bg-gradient-to-br from-[#EF9825] via-[#0382C5] to-[#59B78F] overflow-hidden font-sans text-white relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0382C5]/20 via-transparent to-[#EF9825]/20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full h-full max-w-full flex flex-col items-center justify-between py-8 px-6 sm:px-12 overflow-hidden">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center gap-4 pt-2"
        >
          <div className="mb-1 relative">
            <img
              src="ALlogo-small.png"
              alt="AwesomLiving Logo"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </div>

          <header className="space-y-3 max-w-2xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              Invisible Protection for Your <span className="text-[#EF9825]">Loved Ones</span>
            </h1>
            <p className="text-white/90 text-sm sm:text-base font-semibold">
              24/7 Health Monitoring • Instant Fall Detection • Peace of Mind
            </p>
          </header>
        </motion.div>

        {/* EMAIL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-lg z-30 my-2"
        >
          <div className="flex flex-col sm:flex-row gap-2 p-1.5 bg-white/95 rounded-2xl shadow-2xl">
            <div className="hidden sm:flex items-center px-4 text-gray-400">
              <Mail size={20} />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="Enter your email"
              className="flex-grow bg-transparent text-gray-800 outline-none text-sm"
            />
            <motion.button
              onClick={handleSubmit}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-[#EF9825] to-[#0382C5] text-white font-bold px-8 py-2.5 rounded-xl text-sm flex items-center gap-2"
            >
              {submitted ? (
                <>
                  <Check size={16} /> Sent!
                </>
              ) : (
                <>
                  Get Early Access <ChevronRight size={16} />
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* FEATURES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full flex flex-col items-center gap-5 pt-4 mb-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
            <Feature icon={<Activity size={26} />} label="Vitals Tracking" description="Real-time monitoring" color="orange" />
            <Feature icon={<AlertTriangle size={26} />} label="Fall Detection" description="Instant alerts" color="blue" />
            <Feature icon={<LayoutDashboard size={26} />} label="Family Dashboard" description="Secure access" color="green" />
          </div>
        </motion.div>

        {/* FOOTER */}
        <motion.div className="flex gap-4 pb-2">
          <Social icon={<Facebook size={18} />} label="Facebook" />
          <Social icon={<Twitter size={18} />} label="Twitter" />
          <Social icon={<Instagram size={18} />} label="Instagram" />
        </motion.div>

      </div>
    </div>
  );
};

const Feature = ({ icon, label, description, color }) => {
  const colorStyles = {
    orange: {
      bgGradient: 'from-[#EF9825]/20 to-[#EF9825]/10',
      border: 'border-[#EF9825]/30'
    },
    blue: {
      border: 'border-[#0382C5]/30'
    },
    green: {
      bgGradient: 'from-[#59B78F]/20 to-[#59B78F]/10',
      border: 'border-[#59B78F]/30'
    }
  };

  const style = colorStyles[color];

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className={`flex flex-col items-center gap-3 p-5 rounded-2xl bg-gradient-to-br ${style.bgGradient} border ${style.border}`}
    >
      <div className="p-3 rounded-xl bg-white/20 text-white">{icon}</div>
      <h3 className="font-bold text-sm">{label}</h3>
      <p className="text-white/70 text-xs">{description}</p>
    </motion.div>
  );
};

const Social = ({ icon, label }) => (
  <motion.button
    whileHover={{ scale: 1.15, y: -3 }}
    whileTap={{ scale: 0.9 }}
    title={label}
    className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center"
  >
    {icon}
  </motion.button>
);

export default AwesomLivingFinal;
