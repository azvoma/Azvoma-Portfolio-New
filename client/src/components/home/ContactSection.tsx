import { Section } from '@/components/ui/section';
import { FadeIn } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight } from 'lucide-react';

export function ContactSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Let's build something great.
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            I'm currently open to new opportunities — whether that's a full-time role, freelance project, or interesting collaboration.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <a
            href="mailto:azvoma@gmail.com"
            className="inline-block mt-8 text-xl md:text-2xl font-medium hover:text-primary transition-colors"
            data-testid="link-contact-email"
          >
            azvoma@gmail.com
          </a>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto px-8">
              <a href="mailto:azvoma@gmail.com" data-testid="button-contact-email">
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('case-studies')}
              className="w-full sm:w-auto px-8"
              data-testid="button-contact-case-studies"
            >
              View Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="mt-8 text-sm text-muted-foreground">
            Remote / Worldwide • Available for freelance & full-time roles
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
