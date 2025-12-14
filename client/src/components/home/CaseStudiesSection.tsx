import { Link } from 'wouter';
import { Section, SectionHeader } from '@/components/ui/section';
import { FadeIn } from '@/components/ui/fade-in';
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';
import { caseStudies } from '@/lib/caseStudies';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CaseStudiesSection() {
  return (
    <Section id="case-studies">
      <FadeIn>
        <SectionHeader
          eyebrow="Featured Work"
          title="Case Studies"
          description="A selection of product work across SaaS, sprint delivery, mobile, and web."
        />
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {caseStudies.map((caseStudy, index) => (
          <FadeIn key={caseStudy.id} delay={index * 100}>
            <CaseStudyCard caseStudy={caseStudy} />
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={400}>
        <div className="mt-12 text-center">
          <Link href="/case-studies">
            <Button variant="outline" size="lg" data-testid="button-view-all-case-studies">
              View All Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </FadeIn>
    </Section>
  );
}
