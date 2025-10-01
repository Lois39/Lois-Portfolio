import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-animated">
      <div className="text-center animate-fade-in">
        <h1 className="mb-4 text-8xl font-bold glow-text">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">Oops! Page not found</p>
        <p className="mb-8 text-muted-foreground">The page you're looking for doesn't exist.</p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-0.5"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
