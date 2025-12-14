import { Section, SectionHeader } from '@/components/ui/section';
import { FadeIn } from '@/components/ui/fade-in';

export function AboutSection() {
  return (
    <Section id="about" className="bg-card/30">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <SectionHeader
            eyebrow="About Me"
            title="Hi, I'm Andrew Zvoma"
            centered
          />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I'm a UX/UI & Product Designer with 5 years' experience designing digital products across SaaS, apps, and websites. I enjoy turning ambiguity into clear, usable experiences and collaborating with PMs and engineers to deliver measurable outcomes.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-2xl md:text-3xl font-semibold">5+</p>
                <p className="text-sm text-muted-foreground mt-1">Years of Experience</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-semibold">30+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Shipped</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-semibold">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Remote Ready</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
