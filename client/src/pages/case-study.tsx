import { Link, useParams } from 'wouter';
import { Layout } from '@/components/layout/Layout';
import { Section, SectionHeader } from '@/components/ui/section';
import { FadeIn } from '@/components/ui/fade-in';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { getCaseStudyBySlug, getCaseStudyBySlug as getNext } from '@/lib/caseStudies';
import { ArrowLeft, ArrowRight, Clock, Users, CheckCircle } from 'lucide-react';

export default function CaseStudyPage() {
  const params = useParams<{ slug: string }>();
  const caseStudy = getCaseStudyBySlug(params.slug || '');

  if (!caseStudy) {
    return (
      <Layout>
        <Section className="pt-24 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Case study not found</h1>
            <Link href="/case-studies">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Case Studies
              </Button>
            </Link>
          </div>
        </Section>
      </Layout>
    );
  }

  const nextCaseStudy = getNext(caseStudy.nextCaseStudy);

  return (
    <Layout>
      <article>
        <Section className="pt-24 md:pt-28 pb-12">
          <FadeIn>
            <Link href="/case-studies">
              <Button variant="ghost" size="sm" className="mb-8" data-testid="button-back-case-studies">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Case Studies
              </Button>
            </Link>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="outline" className="text-xs uppercase tracking-wider">
                {caseStudy.type}
              </Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{caseStudy.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>{caseStudy.team}</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {caseStudy.title}
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mt-4 text-sm text-muted-foreground">
              Role: {caseStudy.role}
            </p>
          </FadeIn>

          <FadeIn delay={250}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {caseStudy.summary}
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
              <p className="text-lg font-semibold text-foreground">
                {caseStudy.outcomeMetric}
              </p>
            </Card>
          </FadeIn>
        </Section>

        <div
          className={`w-full aspect-[21/9] bg-gradient-to-br ${caseStudy.gradientColors} flex items-center justify-center`}
        >
          <span className="text-4xl md:text-6xl font-bold text-foreground/60">
            {caseStudy.title}
          </span>
        </div>

        <Section>
          <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
            <FadeIn>
              <div>
                <SectionHeader title="The Problem" />
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Business Problem
                    </h4>
                    <p className="text-lg leading-relaxed">{caseStudy.problem.business}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      User Problem
                    </h4>
                    <p className="text-lg leading-relaxed">{caseStudy.problem.user}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Constraints
                    </h4>
                    <ul className="space-y-2">
                      {caseStudy.problem.constraints.map((constraint, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{constraint}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <SectionHeader title="My Role" />
                <ul className="space-y-3">
                  {caseStudy.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <CaseStudySection section={caseStudy.discovery} />
            <CaseStudySection section={caseStudy.ideation} />
            <CaseStudySection section={caseStudy.design} />
            <CaseStudySection section={caseStudy.testing} />

            <FadeIn>
              <div>
                <SectionHeader title="Outcome & Impact" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                      Metrics
                    </h4>
                    <ul className="space-y-3">
                      {caseStudy.outcomes.metrics.map((metric, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                      Qualitative Outcomes
                    </h4>
                    <ul className="space-y-3">
                      {caseStudy.outcomes.qualitative.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <SectionHeader title="Reflection" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                      What I'd Improve
                    </h4>
                    <ul className="space-y-3">
                      {caseStudy.reflection.improvements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                      Key Learnings
                    </h4>
                    <ul className="space-y-3">
                      {caseStudy.reflection.learnings.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>

        {nextCaseStudy && (
          <Section className="bg-card/50 border-t border-border">
            <FadeIn>
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Next Case Study
                </p>
                <Link href={`/case-studies/${nextCaseStudy.slug}`}>
                  <Button variant="outline" size="lg" data-testid="button-next-case-study">
                    {nextCaseStudy.title}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </Section>
        )}
      </article>
    </Layout>
  );
}

function CaseStudySection({ section }: { section: { title: string; content: string[]; deliverables?: { title: string; description: string; imagePlaceholder: string }[] } }) {
  return (
    <FadeIn>
      <div>
        <SectionHeader title={section.title} />
        <div className="space-y-4 mb-8">
          {section.content.map((paragraph, i) => (
            <p key={i} className="text-lg text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        {section.deliverables && section.deliverables.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.deliverables.map((deliverable, i) => (
              <Card key={i} className="overflow-hidden border-card-border">
                <div className="aspect-video bg-muted flex items-center justify-center p-4">
                  <p className="text-sm text-muted-foreground text-center">
                    {deliverable.imagePlaceholder}
                  </p>
                </div>
                <div className="p-4">
                  <h5 className="font-semibold mb-1">{deliverable.title}</h5>
                  <p className="text-sm text-muted-foreground">{deliverable.description}</p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </FadeIn>
  );
}
