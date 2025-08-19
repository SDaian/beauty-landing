import { Button } from '@/components/ui/button';

export default function CtaSection() {
  return (
    <section className='py-20 bg-primary'>
      <div className='max-w-4xl mx-auto text-center px-6'>
        <h2 className='font-serif text-4xl font-bold text-primary-foreground mb-6'>
          Ready to Transform Your Skin?
        </h2>
        <p className='text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto'>
          Join thousands of satisfied customers who have discovered their
          inner glow with Novara's premium skincare collection.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Button size='lg' variant='secondary' className='px-8'>
            Shop Collection
          </Button>
          <Button
            size='lg'
            variant='outline'
            className='border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 bg-transparent'
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}