
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  Database, 
  ChevronRight, 
  Brain, 
  LineChart, 
  BarChart3, 
  BookOpen 
} from "lucide-react";

const typewriterPhrases = [
  "Machine Learning",
  "Data Visualization",
  "Predictive Analytics",
  "Natural Language Processing",
  "Big Data Engineering"
];

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [dataPoints, setDataPoints] = useState<{ x: number, y: number, opacity: number }[]>([]);

  // Typewriter effect
  useEffect(() => {
    const phrase = typewriterPhrases[currentPhrase];
    
    if (isTyping) {
      if (displayedText.length < phrase.length) {
        const timer = setTimeout(() => {
          setDisplayedText(phrase.substring(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        setIsTyping(false);
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayedText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setIsTyping(true);
        setCurrentPhrase((currentPhrase + 1) % typewriterPhrases.length);
      }
    }
  }, [currentPhrase, displayedText, isTyping]);

  // Generate random data points for background animation
  useEffect(() => {
    const generatePoints = () => {
      const newPoints = [];
      for (let i = 0; i < 30; i++) {
        newPoints.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
      setDataPoints(newPoints);
    };

    generatePoints();
    const interval = setInterval(generatePoints, 8000);
    
    return () => clearInterval(interval);
  }, []);

  // Animation for data points floating effect
  useEffect(() => {
    const animateDataPoints = () => {
      setDataPoints(prevPoints => 
        prevPoints.map(point => ({
          x: (point.x + (Math.random() * 2 - 1) * 0.5) % 100,
          y: (point.y + (Math.random() * 2 - 1) * 0.5) % 100,
          opacity: Math.max(0.1, Math.min(0.6, point.opacity + (Math.random() * 0.2 - 0.1)))
        }))
      );
    };
    
    const animation = setInterval(animateDataPoints, 200);
    return () => clearInterval(animation);
  }, []);

  return (
    <section id="home" className="min-h-screen pt-20 data-bg-grid relative overflow-hidden">
      {/* Data points background */}
      {dataPoints.map((point, index) => (
        <div 
          key={index}
          className="absolute rounded-full bg-data-green transition-all duration-1000 ease-in-out"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            opacity: point.opacity,
            width: `${Math.random() * 5 + 3}px`,
            height: `${Math.random() * 5 + 3}px`,
          }}
        />
      ))}
      
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-data-green/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-data-orange/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="inline-block bg-data-green/10 px-4 py-2 rounded-full font-medium text-data-green mb-4 animate-fade-in">
            Data Scientist & ML Engineer
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Turning <span className="gradient-heading">Data</span> into 
            <br />Meaningful <span className="gradient-heading">Insights</span>
          </h1>
          
          <div className="h-8 mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-gray-600 text-lg inline-flex items-center">
              Specializing in <span className="text-data-orange font-medium ml-2 min-w-[280px]">{displayedText}<span className="animate-pulse">|</span></span>
            </p>
          </div>
          
          <p className="text-gray-600 text-lg mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
           I'm a data-driven professional with a strong foundation in Information Systems and experience in building data pipelines, cloud solutions, and machine learning models. I help businesses transform raw data into actionable insights to drive smarter, faster decision-making
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button className="bg-data-green hover:bg-data-green/90 text-white group transition-all duration-300">
              View Projects
              <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-data-orange text-data-orange hover:bg-data-orange/10">
              Contact Me
            </Button>
          </div>
          
          <div className="mt-8 flex flex-wrap items-center gap-4 text-gray-500 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-2 hover:text-data-green transition-colors cursor-pointer">
              <Brain className="h-5 w-5 text-data-green" />
              <span>Machine Learning</span>
            </div>
            <div className="flex items-center gap-2 hover:text-data-green transition-colors cursor-pointer">
              <Database className="h-5 w-5 text-data-orange" />
              <span>Big Data</span>
            </div>
            <div className="flex items-center gap-2 hover:text-data-green transition-colors cursor-pointer">
              <LineChart className="h-5 w-5 text-data-brown" />
              <span>Analytics</span>
            </div>
            <div className="flex items-center gap-2 hover:text-data-green transition-colors cursor-pointer">
              <BarChart3 className="h-5 w-5 text-data-gold" />
              <span>Visualization</span>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 relative animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="relative z-10 animate-float">
            <svg className="w-full max-w-lg mx-auto" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4A9D5E" d="M40.8,-56.1C55.3,-51.2,70.7,-43.5,77.8,-31.3C84.9,-19.1,83.7,-2.3,78.1,11.5C72.6,25.2,62.8,36,51.4,44.1C40,52.2,27.1,57.7,13.3,61.2C-0.4,64.8,-15,66.4,-30.1,63.1C-45.2,59.9,-60.8,51.8,-65.4,39.6C-70,27.4,-63.6,11.1,-60.8,-4.8C-58,-20.7,-58.8,-36.1,-51.2,-41.7C-43.6,-47.3,-27.6,-43.1,-14.5,-48.5C-1.4,-54,12.8,-69.2,25.4,-71.5C38,-73.9,49,-61.4,40.8,-56.1Z" transform="translate(100 100)" />
            </svg>
            
            <div className="absolute inset-0 flex items-center justify-center">
            <img 
                src="/deepak-1.jpg" 
                alt="Data Scientist" 
                className="rounded-full w-40 h-40 object-cover border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </div>
          </div>
          
          {/* Skills badges floating around the profile */}
          <div className="absolute top-0 right-0 bg-white py-2 px-4 rounded-full shadow-md animate-bounce" style={{ animationDuration: '3s' }}>
            Python
          </div>
          <div className="absolute bottom-1/4 left-0 bg-white py-2 px-4 rounded-full shadow-md animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
            TensorFlow
          </div>
          <div className="absolute top-1/3 left-1/4 bg-white py-2 px-4 rounded-full shadow-md animate-bounce" style={{ animationDuration: '5s', animationDelay: '0.5s' }}>
            Data Analysis
          </div>
          
          {/* Interactive elements */}
          <button className="absolute bottom-0 right-1/4 bg-data-green text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group">
            <BookOpen className="h-6 w-6 group-hover:animate-pulse" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
