"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, FileText, Code, Palette, Camera, Video, Users, Sparkles, Search, Zap } from "lucide-react";

const tools = [
  {
    icon: Search,
    title: "Research Me",
    description: "Deep research and analysis",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: MessageSquare,
    title: "AI Chat",
    description: "Intelligent conversations",
    color: "from-green-500 to-green-600"
  },
  {
    icon: FileText,
    title: "AI Docs",
    description: "Smart document creation",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Code,
    title: "AI Developer",
    description: "Code generation & analysis",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Palette,
    title: "AI Designer",
    description: "Creative design assistance",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Camera,
    title: "Clip Genius",
    description: "Video and image processing",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Sparkles,
    title: "AI Image",
    description: "Image generation & editing",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Video,
    title: "AI Video",
    description: "Video creation tools",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: Users,
    title: "AI Meeting",
    description: "Meeting assistance",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    icon: Zap,
    title: "AI Sheets",
    description: "Spreadsheet automation",
    color: "from-amber-500 to-amber-600"
  }
];

export function ToolGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ignite-AI Super Agent
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ask anything, create anything. Ignite-AI supports personalized tools for every need.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 cursor-pointer group">
                <CardHeader className="pb-3">
                  <div className="flex justify-center mb-3">
                    <div className={`p-3 bg-gradient-to-r ${tool.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <tool.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-base font-semibold">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm text-gray-600">
                    {tool.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-blue-600 font-medium">For You - Personalized recommendations</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}