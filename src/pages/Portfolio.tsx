import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Filter } from 'lucide-react';
import portfolio1 from '@/assets/portfolio-1.png';
import portfolio2 from '@/assets/portfolio-2.png';
import portfolio3 from '@/assets/portfolio-3.png';
import portfolio4 from '@/assets/portfolio-4.png';
import portfolio5 from '@/assets/portfolio-5.png';
import portfolio6 from '@/assets/portfolio-6.png';
import portfolio7 from '@/assets/portfolio-7.png';
import portfolio8 from '@/assets/portfolio-8.png';

const categories = ['All', 'Landing Pages', 'Dashboards', 'Portfolios', 'Advanced Websites', 'Minor Websites'];

const projects = [
  {
    id: 1,
    title: 'NOVA E-Commerce Platform',
    category: 'Advanced Websites',
    description: 'Modern e-commerce platform with advanced filtering and payment integration',
    image: portfolio1,
    tech: ['React', 'Tailwind CSS', 'Stripe'],
    liveUrl: 'https://novafashion.netlify.app/',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'PrepWise',
    category: 'Advanced Websites',
    description: 'Interview preparation platform with personalized practice and role-specific mock sessions',
    image: portfolio2,
    tech: ['React', 'TypeScript', 'Supabase'],
    liveUrl: 'https://prepwiseai.netlify.app/',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Savore Restaurant',
    category: 'Advanced Websites',
    description: 'Elegant and fully responsive restaurant website featuring an interactive menu, online table reservations, and dynamic chef specials section.',
    image: portfolio3,
    tech: ['React', 'Tailwind CSS'],
    liveUrl: 'https://savorerestaurants.netlify.app/',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Hikari Tales',
    category: 'Advanced Websites',
    description: 'Immersive manga reading platform with a vast library, high-resolution pages, customizable reading modes, and user favorites tracking.',
    image: portfolio4,
    tech: ['React', 'Tailwind CSS', 'Typescript'],
    liveUrl: 'https://hikaritales.netlify.app/',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Hikari Tales Admin Portal',
    category: 'Dashboards',
    description: 'Comprehensive admin dashboard for managing manga uploads, chapters, genres, user accounts, and analytics with real-time updates.',
    image: portfolio5, 
    tech: ['React', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://mangaverse-admin.netlify.app/',
    githubUrl: '#'
  },
  {
  id: 6,
  title: 'Luxia Hotels',
  category: 'Advanced Websites',
  description: 'Modern hotel booking platform with real-time room availability, interactive gallery, location map, and seamless online reservations for guests worldwide.',
  image: portfolio6,
  tech: ['React', 'Tailwind CSS', 'TypeScript'],
  liveUrl: 'https://luxiahotels.netlify.app/',
  githubUrl: '#'
},
{
  id: 7,
  title: 'Pretty Pink Donuts',
  category: 'Advanced Websites',
  description: 'Deliciously designed donut shop website featuring an interactive product menu, flavor customizer, online ordering, and smooth checkout experience with sweet animations.',
  image: portfolio7,
  tech: ['React', 'Tailwind CSS', 'TypeScript'],
  liveUrl: 'https://prettypinkdonuts.netlify.app/',
  githubUrl: '#'
},
{
  id: 8,
  title: 'RidoPay',
  category: 'Landing Pages',
  description:
    'Modern financial payment platform landing page that highlights seamless transactions, secure payment gateways, and global transfers — featuring glassy gradients, smooth scroll effects, and responsive Tailwind design.',
  image: portfolio8,
  tech: ['React.js', 'Tailwind CSS', 'TypeScript'],
  liveUrl: 'https://rido-pay.netlify.app/',
  githubUrl: '#'
},
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
                <div className="mb-3">
                  <Badge className="bg-primary/20 text-primary border border-primary/30 text-xs">
                    {project.category}
                  </Badge>
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