# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

### Development & Quality
- Commands:
  - Start (Dev): `npm run dev`
  - Build: `npm run build`
  - Lint: `npm run lint`
  - Test (`vitest`): `npm run test` or `npm run test -- <filename>` for single tests.
- Style: Tailwind CSS v4 is used globally.

### Architecture & Route Groups for project
- Next.js 16 App Router.
- **`(public)`**: Contains landing, login, signup, and preview pages. These pages act as entry points; if user is authenticated, redirect them to `/heists`.
- **`(dashboard)`**: Secured routes. All routes within this group assume an active session.
  - `/heists`: Main list view.
  - `/heists/create`: Form for creating a new heist.
  - `/heists/[id]`: Dynamic detail page.

### Best Practices & Conventions
- **Feature Additions**: When adding new functionality, keep business logic contained within appropriate subdirectories in `app/(dashboard)/` or `app/(public)/`.
- **Testing**: We use Vitest + React Testing Library. Ensure new features under `components/` have corresponding tests in `tests/components/`.
- **Gotchas**: Because of the App Router's route groups, shared layouts (like `Navbar`) are defined at the layout level in each group (`app/(public)/layout.tsx` or `app/(dashboard)/layout.tsx`). If you need to make changes to shared UI, verify which layout file it is anchored in.
