import { HeroSection } from "@/components/custom/HeroSection";
import { ToolGrid } from "src/components/custom/ToolGrid";
import { AIFeatures } from "src/components/custom/AIFeatures";
import { RecentPosts } from "src/components/custom/RecentPosts";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <HeroSection />
      <ToolGrid />
      <AIFeatures />
      <RecentPosts />
    </div>
  );
}