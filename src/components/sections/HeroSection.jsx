import { ArrowRight } from 'lucide-react';
import { site } from '@/data/site';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { scrollToSection } from '@/lib/scrollToSection';

export function HeroSection() {
  return (
    <section id="home" className="scroll-mt-20 border-b border-border py-12 sm:scroll-mt-24 sm:py-20 md:py-24">
      <Container>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-accent sm:text-sm">Portfolio</p>
        <h1 className="max-w-3xl break-words text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {site.tagline}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">
          {site.description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
          <Button
            href="#projects"
            variant="primary"
            className="w-full min-h-11 touch-manipulation justify-center sm:w-auto sm:min-h-0"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#projects');
            }}
          >
            View projects
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            href="#contact"
            variant="secondary"
            className="w-full min-h-11 touch-manipulation justify-center sm:w-auto sm:min-h-0"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
            }}
          >
            Get in touch
          </Button>
        </div>
      </Container>
    </section>
  );
}
