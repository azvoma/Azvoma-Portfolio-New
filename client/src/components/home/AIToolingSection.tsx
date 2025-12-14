import { Section, SectionHeader } from '@/components/ui/section';
import { FadeIn } from '@/components/ui/fade-in';
import { Badge } from '@/components/ui/badge';
import { tools } from '@/lib/caseStudies';
import { Sparkles } from 'lucide-react';

export function AIToolingSection() {
  return (
    <Section id="ai-tooling">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <FadeIn>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Modern Workflow
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              AI-assisted, human-led design
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              I use AI as a design accelerator — not a replacement for critical thinking. From synthesising research and speeding up documentation to generating UI variations and improving UX writing, AI helps me spend more time on strategy, users, and outcomes.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="bg-card border border-card-border rounded-lg p-8">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <Badge
                  key={tool}
                  variant="outline"
                  className="px-4 py-2 text-sm font-medium"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
