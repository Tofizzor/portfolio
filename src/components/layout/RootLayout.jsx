import { useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import { useActiveSection } from '@/hooks/useActiveSection';
import { navLinks } from '@/data/site';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { MobileSectionDock } from './MobileSectionDock';

export function RootLayout() {
  const { dark, toggle } = useTheme();
  const sectionIds = useMemo(() => navLinks.map((link) => link.href.slice(1)), []);
  const activeSectionId = useActiveSection(sectionIds);

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <SiteHeader dark={dark} onToggleTheme={toggle} activeSectionId={activeSectionId} />
      <main
        id="main-content"
        className="flex-1 pb-[calc(4.75rem+env(safe-area-inset-bottom,0px))] md:pb-0"
      >
        <Outlet />
      </main>
      <SiteFooter />
      <MobileSectionDock activeSectionId={activeSectionId} />
    </div>
  );
}
