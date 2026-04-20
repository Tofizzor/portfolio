import { Github, Linkedin, Mail } from 'lucide-react';
import { site } from '@/data/site';
import { Container } from '@/components/ui/Container';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border pt-8 pb-[calc(5.25rem+env(safe-area-inset-bottom,0px))] sm:pt-10 md:py-10 md:pb-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="min-w-0 text-center text-xs leading-relaxed text-muted sm:text-left sm:text-sm">
          © {year} {site.name}. Built with React & Tailwind — static & fast.
        </p>
        <div className="flex items-center justify-center gap-4 sm:justify-end">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-muted transition hover:bg-card hover:text-accent touch-manipulation"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={site.social.github}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-muted transition hover:bg-card hover:text-accent touch-manipulation"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={site.social.linkedin}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-muted transition hover:bg-card hover:text-accent touch-manipulation"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
