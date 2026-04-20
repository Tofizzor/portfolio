import { Moon, Sun } from 'lucide-react';
import { site, navLinks } from '@/data/site';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/cn';
import { scrollToSection } from '@/lib/scrollToSection';

/**
 * @param {object} props
 * @param {boolean} props.dark
 * @param {() => void} props.onToggleTheme
 * @param {string} props.activeSectionId Current section id for desktop nav highlight
 */
export function SiteHeader({ dark, onToggleTheme, activeSectionId }) {
  const handleNav = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95">
      <div className="bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
        <Container className="flex h-14 min-h-[3.5rem] items-center justify-between gap-2 md:gap-4">
          <a
            href="#home"
            onClick={(e) => handleNav(e, '#home')}
            className="min-w-0 max-w-[70%] truncate text-sm font-semibold tracking-tight text-foreground transition hover:text-accent md:max-w-none md:text-base"
          >
            {site.name}
          </a>

          <nav className="hidden items-center gap-0.5 md:flex md:gap-1" aria-label="Primary">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className={cn(
                    'rounded-md px-3 py-2 text-sm font-medium transition hover:text-accent',
                    activeSectionId === id ? 'text-accent' : 'text-muted',
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg border border-border text-foreground hover:bg-card touch-manipulation"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </Container>
      </div>
    </header>
  );
}
