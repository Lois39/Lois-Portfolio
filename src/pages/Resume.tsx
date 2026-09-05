import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Briefcase,
  GraduationCap,
  Award,
  Download,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Globe,
  User,
  Code2,
  ExternalLink
} from 'lucide-react';

const RESUME_FILE = '/Lois-Okereke-Resume.pdf';

const summary =
  'Frontend Engineer with 4+ years of experience building production-grade web apps and dashboards for SaaS, fintech, and B2B platforms. Skilled in React, TypeScript, Next.js, and modern state management. Experienced in creating scalable component architectures, integrating REST/GraphQL APIs, implementing real-time features, and delivering high-performance, data-driven UIs.';

const contact = [
  { icon: Phone, label: '+234 912 083 8407', href: 'tel:+2349120838407' },
  { icon: Mail, label: 'okerekelois2@gmail.com', href: 'mailto:okerekelois2@gmail.com' },
  { icon: Globe, label: 'My Portfolio', href: '/' }
];

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Optisoft',
    location: 'Lagos, NG',
    period: 'February 2026 - Present',
    description:
      'Building scalable product features alongside designers and senior engineers, with a focus on reusable UI and engineering best practices.',
    achievements: [
      'Collaborated with UI/UX designers to build scalable React and Next.js features',
      'Worked with senior developers on code reviews and frontend architecture decisions',
      'Built reusable UI components while following engineering best practices from senior team members'
    ]
  },
  {
    title: 'Frontend Engineer',
    company: 'Lagetronix - (Contract)',
    location: 'Lagos, NG',
    period: 'April 2025 - December 2025',
    description:
      'Led a major framework migration and built the shared component foundation powering the product’s real-time dashboards.',
    achievements: [
      'Led migration from React 16 to Next.js 13 App Router, improving load time by 35%',
      'Built a modular, reusable component library with Storybook, increasing dev speed by 40%',
      'Implemented real-time dashboards using WebSockets + React Query'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'LexJon Technologies - (Contract)',
    location: 'Lagos, NG',
    period: 'November 2024 - January 2025',
    description:
      'Designed and delivered a data-heavy dashboard product, focusing on architecture, API integration, and render performance.',
    achievements: [
      'Designed a modular dashboard architecture using React + TypeScript',
      'Integrated REST & GraphQL APIs with optimized caching and error handling',
      'Implemented data virtualization using React Window (render speed improved 60%)'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'Pro-Ice LTD - (Part-Time)',
    location: 'Lagos, NG',
    period: 'April 2024 - June 2025',
    description:
      'Modernized a legacy codebase and raised the quality bar for performance and accessibility across the product.',
    achievements: [
      'Rewrote legacy class components into modern functional components with hooks',
      'Integrated GraphQL services using Apollo Client for faster and more stable data fetching',
      'Enhanced performance and accessibility (Lighthouse score improved 74 → 95)'
    ]
  }
];

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Astro', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'SCSS', 'MUI', 'Headless UI']
  },
  {
    category: 'State Management',
    skills: ['Zustand', 'Jotai', 'Effector']
  },
  {
    category: 'Data Fetching',
    skills: ['React Query (TanStack)', 'Apollo Client']
  },
  {
    category: 'Data Visualization',
    skills: ['Recharts', 'ECharts']
  },
  {
    category: 'Architecture & Performance',
    skills: ['SSR/SSG', 'Code splitting', 'Caching', 'Virtualization', 'Accessibility']
  },
  {
    category: 'API Integration',
    skills: ['REST', 'GraphQL']
  },
  {
    category: 'Tooling',
    skills: ['Storybook', 'Git', 'GitHub', 'Vercel', 'Jira', 'CI/CD']
  }
];

const education = [
  {
    degree: 'Frontend Engineering Course Certificate',
    school: 'Coursera',
    period: '2021 - 2024',
    description:
      'Structured coursework covering modern frontend engineering: HTML, CSS, JavaScript, React, TypeScript, and production-ready best practices.'
  }
];

const projects = [
  { name: 'School Flow', url: 'https://school-flow-ochre.vercel.app/', recent: true },
  { name: 'KoinSave', url: 'https://koinsave.co/' },
  { name: 'Saltech AI Academy', url: 'https://www.saltechaiacademy.com/' },
  { name: 'SandExpress', url: 'https://www.sandexpress.net/' }
];

export default function Resume() {
  return (
    <div className="min-h-screen bg-animated py-8 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-muted-foreground">MY</span>{' '}
            <span className="glow-text">RESUME</span>
          </h1>
          <p className="text-lg sm:text-xl font-semibold text-primary mb-2">
            Lois Okereke &middot; Frontend Engineer
          </p>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-6">
            4+ years building production-grade web apps and dashboards for SaaS, fintech, and B2B platforms
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {contact.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 border border-primary/20 rounded-full px-4 py-2 hover-glow"
              >
                <item.icon size={14} className="text-primary" />
                {item.label}
              </a>
            ))}
          </div>

          <a href={RESUME_FILE} download="Lois-Okereke-Resume.pdf">
            <Button className="btn-glow w-full sm:w-auto">
              <Download size={20} className="mr-2" />
              Download Resume
            </Button>
          </a>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-purple mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <Card className="card-glow p-4 sm:p-6 md:p-8 animate-fade-in-left w-full">
              <div className="flex items-center mb-4 md:mb-6">
                <User className="text-primary mr-3" size={24} />
                <h2 className="text-2xl sm:text-3xl font-bold glow-text">Summary</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {summary}
              </p>
            </Card>

            <Card className="card-glow p-4 sm:p-6 md:p-8 animate-fade-in-left w-full">
              <div className="flex items-center mb-6 md:mb-8">
                <Briefcase className="text-primary mr-3" size={24} />
                <h2 className="text-2xl sm:text-3xl font-bold glow-text">Experience</h2>
              </div>

              <div className="space-y-6 md:space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-6 md:pl-8 animate-fade-in w-full"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full glow-purple"></div>
                    {index < experiences.length - 1 && (
                      <div className="absolute left-1.5 top-5 w-0.5 h-full bg-primary/30"></div>
                    )}

                    <div className="hover-glow p-4 sm:p-6 rounded-lg transition-all duration-300 w-full">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-primary glow-text">
                            {exp.title}
                          </h3>
                          <p className="text-base sm:text-lg font-semibold text-foreground">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-left sm:text-right mt-2 sm:mt-0">
                          <Badge className="bg-primary/20 text-primary border border-primary/30 mb-2 w-full sm:w-auto justify-start sm:justify-center">
                            <Calendar size={12} className="mr-1" />
                            {exp.period}
                          </Badge>
                          <p className="text-sm text-muted-foreground flex items-center">
                            <MapPin size={12} className="mr-1" />
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-primary">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="text-sm text-muted-foreground flex items-start"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0 glow-purple"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="card-glow p-4 sm:p-6 md:p-8 animate-fade-in-left w-full">
              <div className="flex items-center mb-4 md:mb-6">
                <ExternalLink className="text-primary mr-3" size={24} />
                <h2 className="text-2xl sm:text-3xl font-bold glow-text">Notable Projects</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                {projects.map((project, index) => (
                  <a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-fade-in hover-glow flex items-center justify-between gap-3 p-4 rounded-lg border border-primary/20 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-sm sm:text-base">
                        {project.name}
                      </p>
                      {project.recent && (
                        <span className="text-xs text-muted-foreground">Recent project</span>
                      )}
                    </div>
                    <ExternalLink size={16} className="text-primary flex-shrink-0" />
                  </a>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6 md:space-y-8">
            <Card className="card-glow p-4 sm:p-6 animate-fade-in-right w-full">
              <div className="flex items-center mb-4 md:mb-6">
                <Code2 className="text-primary mr-3" size={20} />
                <h2 className="text-xl sm:text-2xl font-bold glow-text">Key Skills</h2>
              </div>

              <div className="space-y-4 md:space-y-5">
                {skillGroups.map((group, index) => (
                  <div
                    key={group.category}
                    className="animate-fade-in w-full"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="font-bold text-primary glow-text mb-2 text-sm sm:text-base">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <Badge
                          key={skill}
                          className="bg-primary/20 text-primary border border-primary/30 text-xs font-normal"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="card-glow p-4 sm:p-6 animate-fade-in-right w-full" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-4 md:mb-6">
                <GraduationCap className="text-primary mr-3" size={20} />
                <h2 className="text-xl sm:text-2xl font-bold glow-text">Education</h2>
              </div>

              <div className="space-y-4 md:space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="animate-fade-in hover-glow p-3 sm:p-4 rounded-lg transition-all duration-300 w-full"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="font-bold text-primary glow-text mb-2 text-sm sm:text-base">
                      {edu.degree}
                    </h3>
                    <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                      {edu.school}
                    </p>
                    <Badge className="bg-primary/20 text-primary border border-primary/30 mb-3 text-xs w-full sm:w-auto justify-start sm:justify-center">
                      {edu.period}
                    </Badge>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="card-glow p-4 sm:p-6 animate-fade-in-right w-full" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center mb-4 md:mb-6">
                <Award className="text-primary mr-3" size={20} />
                <h2 className="text-xl sm:text-2xl font-bold glow-text">Get the full CV</h2>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                Download a PDF copy of my resume with the complete breakdown of my experience, skills, and project links.
              </p>
              <a href={RESUME_FILE} download="Lois-Okereke-Resume.pdf" className="block">
                <Button className="btn-glow w-full">
                  <Download size={18} className="mr-2" />
                  Download PDF
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
