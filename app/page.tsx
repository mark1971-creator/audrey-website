import { Nav } from '@/Components/Nav';
import { Hero } from '@/Components/Hero';
import { About } from '@/Components/About';
import { Experience } from '@/Components/Experience';
import { Creative } from '@/Components/Creative';
import { Moments } from '@/Components/Moments';
import { Contact } from '@/Components/Contact';
import { Footer } from '@/Components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Creative />
      <Moments />
      <Contact />
      <Footer />
    </>
  );
}