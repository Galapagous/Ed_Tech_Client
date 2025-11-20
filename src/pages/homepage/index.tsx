import About from './about/about';
import Faq from './faq/faq';
import Features from './features/features';
import Hero from './hero/hero';
import Plan from './plan/plan';
import Testimonial from './testimonial/testimonial';

const Homepage = () => {
  return (
    <div className="w-full h-full">
      <Hero />
      <Features />
      <About />
      <Testimonial />
      <Plan />
      <Faq />
    </div>
  );
};

export default Homepage;
