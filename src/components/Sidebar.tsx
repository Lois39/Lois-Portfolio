import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  User, 
  FileText, 
  Briefcase, 
  MessageSquare, 
  Mail
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/lois.jpg';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Resume', href: '/resume', icon: FileText },
  { name: 'Portfolio', href: '/portfolio', icon: Briefcase },
  { name: 'Testimonials', href: '/testimonials', icon: MessageSquare },
  { name: 'Contact', href: '/contact', icon: Mail },
];

const socials = [
  { icon: FaGithub, href: 'https://github.com/Lois39' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/loisokereke' },
  { icon: FaEnvelope, href: 'mailto:okerekelois2@gmail.com' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="hidden md:block fixed top-0 left-0 z-40 h-screen w-80 bg-card/95 backdrop-blur-sm border-r border-border animate-slide-in-left">
      <div className="flex flex-col h-full p-6 glow-drop-shadow">

        <div className="text-center mb-8 animate-fade-in">
          <div className="relative mb-6 w-32 h-32 mx-auto">

  <img
    src={profileImage}
    alt="Profile"
    className="w-32 h-32 rounded-full object-cover border-4 border-primary/30 relative z-10"
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
          <h2 className="text-xl font-bold glow-text mb-2">Lois Okereke</h2>
          <p className="text-muted-foreground text-sm">Frontend Developer</p>
          <p className="text-muted-foreground text-xs">Your Introverted Bestie</p>
        </div>

        <nav className="flex-1">
          <ul className="space-y-3">
            {navigation.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;

              return (
                <li
                  key={item.name}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link
                    to={item.href}
                    className={`
                      flex items-center px-4 py-3 rounded-lg transition-all duration-300
                      nav-item hover-glow group
                      ${isActive
                        ? 'bg-primary/20 text-primary border border-primary/50 glow-purple'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                      }
                    `}
                  >
                    <Icon
                      size={20}
                      className={`mr-3 transition-transform group-hover:scale-110 ${
                        isActive ? 'animate-glow-pulse' : ''
                      }`}
                    />
                    <span className="font-medium">{item.name}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-primary animate-glow-pulse"></div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex justify-center space-x-4">
            {socials.map(({ icon: SIcon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full btn-outline-glow hover:scale-110 transition-transform"
              >
                <SIcon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
