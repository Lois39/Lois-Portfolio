import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    name: 'Adekunle Bamidele',
    role: 'CEO, Pro-Ice Limited',
    company: 'Pro-Ice Limited',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'Lois delivered exceptional work on our e-commerce platform. Her attention to detail and technical expertise exceeded our expectations. The project was completed ahead of schedule with outstanding quality.',
  },
  {
    id: 2,
    name: 'MD Ahmed Olusegun',
    role: 'Product Manager',
    company: 'Client',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'Working with Lois was a game-changer for our website project. Her React skills combined with solid development capabilities made our website both beautiful and functional.',
  },
  // {
  //   id: 3,
  //   name: 'Emily Rodriguez',
  //   role: 'Marketing Director',
  //   company: 'Creative Agency',
  //   image: '/api/placeholder/80/80',
  //   rating: 5,
  //   text: 'Lois created an amazing brand identity system for us. Her creative vision and professional approach helped establish our brand in the market. Highly recommended!',
  // },
  // {
  //   id: 4,
  //   name: 'David Wilson',
  //   role: 'CTO',
  //   company: 'DataFlow Solutions',
  //   image: '/api/placeholder/80/80',
  //   rating: 5,
  //   text: 'The dashboard analytics platform Lois built for us is incredible. The complex data visualization is both intuitive and powerful. Our team productivity increased significantly.',
  // },
  // {
  //   id: 5,
  //   name: 'Lisa Thompson',
  //   role: 'Founder',
  //   company: 'StartupBoost',
  //   image: '/api/placeholder/80/80',
  //   rating: 5,
  //   text: 'Lois is a true professional. She understood our vision perfectly and delivered a social media platform that exceeded all our expectations. Great communication throughout the project.',
  // }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-animated py-12 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">

        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-muted-foreground">CLIENT</span>{' '}
            <span className="glow-text">TESTIMONIALS</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-purple mt-6"></div>
        </div>

        {/* Main Carousel Card - Widened for Mobile */}
        <Card className="card-glow p-6 sm:p-8 md:p-12 mb-8 md:mb-12 animate-scale-in w-full">
          <div className="text-center relative">

            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center glow-border">
                <Quote className="text-primary" size={18} />
              </div>
            </div>

            <div className="flex justify-center mb-4 sm:mb-6 mt-6 sm:mt-8">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star 
                  key={i} 
                  className="text-yellow-400 fill-current animate-glow-pulse" 
                  size={20}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>

            <blockquote className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed mb-6 sm:mb-8 max-w-4xl mx-auto animate-fade-in px-2">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <div className="flex items-center justify-center space-x-3 sm:space-x-4 animate-fade-in">

              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary/40 to-purple-500/40 rounded-full flex items-center justify-center profile-glow">
                <span className="text-sm sm:text-base font-bold text-primary">
                  {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <div className="text-left">
                <h3 className="font-bold text-base sm:text-lg glow-text">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-primary text-xs sm:text-sm font-medium">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-3 sm:space-x-4 mt-6 sm:mt-8">
              <Button
                onClick={handlePrevious}
                className="btn-outline-glow w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              >
                <ChevronLeft size={18} />
              </Button>

              <div className="flex space-x-1 sm:space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`
                      w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300
                      ${index === currentIndex 
                        ? 'bg-primary glow-purple scale-125' 
                        : 'bg-primary/30 hover:bg-primary/50'
                      }
                    `}
                  />
                ))}
              </div>

              <Button
                onClick={handleNext}
                className="btn-outline-glow w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              >
                <ChevronRight size={18} />
              </Button>
            </div>
          </div>
        </Card>

        {/* Testimonial Cards Grid - Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className={`
                card-glow p-4 sm:p-6 hover-glow cursor-pointer transition-all duration-300
                animate-fade-in w-full
                ${index === currentIndex ? 'border-primary/50 glow-purple' : ''}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleDotClick(index)}
            >

              <div className="flex mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={14} />
                ))}
              </div>

              <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary/40 to-purple-500/40 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16 animate-fade-in">
          <h3 className="text-xl sm:text-2xl font-bold glow-text mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base mb-6">
            Join these satisfied clients and let's create something amazing together
          </p>
          <Link to="/contact">
            <Button className="btn-glow w-full sm:w-auto">
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}