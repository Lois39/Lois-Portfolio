import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Download,
  Calendar,
  MapPin
} from 'lucide-react';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Lagetronix',
    location: 'Lagos, NG',
    period: 'April 2025 - Present',
    description: 'Contributed to the development of several web applications using React and Next.js, implementing responsive designs and optimizing performance by 40%. Collaborated with cross-functional teams to ensure code quality and consistency, and supported peers through code reviews and documentation.',
    achievements: [
      'Optimized performance by 40%',
      'Collaborated with cross-functional teams',
      'Improved code quality through reviews'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'Pro-Ice Ltd',
    location: 'Lagos, NG',
    period: 'April 2024 - Present',
    description: 'Developed and maintained client websites using modern JavaScript frameworks. Collaborated with designers to implement pixel-perfect UI. Improved site performance and accessibility.',
    achievements: [
      'Developed multiple client websites',
      'Implemented pixel-perfect designs',
      'Enhanced site performance and accessibility'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'LexJon Technologies',
    location: 'Lagos, NG',
    period: 'December 2024 - March 2025',
    description: 'Assisted in the development of admin websites. Gained experience with React and state management. Participated in team meetings and client presentations.',
    achievements: [
      'Developed admin website interfaces',
      'Mastered React and state management',
      'Participated in client presentations'
    ]
  }
];

const education = [
  {
    degree: 'Self-Taught Frontend Development',
    school: 'Online Learning & Practice',
    period: '2021 - Present',
    description: 'Comprehensive self-study of modern web technologies including React, TypeScript, Next.js, and Tailwind CSS through various online platforms and hands-on projects.'
  },
  {
    degree: 'Frontend Development Specialization',
    school: 'Various Online Platforms',
    period: '2021 - 2022',
    description: 'Intensive learning covering HTML, CSS, JavaScript, and modern frontend frameworks with focus on best practices and industry standards.'
  }
];

const certifications = [
  {
    name: 'React Developer Certificate',
    issuer: 'Meta',
    year: '2023'
  },
  {
    name: 'Frontend Development Certificate',
    issuer: 'freeCodeCamp',
    year: '2022'
  },
  {
    name: 'JavaScript Algorithms Certificate',
    issuer: 'freeCodeCamp',
    year: '2022'
  }
];

export default function Resume() {
  return (
    <div className="min-h-screen bg-animated py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-muted-foreground">MY</span>{' '}
            <span className="glow-text">RESUME</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            My professional journey and achievements in web development and design
          </p>
            <a
      href="/src/assets/resume.pdf"    
      download="Lois-Okereke-Resume.pdf"
      target="_blank"    
      rel="noopener noreferrer"
    >
      <Button className="btn-glow">
        <Download size={20} className="mr-2" />
        Download Resume
      </Button>
    </a>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-purple mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            <Card className="card-glow p-8 animate-fade-in-left">
              <div className="flex items-center mb-8">
                <Briefcase className="text-primary mr-3" size={28} />
                <h2 className="text-3xl font-bold glow-text">Experience</h2>
              </div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div 
                    key={index}
                    className="relative pl-8 animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >

                    <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full glow-purple"></div>
                    {index < experiences.length - 1 && (
                      <div className="absolute left-1.5 top-5 w-0.5 h-full bg-primary/30"></div>
                    )}

                    <div className="hover-glow p-6 rounded-lg transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-primary glow-text">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold text-foreground">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-primary/20 text-primary border border-primary/30 mb-2">
                            <Calendar size={12} className="mr-1" />
                            {exp.period}
                          </Badge>
                          <p className="text-sm text-muted-foreground flex items-center">
                            <MapPin size={12} className="mr-1" />
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-primary">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li 
                              key={achIndex}
                              className="text-sm text-muted-foreground flex items-center"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 glow-purple"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-8">

            <Card className="card-glow p-6 animate-fade-in-right">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-primary mr-3" size={24} />
                <h2 className="text-2xl font-bold glow-text">Education</h2>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div 
                    key={index}
                    className="animate-fade-in hover-glow p-4 rounded-lg transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="font-bold text-primary glow-text mb-2">
                      {edu.degree}
                    </h3>
                    <p className="font-semibold text-foreground mb-1">
                      {edu.school}
                    </p>
                    <Badge className="bg-primary/20 text-primary border border-primary/30 mb-3 text-xs">
                      {edu.period}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="card-glow p-6 animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center mb-6">
                <Award className="text-primary mr-3" size={24} />
                <h2 className="text-2xl font-bold glow-text">Certifications</h2>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="animate-fade-in hover-glow p-4 rounded-lg transition-all duration-300 border border-primary/20"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="font-bold text-primary glow-text mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-foreground mb-2">{cert.issuer}</p>
                    <Badge className="bg-primary/20 text-primary border border-primary/30 text-xs">
                      {cert.year}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}