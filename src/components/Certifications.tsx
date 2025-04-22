
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  credentialURL?: string; 
  skills: string[];
  logo?: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    name: "AWS Academy Graduate - AWS Academy Cloud Architecting",
    issuer: "Amazon Web Services",
    date: "October 21, 2022",
    credentialId: "AWS-9870",
    credentialURL: "https://www.credly.com/badges/e6801561-8dca-4837-8709-72ca0e05ac22/linked_in_profile",
    skills: ["Machine Learning", "AWS", "Cloud Computing"],
    logo: "/cloud1.png",
  },
  {
    id: 2,
    name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "Amazon Web services",
    date: "September 11, 2022",
    credentialId: "TF-DEV-67890",
    credentialURL: "https://www.credly.com/badges/6029d292-64f9-4d09-b1b8-99a089e3cf9b/linked_in_profile",
    skills: ["AWS", "Cloud Computing"],
    logo: "/cloud2.png",
  },
];

const ITEMS_PER_PAGE = 2;

const Certifications = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate pagination
  const totalPages = Math.ceil(certifications.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCertifications = certifications.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of certifications section
    document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Professional <span className="gradient-heading">Certifications</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Industry recognitions and technical certifications that validate my expertise in data science and machine learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {paginatedCertifications.map((cert) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: cert.id * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard(cert.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="h-full"
            >
              <Card className={`data-card h-full transition-all duration-300 ${
                hoveredCard === cert.id ? "transform translate-y-[-8px] shadow-lg border-data-green/20" : ""
              }`}>
                <CardContent className="p-0 h-full">
                  <div className="flex flex-col h-full">
                    {/* Certificate Header with Logo */}
                    <div className="p-4 bg-gradient-to-r from-data-green/10 to-data-orange/10 rounded-t-lg">
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-white shadow-md bg-white flex items-center justify-center">
                          {cert.logo ? (
                            <img 
                              src={cert.logo} 
                              alt={`${cert.issuer} logo`} 
                              className="h-full w-full object-cover" 
                            />
                          ) : (
                            <Award className="h-8 w-8 text-data-green" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-lg line-clamp-2">{cert.name}</h3>
                            {cert.credentialURL && (
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <a 
                                      href={cert.credentialURL} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-data-green hover:text-data-orange transition-colors"
                                    >
                                      <ExternalLink className="h-4 w-4" />
                                    </a>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>View credential</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{cert.issuer}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Certificate Details */}
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                        <Calendar className="h-4 w-4" />
                        <span>Issued: {cert.date}</span>
                      </div>
                      
                      <div className="mb-4 flex-1">
                        <p className="text-sm text-gray-600 mb-1">Credential ID:</p>
                        <p className="font-mono text-sm bg-gray-100 p-2 rounded">{cert.credentialId}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Skills:</p>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, idx) => (
                            <Badge 
                              key={idx} 
                              className="bg-data-green/10 text-data-green animate-fade-in"
                              style={{ animationDelay: `${idx * 100}ms` }}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)} 
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      onClick={() => handlePageChange(i + 1)}
                      isActive={currentPage === i + 1}
                      className="cursor-pointer"
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)} 
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
