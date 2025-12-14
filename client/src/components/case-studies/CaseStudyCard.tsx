import { Link } from 'wouter';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import type { CaseStudy } from '@/lib/caseStudies';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${caseStudy.slug}`}>
      <Card
        className="group p-6 md:p-8 h-full border-card-border cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
        data-testid={`card-case-study-${caseStudy.slug}`}
      >
        <div
          className={`aspect-video rounded-md mb-6 bg-gradient-to-br ${caseStudy.gradientColors} flex items-center justify-center`}
        >
          <span className="text-2xl md:text-3xl font-bold text-foreground/80">
            {caseStudy.title}
          </span>
        </div>

        <div className="space-y-4">
          <Badge variant="outline" className="text-xs uppercase tracking-wider">
            {caseStudy.type}
          </Badge>

          <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
            {caseStudy.title}
          </h3>

          <p className="text-sm text-muted-foreground">
            Role: {caseStudy.role}
          </p>

          <p className="text-sm font-medium text-foreground">
            {caseStudy.outcome}
          </p>

          <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
            <span>Read Case Study</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
