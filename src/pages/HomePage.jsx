import Hero      from '../components/Hero';
import Marquee   from '../components/Marquee';
import Services  from '../components/Services';
import Results   from '../components/Results';
import WhyUs     from '../components/WhyUs';
import Process   from '../components/Process';
import Partners  from '../components/Partners';
import Offer     from '../components/Offer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services preview />
      <Results />
      <WhyUs />
      <Process />
      <Partners preview />
      <Offer />
    </>
  );
}
