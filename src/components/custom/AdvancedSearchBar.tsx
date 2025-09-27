"use client";

import { useState } from "react";
import { Search, Mic, Camera, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AdvancedSearchBar() {
  const [query, setQuery] = useState("");
  const [isListening, setIsListening] = useState(false);

  return (
    <div className="relative w-full group">
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
          
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask me anything... What would you like to know?"
            className="pl-12 pr-32 py-7 text-lg rounded-2xl border-2 border-gray-200/80 focus:border-blue-500/50 shadow-lg bg-white/95 backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl w-full"
          />
          
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full h-10 w-10 transition-all duration-200 hover:bg-blue-50 hover:scale-110"
              onClick={() => setIsListening(!isListening)}
            >
              <Mic className={`h-4 w-4 ${isListening ? 'text-red-500' : 'text-gray-600'}`} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 transition-all duration-200 hover:bg-blue-50 hover:scale-110">
              <Camera className="h-4 w-4 text-gray-600" />
            </Button>
          </div>
        </div>
        
        <Button className="px-8 py-7 rounded-2xl text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group">
          <Zap className="mr-2 h-5 w-5" />
          Search
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-2 justify-center mt-4">
        {["Latest AI trends", "Weather today", "Stock market news", "Recipe ideas"].map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => setQuery(suggestion)}
            className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}