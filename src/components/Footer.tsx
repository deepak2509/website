
import React from 'react';
import { Database } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2">
              <Database className="h-6 w-6 text-data-purple" />
              <span className="font-bold text-xl">DeepakGadde<br></br><span className="text-data-purple">Portfolio</span></span>
            </div>
            <p className="mt-2 text-slate-400 max-w-xs">
            
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-slate-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Medium</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-4">Subscribe</h4>
              <p className="text-slate-400 mb-2">Stay updated with my latest projects and articles</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-slate-800 px-3 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-data-purple"
                />
                <button 
                  type="submit"
                  className="bg-data-purple px-4 py-2 rounded-r-md hover:bg-data-purple/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400">© {new Date().getFullYear()} DeepakGadde. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <p className="text-slate-400">Made with ❤️ using React & Tailwind</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
