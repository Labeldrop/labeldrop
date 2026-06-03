import ScrollProgress from '@/components/ScrollProgress';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Why from '@/components/Why';
import Audience from '@/components/Audience';
import Process from '@/components/Process';
import Showcase from '@/components/Showcase';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import ScrollBgColor from '@/components/ScrollBgColor';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <Hero />
      <About />
      <Why />
      <Audience />
      <Process />
      <Showcase />
      <Contact />
      <Footer />
      <ScrollReveal />
      <ScrollBgColor />
    </>
  );
}
