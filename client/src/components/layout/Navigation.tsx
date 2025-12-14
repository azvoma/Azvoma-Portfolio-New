import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Mail } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/', section: 'hero' },
  { label: 'Case Studies', href: '/case-studies', section: 'case-studies' },
  { label: 'Process', href: '/#process', section: 'process' },
  { label: 'About', href: '/#about', section: 'about' },
  { label: 'Contact', href: '/#contact', section: 'contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      if (location === '/') {
        const sections = ['contact', 'about', 'process', 'case-studies', 'hero'];
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  useEffect(() => {
    if (location === '/' && window.location.hash) {
      const sectionId = window.location.hash.slice(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent, href: string, section: string) => {
    setMobileMenuOpen(false);
    
    if (href.startsWith('/#')) {
      e.preventDefault();
      
      if (location === '/') {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        setLocation('/');
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  const isActive = (item: typeof navItems[0]) => {
    if (location === '/case-studies' || location.startsWith('/case-studies/')) {
      return item.href === '/case-studies';
    }
    if (location === '/') {
      return item.section === activeSection;
    }
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/">
            <span 
              className="text-xl font-bold tracking-tight cursor-pointer flex items-center"
              data-testid="link-home-logo"
            >
              <span className="text-primary">A</span>
              <span className="text-foreground">Z</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href.startsWith('/#') ? '/' : item.href}>
                <span
                  onClick={(e) => handleNavClick(e, item.href, item.section)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                    isActive(item)
                      ? 'text-foreground bg-muted'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                  data-testid={`link-nav-${item.label.toLowerCase().replace(' ', '-')}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild>
              <a href="mailto:azvoma@gmail.com" data-testid="button-email-cta">
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href.startsWith('/#') ? '/' : item.href}>
                  <span
                    onClick={(e) => handleNavClick(e, item.href, item.section)}
                    className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                      isActive(item)
                        ? 'text-foreground bg-muted'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                    data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <div className="px-4 pt-3">
                <Button asChild className="w-full">
                  <a href="mailto:azvoma@gmail.com" data-testid="button-mobile-email-cta">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Me
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
