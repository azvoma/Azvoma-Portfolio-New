import { Section, SectionHeader } from '@/components/ui/section';
import { FadeIn } from '@/components/ui/fade-in';
import { Card } from '@/components/ui/card';
import { processSteps } from '@/lib/caseStudies';

export function ProcessSection() {
  return (
    <Section id="process" className="bg-card/30">
      <FadeIn>
        <SectionHeader
          eyebrow="My Approach"
          title="How I Work"
          description="A structured process that balances discovery with delivery."
          centered
        />
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {processSteps.map((step, index) => (
          <FadeIn key={step.number} delay={index * 100}>
            <Card className="p-6 text-center h-full border-card-border relative overflow-visible">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-4">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold tracking-tight mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
