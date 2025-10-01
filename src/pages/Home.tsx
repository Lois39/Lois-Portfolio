import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImage from '@/assets/lois.jpg';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState('');
  const roles = ['Frontend Developer', 'Creative Coder', 'Problem Solver'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const role = roles[currentRole];
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= role.length) {
        setTypedText(role.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRole, mounted]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-animated relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        <div className="animate-fade-in-left">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/30 glow-border animate-glow-pulse">
             <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
              Available for Projects
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-muted-foreground">HI THERE!</span>
            <span className="block glow-text">I'M LOIS</span>
          </h1>

          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
              <span className="text-primary glow-text">{typedText}</span>
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Passionate about creating amazing digital experiences that blend 
              beautiful design with powerful functionality. Let's build something incredible together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/portfolio">
              <Button className="btn-glow group">
                View My Work
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <a
      href="/src/assets/resume.pdf"    
      download="Lois-Okereke-Resume.pdf"
      target="_blank"    
      rel="noopener noreferrer"
    >
      <Button className="btn-glow">
        <Download size={20} className="mr-2" />
        Download my CV
      </Button>
    </a>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              { number: '20+', label: 'Projects' },
              { number: '4+', label: 'Years Exp' },
              { number: '100%', label: 'Success Rate' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.2}s` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-primary glow-text">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

       <div className="relative flex justify-center lg:justify-center animate-fade-in-right">
  <div className="relative -ml-8 lg:-ml-16">  

    <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-glow-pulse scale-110"></div>
    <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse scale-125"></div>

    <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden profile-glow">
      <img
        src={profileImage}
        alt="Lois Okereke"
        className="w-full h-full object-cover animate-float"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
    </div>

    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/80 rounded-full animate-bounce glow-purple-strong"></div>
    <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary/60 rounded-full animate-pulse glow-purple"></div>
    <div className="absolute top-1/4 -right-8 w-4 h-4 bg-primary/40 rounded-full animate-float glow-purple"></div>
  </div>
</div>

      </div>
    </div>
  );
}