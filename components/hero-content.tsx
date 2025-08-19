import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

export default function HeroContent() {
  return (
    <div className='text-white space-y-6'>
      <h1 className='font-serif text-5xl md:text-7xl font-bold leading-tight'>
        Unleash your <br />
        <em className='italic'>inner glow.</em>
      </h1>

      <p className='text-xl text-white/90 max-w-md leading-relaxed'>
        Discover premium skincare collections that enhance your natural
        beauty with professional-grade formulas and stunning results.
      </p>

      <div className='flex flex-col sm:flex-row gap-4'>
        <Button
          size='lg'
          className='bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 px-8 font-semibold'
        >
          Shop Skincare
        </Button>
        <Button
          size='lg'
          variant='outline'
          className='border-white text-white hover:bg-white hover:text-foreground text-lg py-6 px-8 bg-transparent font-semibold'
        >
          View Tutorials
        </Button>
      </div>

      <div className='flex items-center justify-between md:justify-normal space-x-2 pt-4'>
        <div className='flex space-x-1'>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className='w-3 h-3 md:w-5 md:h-5 fill-yellow-400 text-yellow-400'
            />
          ))}
        </div>
        <span className='text-white/90 text-sm md:text-lg'>
          4.9/5 from over 12,000 beauty lovers
        </span>
      </div>
    </div>
  );
}