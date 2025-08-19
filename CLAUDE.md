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

### Project Structure (Next.js App Router Guidelines)

#### Top-Level Organization
- **`app/`**: Main App Router directory (routes, layouts, pages)
- **`components/`**: Shared UI components and component library
- **`components/ui/`**: Complete shadcn/ui component library (40+ components)
- **`lib/`**: Utility functions and shared logic
- **`public/`**: Static assets (images, fonts, etc.)
- **`styles/`**: Global CSS and styling files

#### App Router File Conventions
- **`page.tsx`**: Page components that define routes
- **`layout.tsx`**: Shared layouts for route segments
- **`loading.tsx`**: Loading states for route segments
- **`error.tsx`**: Error boundaries for route segments
- **`not-found.tsx`**: 404 pages for route segments
- **`route.ts`**: API route handlers

#### Organization Principles
- Colocate related files within route segments when appropriate
- Use route groups `(folder)` to organize without affecting URLs
- Use private folders `_folder` for internal implementation details
- Keep shared components and utilities outside `app/` directory
- Maintain consistent file naming: kebab-case for files, PascalCase for components

#### Current Structure
- **`lib/utils.ts`**: Contains `cn()` utility for className merging
- **`components.json`**: shadcn/ui config (new-york style, CSS variables)
- **`app/page.tsx`**: Main landing page component
- **`app/layout.tsx`**: Root layout with fonts and metadata

### Component Patterns
- Client components use `"use client"` directive
- Conditional styling with `cn()` utility function
- Responsive-first design with Tailwind
- State management through React hooks
- Follow Next.js App Router conventions for file organization

### Build Configuration
- ESLint and TypeScript errors ignored during builds (next.config.mjs)
- Unoptimized images enabled
- Absolute imports with `@/*` paths

The landing page features embedded YouTube video background, testimonial carousel, and premium skincare branding focused on "Novara" brand.