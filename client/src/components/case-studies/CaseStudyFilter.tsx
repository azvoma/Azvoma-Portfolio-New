import { Button } from '@/components/ui/button';
import type { CaseStudyType } from '@/lib/caseStudies';

type FilterOption = CaseStudyType | 'All';

interface CaseStudyFilterProps {
  activeFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
}

const filters: FilterOption[] = ['All', 'SaaS', 'Sprint', 'App', 'Website'];

export function CaseStudyFilter({ activeFilter, onFilterChange }: CaseStudyFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-12">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={activeFilter === filter ? 'default' : 'outline'}
          size="sm"
          onClick={() => onFilterChange(filter)}
          className="rounded-full px-4"
          data-testid={`button-filter-${filter.toLowerCase()}`}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
}
