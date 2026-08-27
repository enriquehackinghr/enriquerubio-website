# Enrique Rubio Speaker Website

## Overview

A premium personal speaker website for Enrique Rubio, founder of Hacking HR, focused on helping organizations stay relevant in the age of AI. The site features a modern, tech-inspired brutalist design aesthetic with an AI-powered chat assistant for booking inquiries. It includes a booking form that integrates with Google Sheets for lead tracking and Gmail for notifications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with custom brutalist design system
- **UI Components**: shadcn/ui (New York style) with Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Fonts**: DM Sans (body) and Space Grotesk (headings) via Google Fonts
- **Build Tool**: Vite with custom plugins for meta images and Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **Database ORM**: Drizzle ORM with PostgreSQL
- **AI Integration**: OpenAI via Replit AI Integrations (uses `AI_INTEGRATIONS_OPENAI_BASE_URL` and `AI_INTEGRATIONS_OPENAI_API_KEY`)
- **Build**: esbuild for server bundling, Vite for client

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: `shared/schema.ts`
- **Tables**: users, conversations, messages (for AI chat tracking)
- **Migrations**: Drizzle Kit with `drizzle-kit push` command

### Key Design Patterns
- **Monorepo Structure**: Client (`client/`), server (`server/`), shared code (`shared/`)
- **Path Aliases**: `@/*` for client source, `@shared/*` for shared code, `@assets` for attached assets
- **API Pattern**: REST endpoints under `/api/` prefix
- **Form Handling**: Direct API calls with React state management

### Pages and Sections
- **Home Page**: Hero, Problem Framing, How It Works, Build With You, Speaking, Topics, Engagement Formats, Founder, About, Booking
- **Speaking Page**: Detailed keynote information
- **Chat Page**: AI-powered conversation interface for booking follow-ups

## External Dependencies

### Third-Party Services
- **OpenAI**: AI chat responses via Replit AI Integrations connector
- **Google Sheets**: Lead/booking storage via Replit Connectors (`google-sheet`)
- **Gmail**: Notification emails via Replit Connectors (`google-mail`)

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string
- `AI_INTEGRATIONS_OPENAI_BASE_URL`: Replit AI integration endpoint
- `AI_INTEGRATIONS_OPENAI_API_KEY`: Replit AI integration key
- `NOTIFICATION_EMAIL`: (optional) Override email for booking notifications

### Key NPM Packages
- `drizzle-orm` / `drizzle-kit`: Database ORM and migrations
- `@tanstack/react-query`: Data fetching and caching
- `openai`: AI chat completions
- `googleapis`: Google Sheets and Gmail APIs
- `express`: HTTP server framework
- `zod` / `drizzle-zod`: Schema validation