import Hero         from '../components/Hero';
import Marquee      from '../components/Marquee';
import VideoSection from '../components/VideoSection';
import Services     from '../components/Services';
import Results      from '../components/Results';
import WhyUs        from '../components/WhyUs';
import Process      from '../components/Process';
import Partners     from '../components/Partners';
import Offer        from '../components/Offer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <VideoSection />
      <Services preview />
      <Results />
      <WhyUs />
      <Process />
      <Partners preview />
      <Offer />
    </>
  );
}
