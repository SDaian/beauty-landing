import { Card, CardContent } from '@/components/ui/card';
import type { Feature } from '@/lib/types';

interface FeatureCardProps extends Feature {}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <Card className='text-center'>
      <CardContent className='p-8'>
        <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6'>
          <div className='w-8 h-8 bg-primary rounded-full' />
        </div>
        <h3 className='font-serif text-xl font-semibold text-foreground mb-4'>
          {title}
        </h3>
        <p className='text-muted-foreground'>{description}</p>
      </CardContent>
    </Card>
  );
}