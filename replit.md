# replit.md

## Overview

A premium portfolio website for a UX/UI & Product Designer with 5+ years of experience. The site showcases case studies across SaaS, mobile apps, websites, and Google Design Sprints. Built as a modern, 2026-ready portfolio with emphasis on premium minimalism, strong typography, and smooth user experience.

The application features a one-page home layout with multiple sections (hero, credibility, case studies, process, AI tooling, about, contact), a case studies index with filtering, and individual case study pages with detailed project breakdowns.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, built using Vite
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and data fetching
- **Styling**: TailwindCSS with custom CSS variables for theming, plus shadcn/ui component library (New York style)
- **Design System**: Inter font family with geometric sans-serif hierarchy, premium minimalist aesthetic following Linear/Stripe-inspired patterns

### Backend Architecture
- **Runtime**: Node.js with Express
- **API Pattern**: RESTful API structure under `/api` prefix
- **Static Serving**: Express serves built Vite assets in production
- **Development**: Vite dev server with HMR integration

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` with Zod validation via drizzle-zod
- **Session Storage**: In-memory storage class (`MemStorage`) for user data, designed to be swapped for database-backed storage
- **Database Migrations**: Drizzle Kit for schema push and migration management

### Project Structure
- `client/` - React frontend application
  - `src/pages/` - Page components (home, case-studies-index, case-study, not-found)
  - `src/components/` - Reusable UI components organized by feature (home sections, case studies, layout, ui)
  - `src/lib/` - Utilities, case study data, query client configuration
- `server/` - Express backend
  - `routes.ts` - API route definitions
  - `storage.ts` - Data storage interface and implementation
  - `static.ts` - Static file serving for production
  - `vite.ts` - Vite dev server integration
- `shared/` - Shared types and database schema

### Build System
- **Development**: `tsx` for TypeScript execution, Vite for frontend HMR
- **Production Build**: Custom build script using esbuild for server bundling, Vite for client
- **Output**: Server bundled to `dist/index.cjs`, client to `dist/public/`

## External Dependencies

### UI Component Library
- **shadcn/ui**: Full component suite using Radix UI primitives
- **Radix UI**: Accessible, unstyled primitives for dialogs, menus, tooltips, forms
- **Lucide React**: Icon library

### Database & ORM
- **PostgreSQL**: Primary database (requires DATABASE_URL environment variable)
- **Drizzle ORM**: Type-safe SQL query builder and ORM
- **connect-pg-simple**: PostgreSQL session store for Express

### Frontend State & Utilities
- **TanStack React Query**: Server state management and caching
- **react-hook-form + zod**: Form handling with schema validation
- **wouter**: Lightweight React router
- **date-fns**: Date manipulation utilities
- **embla-carousel-react**: Carousel component
- **class-variance-authority + clsx + tailwind-merge**: Utility-first CSS composition

### Build & Development Tools
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Server-side bundling
- **TypeScript**: Type checking across entire codebase
- **PostCSS + Autoprefixer**: CSS processing for Tailwind