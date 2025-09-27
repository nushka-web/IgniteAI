"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "@/components/aceternity/type-animation";
import { AdvancedSearchBar } from "./AdvancedSearchBar";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

// Floating particles component
function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{x: number, y: number, size: number, duration: number}>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 5
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <FloatingParticles />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Animated Logo/Brand with floating effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="flex justify-center items-center mb-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-8 w-8 text-blue-600 absolute -left-10 top-1/2 transform -translate-y-1/2" />
            </motion.div>
            
            <motion.h1
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Ignite-AI
            </motion.h1>
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-8 w-8 text-purple-600 absolute -right-10 top-1/2 transform -translate-y-1/2" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-4 font-light"
        >
          Your Intelligent AI Search Companion
        </motion.p>

        {/* Type Animation with enhanced effects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-16 mb-8"
          whileHover={{ scale: 1.02 }}
        >
          <TypeAnimation
            sequence={[
              "Ask anything, get intelligent answers",
              2000,
              "Search smarter, not harder",
              2000,
              "AI-powered content discovery",
              2000,
              "Real-time information processing",
              2000,
            ]}
            wrapper="div"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent"
          />
        </motion.div>

        {/* Search Bar with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 50 }}
          whileHover={{ y: -5 }}
          className="max-w-4xl mx-auto"
        >
          <AdvancedSearchBar />
        </motion.div>

        {/* Trust Indicators with staggered animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-gray-500"
        >
          {["Real-time AI Processing", "100% Privacy Focused", "Multi-language Support"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.2, type: "spring" }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full backdrop-blur-sm"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              />
              <span>{item}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}