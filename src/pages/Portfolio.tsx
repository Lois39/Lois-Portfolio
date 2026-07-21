import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Filter } from 'lucide-react';

import portfolio1 from '@/assets/3.png';
import portfolio2 from '@/assets/10.png';
import portfolio3 from '@/assets/4.png';
import portfolio4 from '@/assets/12.png';
import portfolio5 from '@/assets/8.png';
import portfolio6 from '@/assets/9.png';
import portfolio7 from '@/assets/1.png';
import portfolio8 from '@/assets/11.png';
import portfolio9 from '@/assets/5.png';
import portfolio10 from '@/assets/6.png';
import portfolio11 from '@/assets/7.png';

const categories = ['All', 'Landing Pages', 'Dashboards', 'Progressive Web App', 'Advanced Websites'];

const projects = [
  {
    id: 1,
    title: 'KoinSave',
    category: 'Advanced Websites',
    description: 'A comprehensive financial platform for savings, investment tracking, and wealth management with real-time analytics.',
    image: portfolio1,
    tech: ['React', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://koinsave.co/',
    githubUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Chic Collective',
    category: 'Advanced Websites',
    description: 'Modern e-commerce platform with advanced filtering and payment integration',
    image: portfolio2,
    tech: ['React', 'Tailwind CSS', 'Stripe'],
    liveUrl: 'https://chic-collective-fashion-brand.netlify.app/',
    githubUrl: '#',
    featured: false
  },
  {
    id: 3,
    title: 'Crowns Estate',
    category: 'Advanced Websites',
    description: 'Modern real estate platform for property listings, agent profiles, and seamless property discovery',
    image: portfolio3,
    tech: ['React', 'TypeScript', 'Supabase'],
    liveUrl: 'https://crowns-estate.netlify.app/',
    githubUrl: '#',
    featured: false
  },
  {
    id: 4,
    title: 'Planora',
    category: 'Landing Pages',
    description: 'A conversion-focused SaaS landing page designed to showcase features, pricing, and product value with clarity',
    image: portfolio4,
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://planoraapp.netlify.app/',
    githubUrl: '#',
    featured: false
  },
  {
    id: 5,
    title: 'Build Ark',
    category: 'Advanced Websites',
    description: 'Modern web application for a construction and architecture firm featuring project portfolios and service offerings.',
    image: portfolio5,
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://build-ark.vercel.app/',
    githubUrl: '#',
    featured: false
  },
  {
    id: 6,
    title: 'Sand Express',
    category: 'Progressive Web App',
    description: 'Logistics and delivery platform with tracking, service management, and a streamlined booking system.',
    image: portfolio6,
    tech: ['React', 'Tailwind CSS', 'Node.js'],
    liveUrl: 'https://www.sandexpress.net/',
    githubUrl: '#',
    featured: false
  },
  {
    id: 7,
    title: "Luchi's Kitchen",
    category: 'Advanced Websites',
    description: 'Modern catering services website for Luchi\'s Kitchen featuring menu showcases, ambiance highlights, and seamless online presence.',
    image: portfolio7,
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://www.luchisonkitchen.com/',
    githubUrl: '#',
    featured: false
  },
  {
    id: 8,
    title: 'Lovie Five',
    category: 'Landing Pages',
    description: 'Elegant e-commerce storefront with a focus on product presentation and smooth checkout experiences.',
    image: portfolio8,
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://lovie-five.vercel.app/',
    githubUrl: '#',
    featured: false
  },
  {
    id: 9,
    title: 'Saltech AI Academy',
    category: 'Advanced Websites',
    description: 'Educational platform offering AI courses, interactive learning materials, and student progress tracking.',
    image: portfolio9,
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://www.saltechaiacademy.com/',
    githubUrl: '#',
    featured: false
  },
  {
    id: 10,
    title: 'Suitroh',
    category: 'Advanced Websites',
    description: 'Professional corporate website with modern animations and service showcases for business clients.',
    image: portfolio10,
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://www.suitroh.com/',
    githubUrl: '#',
    featured: false
  },
  {
    id: 11,
    title: 'School Flow',
    category: 'Dashboards',
    description: 'Comprehensive school management system featuring student dashboards, course tracking, and administrative tools.',
    image: portfolio11,
    tech: ['Next.js', 'Tailwind CSS', 'Prisma'],
    liveUrl: 'https://school-flow-ochre.vercel.app/',
    githubUrl: '#',
    featured: false
  }
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-animated py-12 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-muted-foreground">MY</span>{' '}
            <span className="glow-text">PORTFOLIO</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Explore my latest projects showcasing innovative solutions and creative designs
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-purple mt-6"></div>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-12 animate-fade-in max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                ${selectedCategory === category 
                  ? 'btn-glow' 
                  : 'btn-outline-glow'
                }
                animate-scale-in
                w-full sm:w-auto text-sm sm:text-base
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="card-glow group hover-glow overflow-hidden animate-fade-in w-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 rounded text-sm sm:text-base"
                  >
                    <ExternalLink size={14} className="mr-1 sm:mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="mb-3 flex gap-2 flex-wrap">
                  <Badge className="bg-primary/20 text-primary border border-primary/30 text-xs">
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge className="bg-amber-500/20 text-amber-500 border border-amber-500/30 text-xs animate-pulse">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-3 glow-text group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-xs sm:text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-secondary/50 text-xs rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-secondary/50 text-xs rounded border border-border">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow w-full inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded text-sm sm:text-base"
                  >
                    <ExternalLink size={14} className="mr-1 sm:mr-2" />
                    View Live Demo
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
