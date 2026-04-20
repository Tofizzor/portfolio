import { Award, Briefcase, Layers } from 'lucide-react';
import { employers, certifications, stackGroups } from '@/data/experience';
import { cn } from '@/lib/cn';

/** @param {{ id: 'bofa' | 'mthree' | 'linkedin' }} props */
function CompanyLogo({ id, className }) {
  if (id === 'bofa') {
    return (
      <div
        className={cn(
          'flex h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-border shadow-sm sm:h-12 sm:w-12',
          className,
        )}
        aria-hidden
      >
        <div className="flex-1 bg-red-700" />
        <div className="flex-1 bg-emerald-950" />
      </div>
    );
  }
  if (id === 'mthree') {
    return (
      <div
        className={cn(
          'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-slate-900 font-mono text-[10px] font-semibold text-emerald-400 shadow-sm sm:h-12 sm:w-12 sm:text-[11px]',
          className,
        )}
        aria-hidden
      >
        {'{ }'}
      </div>
    );
  }
  return (
    <div
      className={cn(
        'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-emerald-900 text-xs font-bold text-emerald-50 shadow-sm sm:h-12 sm:w-12 sm:text-sm',
        className,
      )}
      aria-hidden
    >
      in
    </div>
  );
}

function SectionHeading({ id, icon: Icon, title, subtitle }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <h3 id={id} className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {title}
          </h3>
          {subtitle ? <p className="mt-1 max-w-2xl text-sm text-muted sm:text-base">{subtitle}</p> : null}
        </div>
      </div>
    </div>
  );
}

function StackChip({ children }) {
  return (
    <span className="inline-flex max-w-full items-center break-words rounded-lg border border-border bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm dark:bg-card/60">
      {children}
    </span>
  );
}

/** Full experience content (stack, work, certifications) for the one-page layout. */
export function ExperienceSection() {
  return (
    <div className="relative overflow-hidden pt-4">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[320px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,var(--color-accent),transparent)] opacity-[0.1] dark:opacity-[0.16]"
        aria-hidden
      />

      <div className="relative">
        <div>
          <header className="relative overflow-hidden rounded-xl border border-border bg-card/80 p-5 shadow-sm ring-1 ring-border/60 backdrop-blur-md sm:rounded-2xl sm:p-8">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
              aria-hidden
            />
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Overview</p>
            <h2 className="mt-3 max-w-3xl break-words text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              From production support to shipping full-stack software
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Equities-trading background in reliability and support, now building products with a security-aware
              mindset—typed APIs, realtime channels, and UIs I can own end to end.
            </p>
          </header>

          <section className="mt-12 sm:mt-14" aria-labelledby="stack-heading">
            <SectionHeading
              id="stack-heading"
              icon={Layers}
              title="Current stack"
              subtitle="Technologies and practices I use together on recent work—backend, frontend, data, and how systems talk safely."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stackGroups.map((group) => (
                <article
                  key={group.title}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:border-accent/30 hover:shadow-md"
                >
                  <h4 className="text-sm font-semibold text-foreground">{group.title}</h4>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-muted sm:text-sm">{group.blurb}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={group.title}>
                    {group.items.map((item) => (
                      <li key={item}>
                        <StackChip>{item}</StackChip>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 sm:mt-16" aria-labelledby="work-heading">
            <SectionHeading
              id="work-heading"
              icon={Briefcase}
              title="Work history"
              subtitle="Roles and scope—newer positions include the stack above where it is most representative of today."
            />
            <ul className="mt-8 space-y-6">
              {employers.map((job) => (
                <li key={job.company + (job.headline ?? '')}>
                  <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm ring-1 ring-border/50">
                    <div className="flex flex-col gap-4 border-b border-border/80 bg-gradient-to-r from-card to-accent/5 p-4 sm:flex-row sm:items-start sm:gap-5 sm:p-6">
                      <CompanyLogo id={job.logo} />
                      <div className="min-w-0 flex-1">
                        {job.roles ? (
                          <>
                            <h4 className="text-lg font-semibold text-foreground sm:text-xl">{job.company}</h4>
                            <p className="mt-1 text-sm text-muted">
                              {job.employmentType}
                              {job.totalTenure ? ` · ${job.totalTenure}` : ''}
                            </p>
                          </>
                        ) : job.headline ? (
                          <>
                            <h4 className="text-lg font-semibold text-foreground sm:text-xl">{job.headline}</h4>
                            <p className="mt-1 text-sm text-muted">
                              {job.company} · {job.employmentType}
                            </p>
                            <p className="mt-2 text-sm text-muted">
                              {job.dates}
                              {job.duration ? ` · ${job.duration}` : ''}
                            </p>
                            {job.location ? <p className="mt-1 text-sm text-muted">{job.location}</p> : null}
                          </>
                        ) : (
                          <>
                            <h4 className="text-lg font-semibold text-foreground sm:text-xl">{job.company}</h4>
                            {job.employmentType ? (
                              <p className="mt-1 text-sm text-muted">{job.employmentType}</p>
                            ) : null}
                            {job.dates ? (
                              <p className="mt-2 text-sm text-muted">
                                {job.dates}
                                {job.duration ? ` · ${job.duration}` : ''}
                              </p>
                            ) : null}
                            {job.location ? <p className="mt-1 text-sm text-muted">{job.location}</p> : null}
                          </>
                        )}
                      </div>
                    </div>

                    {job.roles ? (
                      <div className="p-5 sm:p-6 sm:pl-10">
                        <div className="relative">
                          <div
                            className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-accent/50 via-border to-transparent sm:left-[9px]"
                            aria-hidden
                          />
                          <ul className="space-y-8">
                            {job.roles.map((role) => (
                              <li key={role.title + role.dates} className="relative pl-8 sm:pl-10">
                                <span
                                  className="absolute left-0 top-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-accent/40 bg-card shadow-sm ring-2 ring-background sm:top-2"
                                  aria-hidden
                                >
                                  <span className="h-2 w-2 rounded-full bg-accent" />
                                </span>
                                <h5 className="font-semibold text-foreground">{role.title}</h5>
                                <p className="mt-1 text-sm text-muted">
                                  {role.dates}
                                  {role.duration ? ` · ${role.duration}` : ''}
                                </p>
                                <p className="mt-0.5 text-sm text-muted">{role.location}</p>
                                {role.skills && role.skills.length > 0 ? (
                                  <ul className="mt-3 flex flex-wrap gap-2" aria-label={`Skills for ${role.title}`}>
                                    {role.skills.map((s) => (
                                      <li key={s}>
                                        <StackChip>{s}</StackChip>
                                      </li>
                                    ))}
                                  </ul>
                                ) : null}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : null}
                  </article>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14 sm:mt-16" aria-labelledby="certs-heading">
            <SectionHeading
              id="certs-heading"
              icon={Award}
              title="Licenses & certifications"
              subtitle="Foundational courses that sit alongside hands-on delivery."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <li key={cert.title}>
                  <article className="flex h-full gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition hover:border-accent/25 hover:shadow-md sm:gap-4 sm:p-5">
                    <CompanyLogo id="linkedin" className="!h-10 !w-10 sm:!h-11 sm:!w-11" />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-semibold leading-snug text-foreground">{cert.title}</h4>
                      <p className="mt-2 text-xs text-muted">{cert.issuer}</p>
                      <p className="mt-1 text-xs text-muted">{cert.issuedLabel}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
