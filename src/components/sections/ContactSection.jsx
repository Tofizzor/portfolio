import { site } from '@/data/site';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-12 sm:scroll-mt-24 sm:py-16 md:py-24" aria-labelledby="contact-heading">
      <Container>
        <h2 id="contact-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Contact
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Hiring or want to collaborate? Send an email—{site.location}.
        </p>
        <div className="mt-8">
          <Button
            href={`mailto:${site.email}`}
            variant="primary"
            className="w-full min-h-11 max-w-full touch-manipulation justify-center break-all px-3 sm:w-auto sm:min-h-0 sm:break-normal"
          >
            {site.email}
          </Button>
        </div>
      </Container>
    </section>
  );
}
