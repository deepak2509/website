
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  Database, 
  Layers, 
  SearchIcon, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  GraduationCap 
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const faqs = [
  {
    question: "What is your background in data science?",
    answer: "I have a strong foundation in statistics and computer science with over 5 years of experience implementing machine learning solutions across various industries. I started my journey at [University] where I focused on [specific area] and have since worked on projects ranging from predictive analytics to computer vision applications."
  },
  {
    question: "What programming languages do you specialize in?",
    answer: "I primarily work with Python for most of my data science and machine learning projects, utilizing libraries like TensorFlow, PyTorch, and scikit-learn. I'm also proficient in R for statistical analysis, SQL for database operations, and have experience with Java and JavaScript for specific application development."
  },
  {
    question: "Can you explain your approach to data science projects?",
    answer: "I follow a structured approach that starts with clearly defining the problem, followed by data collection and cleaning. I conduct exploratory data analysis to understand patterns, then develop and validate various models. I focus on interpretability alongside performance, and ensure solutions can be effectively deployed in production environments with proper monitoring."
  }
];

const About = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showMore, setShowMore] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About <span className="gradient-heading">Me</span></h2>
            
            <p className="text-gray-700 mb-6">
            I’m a data science and machine learning enthusiast with a solid foundation in computer science and information systems. I specialize in transforming data into actionable insights using tools like Python, SQL, Apache Spark, and AWS. My Interest towards in data science started at Iowa State University, where I worked on projects like customer segmentation using unsupervised learning. I’m passionate about solving real-world problems with scalable, intelligent systems
            </p>
            
            <p className="text-gray-700 mb-6">
            My key projects include developing an end-to-end data pipeline for customer transactions using AWS S3, Glue, and Redshift. I also built a CI/CD pipeline for ETL deployment with GitHub Actions and Terraform, reducing deployment time by 50%. Additionally, I developed a real-time log processing system using Kafka and Spark, enhancing data processing capabilities. These projects showcase my ability to design efficient data pipelines and real-time systems
            </p>
            
            <Collapsible open={showMore}>
              <CollapsibleContent className="animate-accordion-down">
              <p className="text-gray-700 mb-6">
                Currently, as a Graduate Research Assistant at Iowa State, I process large image datasets and apply machine learning models to enhance predictive accuracy and working to train the deep learning models. In my previous role as an Application Developer, I deployed data-driven web applications for multiple industries. I collaborated closely with stakeholders to ensure solutions met their needs and improved user engagement. I’m always excited about new opportunities to innovate and collaborate
                </p>
                <div className="mb-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-data-green" />
                    <div>
                      <h4 className="font-medium">Master's in Management Information systems</h4>
                      <p className="text-sm text-gray-600">Iowa state University,Ames,IA,UnitedStates</p>
                      <p className="text-sm text-gray-600"> 2023-2025(August):Pursuing</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-data-orange" />
                    <div>
                      <h4 className="font-medium">Bachelor's in computer science and engineering</h4>
                      <p className="text-sm text-gray-600">D.V.R&DR.HS MIC college of technology,Andhrapradesh,INDIA</p>
                      <p className="text-sm text-gray-600">(2019-2023)</p>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
            
            <Button 
              variant="outline" 
              onClick={() => setShowMore(!showMore)}
              className="flex items-center gap-2 mb-8 border-data-green text-data-green hover:bg-data-green/10"
            >
              {showMore ? (
                <>Less About Me <ChevronUp className="h-4 w-4" /></>
              ) : (
                <>More About Me <ChevronDown className="h-4 w-4" /></>
              )}
            </Button>
            
            <div className="flex items-center gap-4 text-gray-700">
              <div className="flex items-center gap-2">
                <span className="bg-data-green/20 p-1 rounded">
                  <Database className="h-4 w-4 text-data-green" />
                </span>
                
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-data-orange/20 p-1 rounded">
                  <BarChart className="h-4 w-4 text-data-orange" />
                </span>
                
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 data-card hover:scale-105 transition-transform duration-300">
                <div className="mb-4 bg-data-green/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <BarChart className="h-6 w-6 text-data-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Data Analysis</h3>
                <p className="text-gray-600">
                  Uncovering patterns and trends within complex datasets to inform strategic decision-making.
                </p>
              </Card>
              
              <Card className="p-6 data-card hover:scale-105 transition-transform duration-300">
                <div className="mb-4 bg-data-orange/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Layers className="h-6 w-6 text-data-orange" />
                </div>
                <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
                <p className="text-gray-600">
                  Building predictive models and algorithms that learn from data to solve specific problems.
                </p>
              </Card>
              
              <Card className="p-6 data-card hover:scale-105 transition-transform duration-300">
                <div className="mb-4 bg-data-brown/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <SearchIcon className="h-6 w-6 text-data-brown" />
                </div>
                <h3 className="text-xl font-bold mb-2">Data Mining</h3>
                <p className="text-gray-600">
                  Extracting valuable insights from raw data using statistical and computational techniques.
                </p>
              </Card>
              
              <Card className="p-6 data-card hover:scale-105 transition-transform duration-300">
                <div className="mb-4 bg-data-gold/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <BarChart className="h-6 w-6 text-data-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">Visualization</h3>
                <p className="text-gray-600">
                  Creating compelling visualizations that communicate complex data stories effectively.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
