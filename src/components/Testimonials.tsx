
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote, Star, StarHalf } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image: string;
  tags: string[];
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Working with this data scientist transformed our business approach. The insights extracted from our customer data were truly game-changing and increased our revenue by 35% in just one quarter.",
    author: "Emma Johnson",
    role: "VP of Marketing",
    company: "TechGrowth Inc.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    tags: ["Customer Segmentation", "Marketing Analytics"]
  },
  {
    id: 2,
    quote: "The predictive maintenance system built for our manufacturing line has been incredible. We've reduced downtime by 42% and saved millions in unexpected repair costs.",
    author: "David Chen",
    role: "Director of Operations",
    company: "Industrial Solutions",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    tags: ["Machine Learning", "IoT"]
  },
  {
    id: 3,
    quote: "The dashboard developed for our sales team provides real-time insights that help our reps prioritize leads effectively. It's intuitive, powerful, and has become an essential tool for our sales process.",
    author: "Sarah Williams",
    role: "Sales Director",
    company: "Global Enterprises",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    tags: ["Data Visualization", "Sales Analytics"]
  },
  {
    id: 4,
    quote: "The NLP solution implemented for our customer support team has drastically improved our response times and customer satisfaction scores. It's rare to find someone who understands both the technical and business aspects so well.",
    author: "Michael Rodriguez",
    role: "Customer Experience Lead",
    company: "SaaS Solutions",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    tags: ["NLP", "Customer Support"]
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-4 w-4 fill-data-gold text-data-gold" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-4 w-4 fill-data-gold text-data-gold" />);
    }
    
    return stars;
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Client <span className="gradient-heading">Testimonials</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what clients say about their experience working with me
            on data science projects.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 relative">
          <Carousel
            opts={{
              loop: true,
              align: "center",
            }}
            className="w-full"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="md:basis-4/5 lg:basis-3/4">
                  <div className="p-1">
                    <Card className={cn(
                      "border border-slate-200 shadow-md overflow-hidden transition-all duration-500 h-full",
                      activeIndex === index ? "scale-100" : "scale-95 opacity-70"
                    )}>
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          <div className="bg-gradient-to-br from-data-green/20 to-white md:w-1/3 p-6 flex flex-col items-center justify-center">
                            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-white shadow-lg">
                              <AvatarImage src={testimonial.image} alt={testimonial.author} />
                              <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div className="mt-4 text-center">
                              <h4 className="font-bold text-lg">{testimonial.author}</h4>
                              <p className="text-data-dark text-sm">{testimonial.role}</p>
                              <p className="text-data-dark text-sm">{testimonial.company}</p>
                              <div className="flex justify-center mt-2">
                                {renderStars(testimonial.rating)}
                              </div>
                            </div>
                          </div>
                          <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                            <div>
                              <Quote className="h-10 w-10 text-data-green/20 mb-4" />
                              <p className="text-gray-700 italic mb-6 text-lg">"{testimonial.quote}"</p>
                              <div className="flex flex-wrap gap-2 mt-4">
                                {testimonial.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary" className="bg-data-green/10 text-data-green">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className={`transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
              <CarouselPrevious className="left-0 md:-left-12" />
              <CarouselNext className="right-0 md:-right-12" />
            </div>
          </Carousel>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${activeIndex === index ? 'bg-data-green scale-125' : 'bg-gray-300'}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
