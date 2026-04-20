import {
  Briefcase,
  Home,
  Layers2,
  Mail,
  UserRound,
} from 'lucide-react';
import { navLinks } from '@/data/site';
import { cn } from '@/lib/cn';
import { scrollToSection } from '@/lib/scrollToSection';
import { useIsDesktop } from '@/hooks/useMediaQuery';

const icons = [Home, Layers2, Briefcase, UserRound, Mail];

/**
 * App-style bottom navigation for small screens — no full-screen overlay.
 * @param {object} props
 * @param {string} props.activeSectionId
 */
export function MobileSectionDock({ activeSectionId }) {
  const isDesktop = useIsDesktop();
  if (isDesktop) return null;

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/90 bg-card/85 pb-[max(0.35rem,env(safe-area-inset-bottom,0px))] pt-1.5 shadow-[0_-12px_40px_-12px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:bg-card/80 dark:shadow-[0_-12px_40px_-12px_rgba(0,0,0,0.45)] md:hidden"
      aria-label="Section navigation"
    >
      <div className="mx-auto flex max-w-lg items-end justify-between gap-0.5 px-1.5">
        {navLinks.map((link, i) => {
          const id = link.href.slice(1);
          const Icon = icons[i] ?? Home;
          const active = activeSectionId === id;
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={cn(
                'flex min-h-[3.25rem] min-w-0 flex-1 flex-col items-center justify-end gap-0.5 rounded-xl px-0.5 py-1.5 text-center transition touch-manipulation active:scale-[0.97]',
                active
                  ? 'bg-accent/12 text-accent ring-1 ring-accent/25'
                  : 'text-muted hover:bg-muted/40 hover:text-foreground',
              )}
            >
              <Icon className="h-5 w-5 shrink-0" strokeWidth={active ? 2.25 : 2} aria-hidden />
              <span className="max-w-full truncate text-[10px] font-semibold leading-tight tracking-tight">
                {link.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
