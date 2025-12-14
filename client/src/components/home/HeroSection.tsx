import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';
import { ArrowRight, CheckCircle } from 'lucide-react';

const valueBullets = [
  'End-to-end UX/UI & Product Design (Discovery → Delivery)',
  'SaaS, Apps, Websites & Google Design Sprints',
  'Data-informed, AI-assisted, human-centred design',
];

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn delay={0}>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            UX/UI & Product Designer
          </span>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Product Designer with 5+ years experience designing scalable digital products
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            I design end-to-end experiences across SaaS, apps, and websites — combining UX strategy, UI craft, and product thinking to drive measurable outcomes.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <ul className="mt-8 md:mt-10 space-y-3 max-w-xl mx-auto">
            {valueBullets.map((bullet, index) => (
              <li
                key={index}
                className="flex items-center justify-center gap-3 text-sm md:text-base text-muted-foreground"
              >
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('case-studies')}
              className="w-full sm:w-auto px-8"
              data-testid="button-view-case-studies"
            >
              View Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-8"
              data-testid="button-contact-hero"
            >
              Contact Me
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
