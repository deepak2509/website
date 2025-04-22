
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Briefcase, 
  Calendar, 
  GraduationCap, 
  Building, 
  ChevronDown, 
  ChevronUp 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

interface WorkExperience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  type: 'work';
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string[];
  achievements: string[];
  type: 'education';
}

type ExperienceItem = WorkExperience | Education;

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Graduate Research Assistant",
    company: "Iowa State University",
    location: "Ames, IA",
    period: "AUG 2024 - Present",
    description: [
      "Lead a team of 3 students in developing machine learning algorithm to get insights from the Experimental dataset",
      "Designed and implemented deep learning models (YOLOv5, Mask R-CNN, Retina-net,EfficientDET and GNN) to detect and track melt pool and spatter behavior in 7000+ high-speed experimental images, improving detection accuracy by over 30%.",
      "Achieved over 85% mAP@0.5 and high precision/recall across models through optimized training and evaluation using custom COCO-style datasets.",
      "Automated image feature extraction and classification with deep neural networks, enabling accurate pattern recognition with up to 95% precision",
      "Applied exploratory data analysis (EDA) using Pandas, NumPy, Seaborn, and Matplotlib to interpret and visualize performance metrics and experimental trends"
    ],
    skills: ["Python", "TensorFlow", "SQL", "AWS", "Tableau","Deeplearning"],
    type: "work"
  },
  {
    id: 2,
    title: "Application Developer",
    company: "DVR&DR.HS MIC COLLEGE OF TECHNOLOGY",
    location: "Vijayawada, India",
    period: "Oct 2022 - Apr 2023",
    description: [
      "Led the development of 10+ websites for small industries and educational institutions, meeting client requirements and budget constraints.",
      "Collaborated with 10+ stakeholders to design and implement responsive web applications, enhancing user engagement and accessibility",
      "Developed dynamic and interactive web interfaces using HTML, CSS, JavaScript, and React.js, delivering modern and scalable solutions.",
      "Integrated databases like MySQL and MongoDB to ensure efficient data storage and retrieval for web applications",
      " Streamlined backend development processes using PHP and Node.js, improving performance and scalability"
    ],
    skills: ["Python", "Html", "Css", "Javascript", "Reactjs"],
    type: "work"
  },
  {
    id: 4,
    degree: "Master of Science in Management Information Systems",
    institution: "Iowa State University",
    location: "Ames, IA",
    period: "2023 - 2025(AUG)--Expected",
    description: [
      "Specialized in Machine Learning and Data analytics",
      "Research focus on deep learning applications in computer vision",
      "GPA: 3.5/4.0"
    ],
    achievements: [
      "Published research paper on Convolutional Neural Networks at ICML conference",
      "Teaching Assistant for Introduction to Machine Learning course",
      "Dean's List for academic excellence"
    ],
    type: "education"
  },
  {
    id: 5,
    degree: "Bachelor of technology in Computer science and engineering",
    institution: "DVR&DR.HS MIC College of technology",
    location: "Vijayawada, India",
    period: "2019 - 2023",
    description: [
      "Coursework included Data Structures, Algorithms, Database Systems, and Statistical Methods",
      "GPA: 8.5/10.0"
    ],
    achievements: [
      "Led student project developing a web app for campus events",
      "Led a team of 8 to mentor junior and organised coding hackathons "
    ],
    type: "education"
  }
];

const Experience = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("work");
  
  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  const filteredExperience = experienceData.filter(item => item.type === activeTab);

  return (
    <section id="experience" className="py-20 data-bg-grid">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My <span className="gradient-heading">Experience</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and educational background in data science and analytics
          </p>
        </div>
        
        <Tabs defaultValue="work" value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-64">
              <TabsTrigger value="work" className="data-card flex items-center justify-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>Work</span>
              </TabsTrigger>
              <TabsTrigger value="education" className="data-card flex items-center justify-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span>Education</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="work" className="space-y-6 animate-fade-in">
            {filteredExperience.map((item) => (
              item.type === 'work' && (
                <Card 
                  key={item.id} 
                  className={`data-card overflow-hidden transition-all duration-300 ${expanded === item.id ? 'hover-shadow' : 'hover-expand'}`}
                >
                  <CardContent className="p-0">
                    <div 
                      className="p-6 cursor-pointer" 
                      onClick={() => toggleExpand(item.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Briefcase className="h-5 w-5 text-data-green" />
                            <h3 className="text-xl font-bold">{item.title}</h3>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <Building className="h-4 w-4 text-data-orange" />
                            <span>{item.company}</span>
                            <span className="text-gray-400">•</span>
                            <span>{item.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 text-gray-500 text-sm">
                            <Calendar className="h-4 w-4" />
                            <span>{item.period}</span>
                          </div>
                          {expanded === item.id ? 
                            <ChevronUp className="h-5 w-5 text-data-green" /> : 
                            <ChevronDown className="h-5 w-5 text-data-green" />
                          }
                        </div>
                      </div>
                    </div>
                    
                    {expanded === item.id && (
                      <div className="px-6 pb-6 pt-2 border-t border-gray-100 animate-unfold">
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-500 mb-2">RESPONSIBILITIES</h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            {item.description.map((point, idx) => (
                              <li key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 mb-2">SKILLS USED</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, idx) => (
                              <Badge 
                                key={idx} 
                                className="bg-data-green/10 text-data-green tool-badge"
                                style={{ animationDelay: `${idx * 100}ms` }}
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            ))}
          </TabsContent>
          
          <TabsContent value="education" className="space-y-6 animate-fade-in">
            {filteredExperience.map((item) => (
              item.type === 'education' && (
                <Card 
                  key={item.id} 
                  className={`data-card overflow-hidden transition-all duration-300 ${expanded === item.id ? 'hover-shadow' : 'hover-expand'}`}
                >
                  <CardContent className="p-0">
                    <div 
                      className="p-6 cursor-pointer" 
                      onClick={() => toggleExpand(item.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <GraduationCap className="h-5 w-5 text-data-green" />
                            <h3 className="text-xl font-bold">{item.degree}</h3>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <Building className="h-4 w-4 text-data-orange" />
                            <span>{item.institution}</span>
                            <span className="text-gray-400">•</span>
                            <span>{item.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 text-gray-500 text-sm">
                            <Calendar className="h-4 w-4" />
                            <span>{item.period}</span>
                          </div>
                          {expanded === item.id ? 
                            <ChevronUp className="h-5 w-5 text-data-green" /> : 
                            <ChevronDown className="h-5 w-5 text-data-green" />
                          }
                        </div>
                      </div>
                    </div>
                    
                    {expanded === item.id && (
                      <div className="px-6 pb-6 pt-2 border-t border-gray-100 animate-unfold">
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-500 mb-2">PROGRAM DETAILS</h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            {item.description.map((point, idx) => (
                              <li key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 mb-2">ACHIEVEMENTS</h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            {item.achievements.map((achievement, idx) => (
                              <li 
                                key={idx} 
                                className="animate-fade-in" 
                                style={{ animationDelay: `${idx * 100}ms` }}
                              >
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            ))}
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-10">
          <Button 
            variant="outline" 
            className="border-data-green text-data-green hover:bg-data-green/10 animate-pulse-glow"
          >
            Download Full Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
