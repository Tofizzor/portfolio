import { useEffect } from 'react';
import { site } from '@/data/site';
import { useDocumentTitle } from '@/lib/useDocumentTitle';
import { scrollToSection } from '@/lib/scrollToSection';
import { ExpandableSection } from '@/components/ui/ExpandableSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { AboutBody } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';

export function HomePage() {
  useDocumentTitle(site.defaultMeta.title, { description: site.defaultMeta.description });

  useEffect(() => {
    const { hash } = window.location;
    if (hash) scrollToSection(hash);
  }, []);

  return (
    <>
      <HeroSection />
      <ExpandableSection
        id="projects"
        title="Projects"
        teaser="Ownership, stack, and outcomes—expand a row for highlights, links, and the full write-up."
        defaultOpen
      >
        <ProjectsSection />
      </ExpandableSection>
      <ExpandableSection
        id="experience"
        title="Experience"
        teaser="Stack, work history, and certifications—expand to read the full profile."
        defaultOpen={false}
      >
        <ExperienceSection />
      </ExpandableSection>
      <ExpandableSection
        id="about"
        title="How I work"
        teaser="Scope, feedback loops, and how I think about shipping with clarity."
        defaultOpen={false}
      >
        <AboutBody className="pt-2" />
      </ExpandableSection>
      <ContactSection />
    </>
  );
}
