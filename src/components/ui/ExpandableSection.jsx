import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/cn';

/**
 * @param {object} props
 * @param {string} props.id DOM id for in-page navigation (#id)
 * @param {string} props.title
 * @param {string} props.teaser Short line shown in the collapsed summary
 * @param {boolean} [props.defaultOpen]
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 */
export function ExpandableSection({ id, title, teaser, defaultOpen = false, children, className }) {
  return (
    <Container className={cn('py-8 sm:py-10 md:py-12', className)}>
      <details
        id={id}
        defaultOpen={defaultOpen}
        className="group scroll-mt-20 rounded-xl border border-border bg-card/40 shadow-sm open:bg-card/70 open:shadow-md sm:scroll-mt-24 sm:rounded-2xl"
      >
        <summary className="flex cursor-pointer list-none items-start justify-between gap-3 rounded-xl p-4 outline-none transition hover:bg-card/60 touch-manipulation sm:gap-4 sm:rounded-2xl sm:p-6 md:p-8 [&::-webkit-details-marker]:hidden focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">
          <div className="min-w-0 flex-1 pr-1">
            <p className="text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl">{title}</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">{teaser}</p>
          </div>
          <ChevronDown
            className="mt-0.5 h-5 w-5 shrink-0 text-muted transition duration-300 group-open:rotate-180 sm:mt-1 sm:h-6 sm:w-6"
            aria-hidden
          />
        </summary>
        <div className="border-t border-border px-4 pb-6 pt-2 sm:px-6 sm:pb-8 md:px-8 md:pb-10">{children}</div>
      </details>
    </Container>
  );
}
