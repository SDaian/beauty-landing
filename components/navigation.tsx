import { Button } from '@/components/ui/button';

export default function Navigation() {
  return (
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

      <Button className='bg-primary hover:bg-primary/90 px-8 text-primary-foreground'>
        Shop Now
      </Button>
    </nav>
  );
}