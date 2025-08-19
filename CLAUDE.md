# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `pnpm dev`
- **Build**: `pnpm build` 
- **Lint**: `pnpm lint`
- **Start production**: `pnpm start`

Uses pnpm as package manager (pnpm-lock.yaml present).

## Architecture

Next.js 15 beauty/skincare landing page with App Router architecture.

### Tech Stack
- Next.js 15 with App Router (`app/` directory)
- TypeScript with strict mode
- Tailwind CSS v4 with shadcn/ui components
- Radix UI primitives for accessibility
- Work Sans & Open Sans fonts
- Lucide React icons

### Key Structure
- **`app/`**: Pages and layouts using App Router
- **`components/ui/`**: Complete shadcn/ui component library (40+ components)
- **`lib/utils.ts`**: Contains `cn()` utility for className merging
- **`components.json`**: shadcn/ui config (new-york style, CSS variables)

### Component Patterns
- Client components use `"use client"` directive
- Conditional styling with `cn()` utility function
- Responsive-first design with Tailwind
- State management through React hooks

### Build Configuration
- ESLint and TypeScript errors ignored during builds (next.config.mjs)
- Unoptimized images enabled
- Absolute imports with `@/*` paths

The landing page features embedded YouTube video background, testimonial carousel, and premium skincare branding focused on "Novara" brand.