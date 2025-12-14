import { Section } from '@/components/ui/section';
import { FadeIn } from '@/components/ui/fade-in';
import { Card } from '@/components/ui/card';
import { credibilityStats } from '@/lib/caseStudies';
import { Briefcase, Layers, Zap, Accessibility } from 'lucide-react';

const icons = [Briefcase, Layers, Zap, Accessibility];

export function CredibilitySection() {
  return (
    <Section className="py-12 md:py-16 bg-card/50">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {credibilityStats.map((item, index) => {
          const Icon = icons[index];
          return (
            <FadeIn key={index} delay={index * 100}>
              <Card className="p-6 text-center border-card-border">
                <Icon className="w-5 h-5 mx-auto mb-3 text-muted-foreground" />
                <p className="text-lg md:text-xl font-semibold tracking-tight">
                  {item.stat}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.label}
                </p>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
