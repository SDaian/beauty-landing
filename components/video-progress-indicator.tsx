import { Play } from 'lucide-react';

interface VideoProgressIndicatorProps {
  time?: string;
}

export default function VideoProgressIndicator({ time = '0:04' }: VideoProgressIndicatorProps) {
  return (
    <div className='absolute bottom-6 left-6 z-20'>
      <div className='flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-2'>
        <Play className='w-4 h-4 text-white' />
        <span className='text-white text-sm font-medium'>{time}</span>
      </div>
    </div>
  );
}