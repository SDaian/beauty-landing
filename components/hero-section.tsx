import HeroVideoBackground from '@/components/hero-video-background';
import HeroContent from '@/components/hero-content';
import TestimonialCarousel from '@/components/testimonial-carousel';
import VideoProgressIndicator from '@/components/video-progress-indicator';
import { testimonials } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section className='relative h-screen flex items-center justify-center overflow-hidden'>
      <HeroVideoBackground videoId='dQw4w9WgXcQ' />

      <div className='relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center'>
        <HeroContent />
        <TestimonialCarousel testimonials={testimonials} />
      </div>

      <VideoProgressIndicator />
    </section>
  );
}