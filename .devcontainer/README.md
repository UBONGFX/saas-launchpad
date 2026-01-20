# Dev Container Configuration

This devcontainer provides a consistent development environment for the SaaS Launchpad project.

## What's Included

- **Node.js 20** with TypeScript support
- **pnpm** package manager
- **Git** and **GitHub CLI**

## VS Code Extensions

- ESLint - Code linting
- Prettier - Code formatting
- Tailwind CSS IntelliSense - Tailwind autocomplete
- Prisma - Database schema support
- Error Lens - Inline error display
- GitLens - Enhanced Git capabilities

## Getting Started

1. Open this folder in VS Code
2. Click "Reopen in Container" when prompted
3. Wait for the container to build and dependencies to install
4. Start developing with `pnpm dev`

## Environment Variables

Don't forget to copy `example.env` to `.env` and configure your environment variables.

## Port Forwarding

Port 3000 is automatically forwarded for the Next.js development server.
