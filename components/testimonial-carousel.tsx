'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Testimonial } from '@/lib/types';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className='relative flex-col items-end hidden md:flex'>
      <Card className='bg-white/10 backdrop-blur-sm border-white/20 h-[200px] w-[65%]'>
        <CardContent className='p-10 h-full flex flex-col justify-center relative'>
          <button
            onClick={prevTestimonial}
            className='absolute left-2 top-1/2 -translate-y-1/2 z-10'
          >
            <ChevronLeft className='w-6 h-6 text-white' />
          </button>
          <button
            onClick={nextTestimonial}
            className='absolute right-2 top-1/2 -translate-y-1/2 z-10'
          >
            <ChevronRight className='w-6 h-6 text-white' />
          </button>

          <div className='flex items-start space-x-4'>
            <img
              src={
                testimonials[currentTestimonial].image ||
                '/placeholder.svg'
              }
              alt={testimonials[currentTestimonial].name}
              className='w-12 h-12 rounded-full object-cover'
            />
            <div className='flex-1'>
              <div className='flex items-center space-x-2 mb-2'>
                <h4 className='text-white font-semibold'>
                  {testimonials[currentTestimonial].name}
                </h4>
                <div className='flex space-x-1'>
                  {[
                    ...Array(testimonials[currentTestimonial].rating),
                  ].map((_, i) => (
                    <Star
                      key={i}
                      className='w-4 h-4 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                </div>
              </div>
              <p className='text-white/90 text-sm leading-relaxed transition-all duration-500'>
                {testimonials[currentTestimonial].text}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className='flex justify-center space-x-2 mt-4 w-[65%]'>
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentTestimonial ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}