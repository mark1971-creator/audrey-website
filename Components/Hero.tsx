'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden bg-[#F8F4F0]">
      {/* Subtle room texture background */}
      <div className="absolute inset-0 bg-[radial-gradient(#c97d5b_0.6px,transparent_1px)] bg-[length:40px_40px] opacity-40" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <div className="inline-block mb-6 px-6 py-2 bg-white/80 backdrop-blur-md rounded-2xl border border-[#6B8E73]/30 text-sm tracking-widest text-[#6B8E73]">
            DESIGNED BY ODD
          </div>
          
          <h1 className="heading text-7xl md:text-[6rem] leading-[1.05] font-bold tracking-tighter mb-8 text-[#2C2520]">
            BE<br />FULL<br />FILLED
          </h1>
          
          <p className="text-2xl md:text-3xl text-[#4A4038] mb-12 max-w-2xl mx-auto">
            Creative hustler from Schaffhausen
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#odd" 
               className="inline-flex items-center justify-center gap-3 bg-[#C97D5B] hover:bg-[#b0663f] text-white px-10 py-5 rounded-2xl text-lg font-medium transition-all">
              See my creations
              <ArrowRight />
            </a>
            <a href="#moments" 
               className="inline-flex items-center justify-center gap-3 border-2 border-[#6B8E73] text-[#6B8E73] px-10 py-5 rounded-2xl hover:bg-[#6B8E73] hover:text-white transition-all">
              Living Life →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}