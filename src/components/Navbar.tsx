
import React from 'react';
import { Button } from "@/components/ui/button";
import { Database, LayoutDashboard, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Database className="h-6 w-6 text-data-green" />
          <span className="font-bold text-xl text-data-dark">DeepakGadde<span className="text-data-orange">Portfolio</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-700 hover:text-data-green transition-colors">Home</a>
          <a href="#about" className="text-gray-700 hover:text-data-green transition-colors">About</a>
          <a href="#projects" className="text-gray-700 hover:text-data-green transition-colors">Projects</a>
          <a href="#skills" className="text-gray-700 hover:text-data-green transition-colors">Skills</a>
          <a href="#contact" className="text-gray-700 hover:text-data-green transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button className="bg-gradient-to-r from-data-orange to-data-green text-white hidden md:flex">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Resume
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-8">
                <a href="#home" className="text-lg font-medium hover:text-data-green transition-colors">Home</a>
                <a href="#about" className="text-lg font-medium hover:text-data-green transition-colors">About</a>
                <a href="#projects" className="text-lg font-medium hover:text-data-green transition-colors">Projects</a>
                <a href="#skills" className="text-lg font-medium hover:text-data-green transition-colors">Skills</a>
                <a href="#contact" className="text-lg font-medium hover:text-data-green transition-colors">Contact</a>
                <Button className="bg-gradient-to-r from-data-orange to-data-green text-white mt-4">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
