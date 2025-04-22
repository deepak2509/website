
import React, { useState } from 'react';
import { Progress } from "@/components/ui/progress";
import { 
  BarChart as BarChartIcon, 
  Code, 
  Database, 
  LineChart,
  Brain,
  ChevronDown,
  ChevronUp,
  Shuffle,
  SlidersHorizontal,
  PieChart
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend
} from "recharts";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "R", level: 85 },
      { name: "SQL", level: 90 },
      { name: "Java", level: 70 }
    ]
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Scikit-learn", level: 92 },
      { name: "TensorFlow", level: 88 },
      { name: "PyTorch", level: 82 },
      { name: "XGBoost", level: 90 }
    ]
  },
  {
    category: "Data Visualization",
    skills: [
      { name: "Tableau", level: 85 },
      { name: "Power BI", level: 75 },
      { name: "Matplotlib", level: 92 },
      { name: "D3.js", level: 70 }
    ]
  },
  {
    category: "Big Data Technologies",
    skills: [
      { name: "Hadoop", level: 75 },
      { name: "Spark", level: 85 },
      { name: "Kafka", level: 70 },
      { name: "Airflow", level: 80 }
    ]
  }
];

const technologiesData = [
  { name: 'Python', value: 95, color: '#4A9D5E' },
  { name: 'SQL', value: 90, color: '#FF7D45' },
  { name: 'TensorFlow', value: 88, color: '#8B6E4E' },
  { name: 'PyTorch', value: 82, color: '#FDBC64' },
  { name: 'Spark', value: 85, color: '#2C2A29' },
];

const radarData = [
  { subject: 'ML', A: 92, fullMark: 100 },
  { subject: 'Viz', A: 85, fullMark: 100 },
  { subject: 'Data Eng', A: 82, fullMark: 100 },
  { subject: 'Coding', A: 90, fullMark: 100 },
  { subject: 'Stats', A: 88, fullMark: 100 },
  { subject: 'Cloud', A: 78, fullMark: 100 },
];

const Skills = () => {
  const [showChart, setShowChart] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [chartType, setChartType] = useState<'bar' | 'radar'>('bar');
  const [compareMode, setCompareMode] = useState(false);
  const [highlightedSkills, setHighlightedSkills] = useState<string[]>([]);
  const { toast } = useToast();

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };

  const toggleHighlightSkill = (skill: string) => {
    if (highlightedSkills.includes(skill)) {
      setHighlightedSkills(prev => prev.filter(s => s !== skill));
    } else {
      if (highlightedSkills.length >= 3) {
        toast({
          title: "Maximum selection reached",
          description: "You can compare up to 3 skills at once. Please deselect one to continue.",
          variant: "destructive"
        });
        return;
      }
      setHighlightedSkills(prev => [...prev, skill]);
      if (!compareMode) setCompareMode(true);
    }
  };

  const randomizeSkills = () => {
    const allSkills = skillCategories.flatMap(category => 
      category.skills.map(skill => skill.name)
    );
    
    // Randomly select 2-3 skills
    const count = Math.floor(Math.random() * 2) + 2; // 2 or 3
    const randomSkills: string[] = [];
    
    while (randomSkills.length < count) {
      const randomIndex = Math.floor(Math.random() * allSkills.length);
      const skill = allSkills[randomIndex];
      if (!randomSkills.includes(skill)) {
        randomSkills.push(skill);
      }
    }
    
    setHighlightedSkills(randomSkills);
    setCompareMode(true);
    
    toast({
      title: "Skills randomized!",
      description: `Now comparing: ${randomSkills.join(', ')}`,
    });
  };

  // Get comparison data for highlighted skills
  const comparisonData = highlightedSkills.map(skillName => {
    for (const category of skillCategories) {
      const skill = category.skills.find(s => s.name === skillName);
      if (skill) {
        return {
          name: skill.name,
          value: skill.level,
          category: category.category
        };
      }
    }
    return null;
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Technical <span className="gradient-heading">Skills</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            My expertise spans various data science and machine learning technologies,
            allowing me to deliver end-to-end solutions for complex data problems.
          </p>
          
          <Tabs defaultValue="visualize" className="w-full max-w-lg mx-auto mb-8">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="visualize">Visualize Skills</TabsTrigger>
              <TabsTrigger value="compare">Compare Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="visualize" className="pt-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-gray-700">Progress Bars</span>
                <Switch 
                  checked={showChart} 
                  onCheckedChange={setShowChart} 
                  className="data-[state=checked]:bg-data-green"
                />
                <span className="text-gray-700">Chart View</span>
              </div>
              
              {showChart && (
                <div className="flex items-center justify-center gap-3 mt-4">
                  <Button 
                    variant={chartType === 'bar' ? "default" : "outline"}
                    size="sm"
                    onClick={() => setChartType('bar')}
                    className={chartType === 'bar' ? "bg-data-green hover:bg-data-green/90" : ""}
                  >
                    <BarChartIcon className="h-4 w-4 mr-1" />
                    Bar Chart
                  </Button>
                  <Button 
                    variant={chartType === 'radar' ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setChartType('radar')}
                    className={chartType === 'radar' ? "bg-data-green hover:bg-data-green/90" : ""}
                  >
                    <PieChart className="h-4 w-4 mr-1" />
                    Radar Chart
                  </Button>
                </div>
              )}
            </TabsContent>
            <TabsContent value="compare" className="pt-4 text-center">
              <p className="text-gray-600 mb-4">Select up to 3 skills to compare or use random selection.</p>
              <div className="flex items-center justify-center gap-3 mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={randomizeSkills}
                  className="flex items-center gap-2"
                >
                  <Shuffle className="h-4 w-4" />
                  Random Selection
                </Button>
                <Button
                  variant={compareMode ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCompareMode(!compareMode)}
                  className={compareMode ? "bg-data-green hover:bg-data-green/90" : ""}
                >
                  <SlidersHorizontal className="h-4 w-4 mr-1" />
                  Compare: {compareMode ? "ON" : "OFF"}
                </Button>
              </div>
              
              {highlightedSkills.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {highlightedSkills.map(skill => (
                    <Button 
                      key={skill}
                      variant="secondary" 
                      size="sm"
                      onClick={() => toggleHighlightSkill(skill)}
                      className="bg-data-orange/20 hover:bg-data-orange/30 text-data-brown"
                    >
                      {skill} ✕
                    </Button>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
        
        {showChart ? (
          <Card className="p-6 mb-12 shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  {chartType === 'bar' ? (
                    <BarChart 
                      data={compareMode ? comparisonData : technologiesData} 
                      layout="vertical" 
                      margin={{ top: 20, right: 20, bottom: 20, left: 70 }}
                    >
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis type="category" dataKey="name" width={100} />
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Proficiency']}
                        contentStyle={{ 
                          backgroundColor: 'white',
                          border: '1px solid #e2e8f0',
                          borderRadius: '0.5rem',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Legend />
                      <Bar dataKey="value" animationDuration={1500} label={{ position: 'right', fill: '#666' }}>
                        {(compareMode ? comparisonData : technologiesData).map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.color || ['#4A9D5E', '#FF7D45', '#8B6E4E'][index % 3]} 
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  ) : (
                    <RadarChart outerRadius={150} width={500} height={350} data={radarData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar
                        name="Skills"
                        dataKey="A"
                        stroke="#4A9D5E"
                        fill="#4A9D5E"
                        fillOpacity={0.6}
                      />
                      <Legend />
                    </RadarChart>
                  )}
                </ResponsiveContainer>
              </div>
              <div className="text-center mt-6">
                <Button 
                  variant="outline" 
                  className="border-data-green text-data-green hover:bg-data-green/10 mt-4"
                  onClick={() => setShowChart(false)}
                >
                  View Detailed Skills
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-16">
            {skillCategories.map((category, idx) => (
              <Collapsible 
                key={idx} 
                open={expandedCategories.includes(category.category)}
                className="border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    {idx % 4 === 0 ? <Database className="h-5 w-5 text-data-green" /> :
                     idx % 4 === 1 ? <Brain className="h-5 w-5 text-data-orange" /> :
                     idx % 4 === 2 ? <LineChart className="h-5 w-5 text-data-brown" /> :
                     <Code className="h-5 w-5 text-data-gold" />}
                    <h3 className="text-xl font-semibold text-data-dark">{category.category}</h3>
                  </div>
                  
                  <CollapsibleTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => toggleCategory(category.category)}
                      className="hover:bg-slate-100"
                    >
                      {expandedCategories.includes(category.category) ? 
                        <ChevronUp className="h-5 w-5" /> : 
                        <ChevronDown className="h-5 w-5" />}
                    </Button>
                  </CollapsibleTrigger>
                </div>
                
                <CollapsibleContent className="mt-4 space-y-6 animate-accordion-down">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className={`transition-all duration-300 ${
                        compareMode ? 'cursor-pointer hover:bg-slate-50 p-2 rounded-md' : ''
                      } ${
                        highlightedSkills.includes(skill.name) ? 'bg-data-green/10 border border-data-green/30 rounded-md p-2' : ''
                      }`}
                      onClick={compareMode ? () => toggleHighlightSkill(skill.name) : undefined}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className={`h-2 bg-slate-200 ${
                          idx % 4 === 0 ? "[&>div]:bg-data-green" : 
                          idx % 4 === 1 ? "[&>div]:bg-data-orange" : 
                          idx % 4 === 2 ? "[&>div]:bg-data-brown" : 
                          "[&>div]:bg-data-gold"
                        }`} 
                      />
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        )}
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-8 text-center">Tools & Technologies</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Python", "R", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", 
              "Numpy", "SQL", "Tableau", "Power BI", "AWS", "GCP", "Docker"
            ].map((tool, idx) => (
              <div 
                key={idx} 
                className={`flex items-center justify-center bg-white p-4 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow hover:border-data-green hover:scale-105 duration-300 cursor-pointer ${
                  compareMode ? 'hover:bg-data-green/10' : ''
                } ${
                  highlightedSkills.includes(tool) ? 'bg-data-green/10 border-data-green' : ''
                }`}
                onClick={compareMode ? () => toggleHighlightSkill(tool) : undefined}
              >
                <span className="font-medium text-gray-700">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
