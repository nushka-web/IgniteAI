"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Code, Database, Cloud, Brain, Shield, Globe, Zap } from "lucide-react";

export function AIFeatures() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Our AI engine understands context, learns from interactions, and provides 
              intelligent responses that go beyond simple search results.
            </p>
            
            <div className="space-y-4">
              {[
                "Natural Language Processing",
                "Contextual Understanding", 
                "Real-time Learning",
                "Multi-modal Responses",
                "Personalized Results",
                "Cross-platform Integration"
              ].map((feature, index) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: Brain, title: "Smart AI", desc: "Advanced neural networks" },
              { icon: Shield, title: "Secure", desc: "Enterprise security" },
              { icon: Globe, title: "Global", desc: "50+ languages" },
              { icon: Zap, title: "Fast", desc: "Instant responses" }
            ].map((item, index) => (
              <div key={item.title} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}