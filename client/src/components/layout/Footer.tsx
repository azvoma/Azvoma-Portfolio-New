import { Link } from 'wouter';
import { Mail, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Process', href: '/#process' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight">Contact</h3>
            <a
              href="mailto:azvoma@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              data-testid="link-footer-email"
            >
              <Mail className="w-4 h-4" />
              <span>azvoma@gmail.com</span>
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-sm text-muted-foreground">
              Open to new opportunities
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  <span
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight">Location</h3>
            <p className="text-sm text-muted-foreground">
              Remote / Worldwide
            </p>
            <p className="text-sm text-muted-foreground">
              Available for freelance & full-time roles
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              {currentYear} Portfolio. Designed with intention.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with React + Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
