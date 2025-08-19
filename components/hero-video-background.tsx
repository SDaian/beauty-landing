interface HeroVideoBackgroundProps {
  videoId: string;
  className?: string;
}

export default function HeroVideoBackground({ videoId, className = '' }: HeroVideoBackgroundProps) {
  return (
    <div className='absolute inset-0 z-0'>
      <iframe
        className={`w-full h-full object-cover scale-450 md:scale-150 ${className}`}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
        title='Beauty Background Video'
        style={{ border: 0 }}
        allow='autoplay; encrypted-media'
        allowFullScreen
      />
      <div className='absolute inset-0 bg-black/30' />
    </div>
  );
}