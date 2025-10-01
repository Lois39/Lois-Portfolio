import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  User, 
  FileText, 
  Briefcase, 
  MessageSquare, 
  Mail
} from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Resume', href: '/resume', icon: FileText },
  { name: 'Portfolio', href: '/portfolio', icon: Briefcase },
  { name: 'Testimonials', href: '/testimonials', icon: MessageSquare },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border md:hidden">
      <div className="flex justify-around items-center py-3 px-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`
                relative flex items-center justify-center p-3 rounded-xl transition-all duration-300
                min-w-12 h-12
                ${isActive 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary/30'
                }
              `}
            >
              <Icon 
                size={22} 
                className={`transition-transform ${
                  isActive ? 'animate-glow-pulse scale-110' : 'hover:scale-110'
                }`} 
              />
              {isActive && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse"></div>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}