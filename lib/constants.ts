import type { Testimonial, Feature } from './types';

export const testimonials: Testimonial[] = [
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

export const features: Feature[] = [
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
];