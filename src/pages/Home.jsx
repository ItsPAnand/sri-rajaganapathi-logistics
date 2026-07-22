import Seo from '../components/common/Seo.jsx';
import Hero from '../components/sections/Hero.jsx';
import About from '../components/sections/About.jsx';
import Services from '../components/sections/Services.jsx';
import WhyChoose from '../components/sections/WhyChoose.jsx';
import Industries from '../components/sections/Industries.jsx';
import Process from '../components/sections/Process.jsx';
import Stats from '../components/sections/Stats.jsx';
import Gallery from '../components/sections/Gallery.jsx';
import Testimonials from '../components/sections/Testimonials.jsx';
import ServiceAreas from '../components/sections/ServiceAreas.jsx';
import Contact from '../components/sections/Contact.jsx';

export default function Home() {
  return (
    <>
      <Seo
        title="Pharma, Cold-Chain & Industrial Logistics · Salem"
        description="Sri Rajaganapathi Logistics (SRL) delivers pharmaceuticals, cold-chain vaccines, industrial and commercial cargo across Tamil Nadu with quiet, uncompromising reliability."
        path="/"
      />
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyChoose />
      <Industries />
      <Process />
      <Gallery />
      <Testimonials />
      <ServiceAreas />
      <Contact />
    </>
  );
}
