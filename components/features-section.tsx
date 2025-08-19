import FeatureCard from '@/components/feature-card';
import type { Feature } from '@/lib/types';

interface FeaturesSectionProps {
  features: Feature[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className='py-20 bg-muted'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='font-serif text-4xl font-bold text-foreground mb-4'>
            Why Choose Novara?
          </h2>
          <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
            Experience the difference with our scientifically-formulated
            skincare solutions
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}