# Novara Beauty Landing Page

A modern, responsive beauty/skincare landing page built with Next.js 15, featuring a stunning video background, interactive testimonials, and premium design aesthetics.

![Novara Beauty Landing Page](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- **🎥 Video Background Hero**: YouTube video integration with responsive scaling
- **📱 Mobile Optimized**: Full-viewport video display on mobile devices
- **🎠 Interactive Testimonials**: Auto-rotating carousel with manual navigation
- **🎨 Modern Design**: Beautiful glassmorphism effects and animations
- **♿ Accessibility**: Built with Radix UI primitives for screen reader support
- **⚡ Performance**: Optimized with Next.js 15 App Router architecture
- **🔧 Developer Experience**: TypeScript, ESLint, and component modularity

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) with strict mode
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with CSS variables
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Work Sans (serif) & Open Sans (sans-serif)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📁 Project Structure

Following Next.js App Router conventions:

```
├── app/                    # App Router directory
│   ├── layout.tsx         # Root layout with fonts and metadata
│   └── page.tsx           # Main homepage (refactored to use components)
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui component library (40+ components)
│   ├── navigation.tsx    # Site navigation header
│   ├── hero-section.tsx  # Main hero container
│   ├── hero-content.tsx  # Hero text and CTA buttons
│   ├── hero-video-background.tsx  # YouTube video background
│   ├── testimonial-carousel.tsx   # Interactive testimonial slider
│   ├── video-progress-indicator.tsx  # Video play indicator
│   ├── features-section.tsx       # Features grid container
│   ├── feature-card.tsx          # Individual feature card
│   └── cta-section.tsx          # Call-to-action section
├── lib/                   # Utilities and shared logic
│   ├── types.ts          # TypeScript interfaces
│   ├── constants.ts      # Static data (testimonials, features)
│   └── utils.ts          # Utility functions (cn helper)
├── styles/               # Global styles
│   └── globals.css      # Tailwind imports and custom properties
└── public/              # Static assets
    └── [images...]      # Testimonial and brand images
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and pnpm installed
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SDaian/beauty-landing.git
   cd beauty-landing
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## 🎨 Design System

### Color Palette
- **Primary**: `#F5BABB` (Light pink)
- **Secondary**: `#568F87` (Sage green)
- **Background**: Pure white with glassmorphism overlays
- **Text**: Dark slate for readability

### Typography
- **Headings**: Work Sans (serif) for elegance
- **Body**: Open Sans (sans-serif) for readability

### Components
- Built with shadcn/ui for consistency
- Responsive-first approach with Tailwind
- Glassmorphism effects for modern aesthetics

## 📱 Responsive Design

- **Mobile**: Full-viewport video with optimized content layout
- **Tablet**: Balanced grid system with enhanced spacing
- **Desktop**: Full testimonial carousel and expanded hero layout

## 🔧 Key Features Breakdown

### Video Background
- YouTube embed with autoplay and loop
- Responsive scaling: `scale-450` on mobile, `scale-150` on desktop
- Overlay gradient for content readability

### Testimonial System
- Auto-rotating every 4 seconds
- Manual navigation with chevron controls
- Dot indicators for direct access
- Smooth transitions and animations

### Component Architecture
- Modular design following Next.js App Router guidelines
- TypeScript interfaces for type safety
- Reusable components across potential future pages
- Clean separation of concerns

## 🚀 Deployment

The project is optimized for deployment on platforms like:
- [Vercel](https://vercel.com/) (recommended for Next.js)
- [Netlify](https://netlify.com/)
- [Railway](https://railway.app/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern beauty brands
- [shadcn/ui](https://ui.shadcn.com/) for the component system
- [Lucide](https://lucide.dev/) for beautiful icons
- YouTube for video hosting capabilities

---

Built with ❤️ using Next.js 15 and modern web technologies.