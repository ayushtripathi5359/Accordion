import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Experience } from '@/components/sections/Experience';
import { Footer } from '@/components/sections/Footer';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { SiteHeader } from '@/components/sections/SiteHeader';
import { Skills } from '@/components/sections/Skills';

export default function Home() {
  return (
    <div id="top" className="relative">
      <SiteHeader />
      <main className="pb-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
