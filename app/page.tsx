'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: "This skincare routine has completely transformed my skin! The glow is incredible and I've never felt more confident.",
      image: '/diverse-woman-smiling.png',
    },
    {
      name: 'Emily Chen',
      rating: 5,
      text: 'Amazing products! My skin feels so smooth and hydrated. The results were visible within just a few weeks.',
      image: '/happy-asian-woman.png',
    },
    {
      name: 'Maria Rodriguez',
      rating: 5,
      text: 'I love how natural and radiant my skin looks now. These products are worth every penny!',
      image: '/glowing-latina-woman.png',
    },
  ];

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
    <div className='min-h-screen bg-background'>
      {/* Navigation */}
      <nav className='relative z-50 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-sm'>
        <div className='flex items-center space-x-2'>
          <div className='w-8 h-8 bg-primary rounded-lg flex items-center justify-center'>
            <span className='text-primary-foreground font-bold text-sm'>N</span>
          </div>
          <span className='font-serif font-bold text-xl text-foreground'>
            Novara
          </span>
        </div>

        <div className='hidden md:flex items-center space-x-8'>
          <a
            href='#'
            className='text-foreground hover:text-primary transition-colors'
          >
            Shop
          </a>
          <a
            href='#'
            className='text-foreground hover:text-primary transition-colors'
          >
            Products
          </a>
          <a
            href='#'
            className='text-foreground hover:text-primary transition-colors'
          >
            Collections
          </a>
          <a
            href='#'
            className='text-foreground hover:text-primary transition-colors'
          >
            About
          </a>
          <a
            href='#'
            className='text-foreground hover:text-primary transition-colors'
          >
            Contact
          </a>
        </div>

        <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
          Shop Now
        </Button>
      </nav>

      {/* Hero Section with YouTube Video Background */}
      <section className='relative h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <iframe
            className='w-full h-full object-cover scale-150'
            src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1'
            title='Beauty Background Video'
            style={{ border: 0 }}
            allow='autoplay; encrypted-media'
            allowFullScreen
          ></iframe>
          <div className='absolute inset-0 bg-black/30'></div>
        </div>

        {/* Content Overlay */}
        <div className='relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='text-white space-y-6'>
            <h1 className='font-serif text-5xl md:text-6xl font-bold leading-tight'>
              Unleash your <br />
              <em className='italic'>inner glow.</em>
            </h1>

            <p className='text-lg text-white/90 max-w-md leading-relaxed'>
              Discover premium skincare collections that enhance your natural
              beauty with professional-grade formulas and stunning results.
            </p>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                size='lg'
                className='bg-primary hover:bg-primary/90 text-primary-foreground px-8'
              >
                Shop Skincare
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='border-white text-white hover:bg-white hover:text-foreground px-8 bg-transparent'
              >
                View Tutorials
              </Button>
            </div>

            {/* Rating */}
            <div className='flex items-center space-x-2 pt-4'>
              <div className='flex space-x-1'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className='w-5 h-5 fill-yellow-400 text-yellow-400'
                  />
                ))}
              </div>
              <span className='text-white/90'>
                4.9/5 from over 12,000 beauty lovers
              </span>
            </div>
          </div>

          {/* Right Side - Single Column */}
          <div className='relative flex flex-col items-end'>
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

            {/* Dots Indicator */}
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
        </div>

        {/* Video Progress Indicator */}
        <div className='absolute bottom-6 left-6 z-20'>
          <div className='flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-2'>
            <Play className='w-4 h-4 text-white' />
            <span className='text-white text-sm font-medium'>0:04</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
            {[
              {
                title: 'Premium Ingredients',
                description:
                  'Carefully selected natural and organic ingredients for maximum effectiveness',
              },
              {
                title: 'Proven Results',
                description:
                  'Clinically tested formulas that deliver visible improvements in skin texture and glow',
              },
              {
                title: 'Expert Formulation',
                description:
                  'Developed by skincare professionals with years of research and expertise',
              },
            ].map((feature, index) => (
              <Card key={index} className='text-center'>
                <CardContent className='p-8'>
                  <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6'>
                    <div className='w-8 h-8 bg-primary rounded-full'></div>
                  </div>
                  <h3 className='font-serif text-xl font-semibold text-foreground mb-4'>
                    {feature.title}
                  </h3>
                  <p className='text-muted-foreground'>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  );
}
