"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const posts = [
  {
    title: "The Evolution of Wheelchairs: How Modern Designs are Changing Lives",
    category: "Technology & Health"
  },
  {
    title: "The Rhythmic Renaissance: How African American and Urban Literature Is Reshaping Modern Storytelling",
    category: "Culture & Literature"
  },
  {
    title: "The Incredible Robots Revolutionizing Parking: How AI and Automation Are Transforming Urban Spaces",
    category: "AI & Robotics"
  },
  {
    title: "Brand Transformation: Strategies, Statistics, and Recommendations for Modern Businesses",
    category: "Business & Marketing"
  }
];

export function RecentPosts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Generated Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover trending topics and AI-curated content tailored to your interests.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer border-2 border-gray-100 hover:border-blue-200">
                <CardHeader className="pb-3">
                  <CardDescription className="text-blue-600 font-semibold">
                    {post.category}
                  </CardDescription>
                  <CardTitle className="text-lg leading-6">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>AI Generated</span>
                    <span>5 min read</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-8"
        >
          <button className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
            View All AI Posts →
          </button>
        </motion.div>
      </div>
    </section>
  );
}