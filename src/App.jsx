import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  AlertTriangle,
  LayoutDashboard,
  ShieldCheck,
  Facebook,
  Twitter
} from 'lucide-react';

const AwesomLivingFinal = () => {
  const lineTransition = {
    strokeDashoffset: [0, -20],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f8fafc] overflow-x-hidden font-sans text-slate-900 px-3 sm:px-0">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_#e0f2fe_0%,_#f8fafc_50%)] pointer-events-none" />

      <div className="relative w-full max-w-5xl min-h-[92vh] sm:h-[92vh] bg-white/70 backdrop-blur-2xl border border-white rounded-[28px] sm:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col items-center justify-between py-6 sm:py-8 px-4 sm:px-6 text-center overflow-hidden">

        {/* 1. TOP SECTION */}
        <div className="w-full flex flex-col items-center">
          <div className="mb-4 relative">
            <img
              src="ALlogo-small.png"
              alt="AwesomLiving Logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <div className="absolute -top-1 -right-2">
              <div className="w-2.5 h-2.5 bg-[#f39200] rounded-full animate-ping" />
              <div className="absolute inset-0 w-2.5 h-2.5 bg-[#f39200] rounded-full" />
            </div>
          </div>

          <header className="space-y-3 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Invisible Protection for <span className="text-[#005bb7]">Loved Ones</span>
            </h1>

            <p className="text-[#00a99d] text-xs sm:text-sm md:text-base font-bold tracking-wide uppercase">
              Coming Soon: 24/7 Vitals Monitoring • Instant Fall Detection • Secure Dashboards
            </p>

            <p className="text-slate-500 text-base sm:text-lg font-medium italic">
              "Technology that cares, without being seen."
            </p>
          </header>
        </div>

        {/* 2. NOTIFY ME */}
        <div className="w-full max-w-md z-30">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 p-1.5 bg-white border border-slate-200 rounded-2xl shadow-sm focus-within:shadow-md transition-all">
            <input
              type="email"
              placeholder="Get Early Access Updates"
              className="flex-grow px-4 py-2 bg-transparent text-slate-900 outline-none text-sm font-medium"
            />
            <button className="bg-[#005bb7] hover:bg-[#004a96] text-white font-bold px-6 py-2 rounded-xl text-sm transition-all transform active:scale-95 w-full sm:w-auto">
              Notify Me
            </button>
          </div>
        </div>

        {/* 3. ILLUSTRATION */}
        <div className="relative flex flex-col items-center justify-center w-full flex-grow">
          <div className="relative w-full max-w-[450px] h-[200px] sm:h-[220px] flex items-center justify-center">

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <svg width="100" height="80" viewBox="0 0 140 120">
                <path
                  d="M10 60L70 10L130 60V110H10V60Z"
                  fill="white"
                  stroke="#005bb7"
                  strokeWidth="3"
                />
                <rect
                  x="55"
                  y="80"
                  width="30"
                  height="30"
                  stroke="#005bb7"
                  strokeWidth="2"
                />
              </svg>
            </motion.div>

            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 450 220"
            >
              <motion.path
                d="M175 110 L90 110 L90 75"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeDasharray="8 6"
                animate={lineTransition}
              />
              <motion.path
                d="M275 110 L350 110 L350 45"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeDasharray="8 6"
                animate={lineTransition}
              />
              <motion.path
                d="M275 140 L385 140 L385 175"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeDasharray="8 6"
                animate={lineTransition}
              />
            </svg>

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-6 left-[68px] p-2 bg-white rounded-xl shadow-lg border border-orange-50 z-20"
            >
              <Activity size={20} className="text-[#f39200]" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-2 right-[78px] p-2 bg-white rounded-xl shadow-lg border border-blue-50 z-20"
            >
              <AlertTriangle size={20} className="text-[#005bb7]" />
            </motion.div>

            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute bottom-4 right-[42px] p-2 bg-white rounded-xl shadow-lg border border-cyan-50 z-20"
            >
              <LayoutDashboard size={20} className="text-[#00a99d]" />
            </motion.div>
          </div>
        </div>

        {/* 4. FEATURES */}
        <div className="w-full flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-2xl mb-6 px-4">
            <Feature icon={<Activity size={22} />} label="Vitals Tracking" color="orange" />
            <Feature icon={<AlertTriangle size={22} />} label="Fall Alerts" color="blue" />
            <Feature icon={<LayoutDashboard size={22} />} label="Family Dashboards" color="cyan" />
          </div>

          {/* 5. FOOTER */}
          <footer className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-6 px-4">
            <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              <ShieldCheck size={14} className="text-[#00a99d]" />
              HIPAA Compliant Cloud
            </div>
            <div className="flex gap-4">
              <Social icon={<Facebook size={16} />} hover="hover:text-[#005bb7]" />
              <Social icon={<Twitter size={16} />} hover="hover:text-[#f39200]" />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ icon, label, color }) => (
  <div className="flex flex-col items-center gap-2 group cursor-help">
    <div className={`w-12 h-12 rounded-2xl bg-${color}-50 flex items-center justify-center text-${color}-600 border border-${color}-100 group-hover:bg-${color}-600 group-hover:text-white transition-all duration-300`}>
      {icon}
    </div>
    <span className="text-slate-700 text-[11px] font-bold tracking-wider uppercase">
      {label}
    </span>
  </div>
);

const Social = ({ icon, hover }) => (
  <button className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100 ${hover} hover:bg-white transition-all`}>
    {icon}
  </button>
);

export default AwesomLivingFinal;
