import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Section, SectionHeader } from '@/components/ui/section';
import { FadeIn } from '@/components/ui/fade-in';
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';
import { CaseStudyFilter } from '@/components/case-studies/CaseStudyFilter';
import { getCaseStudiesByType, type CaseStudyType } from '@/lib/caseStudies';

type FilterOption = CaseStudyType | 'All';

export default function CaseStudiesIndex() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All');
  const filteredCaseStudies = getCaseStudiesByType(activeFilter);

  return (
    <Layout>
      <Section className="pt-24 md:pt-28">
        <FadeIn>
          <SectionHeader
            title="Case Studies"
            description="A selection of product work across SaaS, sprint delivery, mobile, and web."
            centered
          />
        </FadeIn>

        <FadeIn delay={100}>
          <CaseStudyFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredCaseStudies.map((caseStudy, index) => (
            <FadeIn key={caseStudy.id} delay={index * 100}>
              <CaseStudyCard caseStudy={caseStudy} />
            </FadeIn>
          ))}
        </div>

        {filteredCaseStudies.length === 0 && (
          <FadeIn>
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No case studies found for this filter.
              </p>
            </div>
          </FadeIn>
        )}
      </Section>
    </Layout>
  );
}
