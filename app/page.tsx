import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import FeaturesSection from '@/components/features-section';
import CtaSection from '@/components/cta-section';
import { features } from '@/lib/constants';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-background'>
      <Navigation />
      <HeroSection />
      <FeaturesSection features={features} />
      <CtaSection />
    </div>
  );
}
