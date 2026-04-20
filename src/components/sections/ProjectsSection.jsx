import { ChevronDown, ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

/**
 * @param {object} props
 * @param {object} props.project Project from `projects` data
 */
function ProjectExpandable({ project }) {
  return (
    <details
      className="group rounded-2xl border border-border bg-card/60 shadow-sm open:bg-card open:shadow-md"
    >
      <summary className="flex min-h-[4.5rem] cursor-pointer list-none touch-manipulation gap-3 p-4 outline-none transition hover:bg-card/80 sm:min-h-0 sm:gap-5 sm:p-5 [&::-webkit-details-marker]:hidden focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent">
        <div className="relative hidden h-24 w-40 shrink-0 overflow-hidden rounded-xl border border-border bg-muted/30 sm:block">
          <img
            src={project.thumbnail || '/og-placeholder.svg'}
            alt=""
            className="h-full w-full object-cover"
            width={320}
            height={180}
            loading="lazy"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">{project.title}</h3>
            <ChevronDown
              className="mt-0.5 h-5 w-5 shrink-0 text-muted transition duration-300 group-open:rotate-180"
              aria-hidden
            />
          </div>
          <p className="mt-2 text-sm text-muted">{project.tagline}</p>
          <p className="mt-2 text-xs text-muted">{project.role}</p>
          <ul className="mt-3 flex flex-wrap gap-2" aria-label="Tech stack">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-background px-2 py-0.5 text-xs font-medium text-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </summary>
      <div className={cn('border-t border-border px-4 pb-6 pt-5 sm:px-6')}>
        <div className="mb-6 aspect-video overflow-hidden rounded-xl border border-border bg-muted/30 sm:hidden">
          <img
            src={project.thumbnail || '/og-placeholder.svg'}
            alt=""
            className="h-full w-full object-cover"
            width={800}
            height={450}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {project.links?.live ? (
            <Button
              href={project.links.live}
              variant="primary"
              external
              className="w-full min-h-11 touch-manipulation justify-center sm:w-auto sm:min-h-0"
            >
              <ExternalLink className="h-4 w-4" />
              Live demo
            </Button>
          ) : null}
          {project.links?.repo ? (
            <Button
              href={project.links.repo}
              variant="secondary"
              external
              className="w-full min-h-11 touch-manipulation justify-center sm:w-auto sm:min-h-0"
            >
              <Github className="h-4 w-4" />
              Source
            </Button>
          ) : null}
        </div>
        <section className="mt-10" aria-labelledby={`${project.slug}-highlights`}>
          <h4 id={`${project.slug}-highlights`} className="text-lg font-semibold text-foreground">
            Highlights
          </h4>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted sm:text-base">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        {project.body ? (
          <section className="mt-10" aria-labelledby={`${project.slug}-details`}>
            <h4 id={`${project.slug}-details`} className="text-lg font-semibold text-foreground">
              Details
            </h4>
            <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-muted sm:text-base">
              {project.body}
            </p>
          </section>
        ) : null}
      </div>
    </details>
  );
}

export function ProjectsSection() {
  return (
    <div className="space-y-4 pt-2">
      {projects.map((project) => (
        <ProjectExpandable key={project.slug} project={project} />
      ))}
    </div>
  );
}
