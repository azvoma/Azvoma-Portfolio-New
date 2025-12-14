import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerClassName?: string;
}

export function Section({ id, className, children, containerClassName }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-24', className)}
    >
      <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', containerClassName)}>
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ eyebrow, title, description, centered = false, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12 md:mb-16', centered && 'text-center', className)}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 text-lg text-muted-foreground leading-relaxed', centered && 'max-w-2xl mx-auto')}>
          {description}
        </p>
      )}
    </div>
  );
}
