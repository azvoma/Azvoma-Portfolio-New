import { Section, SectionHeader } from '@/components/ui/section';
import { FadeIn } from '@/components/ui/fade-in';
import { Sparkles } from 'lucide-react';
import { SiFigma, SiMiro, SiNotion, SiZeplin, SiSupabase } from 'react-icons/si';
import { Zap, Heart } from 'lucide-react';

const toolsWithIcons = [
  { name: 'Figma', icon: SiFigma },
  { name: 'Miro', icon: SiMiro },
  { name: 'Notion', icon: SiNotion },
  { name: 'Zeplin', icon: SiZeplin },
  { name: 'Lovable', icon: Heart },
  { name: 'Bolt', icon: Zap },
  { name: 'Supabase', icon: SiSupabase },
];

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
            <div className="flex flex-wrap gap-4">
              {toolsWithIcons.map((tool) => {
                const IconComponent = tool.icon;
                return (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <IconComponent className="w-8 h-8 text-muted-foreground" />
                    <span className="text-xs font-medium text-muted-foreground">
                      {tool.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
