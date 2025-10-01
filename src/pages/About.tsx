import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Database,
  Trophy,
  Users,
  Music,
  Film
} from 'lucide-react';
import profileImage from '@/assets/lois.jpg';

const skills = [
  { name: 'JavaScript/TypeScript', level: 90, icon: Code2 },
  { name: 'React/Next.js', level: 85, icon: Code2 },
  { name: 'UI/UX Design', level: 55, icon: Palette },
  { name: 'Mobile Development', level: 30, icon: Smartphone },
  { name: 'Backend Development', level: 58, icon: Database },
];

const funFacts = [
  { text: "Did u know i started coding when i was 14(small small though haha)?", icon: Trophy },
  { text: "I'm introverted but talk A LOT when we get to know each other more lol", icon: Users },
{ text: "I code better while listening to music", icon: Music },
{ text: "I'm an anime-loving person", icon: Film },
];

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-animated py-12 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">

        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-muted-foreground">ABOUT</span>{' '}
            <span className="glow-text">ME</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-purple"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">

          <div className="animate-fade-in-left">
            <div className="relative mb-8">
              <div className="relative w-48 h-48 mx-auto lg:mx-0">
                <img
                  src={profileImage}
                  alt="Lois Okereke"
                  className="w-48 h-48 rounded-full object-cover profile-glow animate-float border-4 border-primary/30"
                />

                <div className="absolute inset-0 rounded-full">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-primary/40 rounded-full animate-shimmer-float"
                      style={{
                        top: `${50 + 50 * Math.sin((i * Math.PI * 2) / 12)}%`,
                        left: `${50 + 50 * Math.cos((i * Math.PI * 2) / 12)}%`,
                        animationDelay: `${i * 0.15}s`,
                        animationDuration: '3s',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold glow-text">I'm Lois Okereke</h2>
              <h3 className="text-xl text-primary font-semibold">Frontend Developer & Your Introverted Bestie</h3>
              
              <p className="text-muted-foreground leading-relaxed">
                With over 4 years of experience in web development and design, I specialize in creating 
                beautiful, functional, and user-centered digital experiences. My passion lies in transforming 
                complex problems into simple, elegant solutions.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I believe that great design is not just about how something looks, but how it works. 
                My approach combines technical excellence with creative vision to deliver exceptional results 
                that exceed expectations.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {['Creative', 'Innovative', 'Reliable', 'Detail-oriented', 'Team Player'].map((trait, index) => (
                  <Badge 
                    key={trait} 
                    className="bg-primary/20 text-primary border border-primary/30 glow-border animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-bold mb-8 glow-text">What I Do?</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={skill.name}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Icon size={20} className="text-primary mr-3" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-secondary"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-20 animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-12 glow-text">My Journey</h3>
          <div className="relative">

            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/30 rounded-full"></div>

            <div className="md:hidden absolute left-6 top-0 w-1 h-full bg-primary/30 rounded-full"></div>
            
            {[
              { year: '2021', title: 'Started Learning Web Development', desc: 'Began my journey with HTML, CSS, and JavaScript after my school leaving certificate exams' },
              { year: '2022', title: 'First Freelance Projects', desc: 'Started taking on small projects and building experience' },
              { year: '2023 - 2025', title: 'React & Advanced Frontend', desc: 'Mastered React, TypeScript, and modern frontend tools' },
              { year: '2026(coming soon...)', title: 'Full Stack Development', desc: 'Expanded skills to include backend technologies and databases' }
            ].map((item, index) => (
              <div key={item.year}>

                <div className={`hidden md:flex relative items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="card-glow p-6 hover-glow">
                      <div className="text-primary font-bold text-lg mb-2">{item.year}</div>
                      <h4 className="font-semibold mb-2 glow-text">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full animate-glow-pulse border-4 border-background"></div>
                </div>

                <div className="md:hidden relative flex items-center mb-8 pl-16">
                  <div className="flex-1">
                    <Card className="card-glow p-4 hover-glow">
                      <div className="text-primary font-bold text-base mb-2">{item.year}</div>
                      <h4 className="font-semibold mb-2 glow-text text-sm">{item.title}</h4>
                      <p className="text-muted-foreground text-xs">{item.desc}</p>
                    </Card>
                  </div>
                  <div className="absolute left-5 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full animate-glow-pulse border-2 border-background"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card className="card-glow p-6 sm:p-8 animate-scale-in">
          <h3 className="text-2xl font-bold text-center mb-12 glow-text">Fun Facts About Me</h3>
          
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {funFacts.map((fact, index) => {
    const Icon = fact.icon;
    return (
      <div
        key={index}
        className="text-center group p-6 transition-all duration-300"
      >
        <Icon size={40} className="mx-auto text-primary animate-stroke-glow" />
        <div className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {fact.text}
        </div>
      </div>
    );
  })}
</div>
        </Card>
      </div>
    </div>
  );
}