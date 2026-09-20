# Implementation Plan: Authentication Forms

## Context
This feature implements mock authentication forms for the `/login` and `/signup` pages as defined in `_specs/auth-forms.md`. The goal is to capture user credentials (email/password), log them to the console upon submission, and allow users to toggle password visibility. Users should also be able to navigate seamlessly between the login and signup forms.

## Recommended Approach

We will create a unified, reusable client component (`AuthForm`) that handles both login and signup modes. This avoids duplicating form state logic while centralizing the UI.

### 1. Reusable Component (`components/AuthForm/`)
- **`AuthForm.tsx`**: A `"use client"` component accepting a `mode` prop (`'login'` | `'signup'`).
  - **State**: React `useState` for `email`, `password`, and `showPassword`.
  - **Styles**: Leverages existing Tailwind utilities (`.btn`, `.form-title`, `bg-lighter` for formatting).
  - **Password Toggle**: Uses `lucide-react` (e.g., `Eye` and `EyeOff` icons) to toggle the password input `type` between `password` and `text`.
  - **Submit Logic**: Prevents default browser submission and triggers `console.log('Form Submitted: ', { mode, email, password })`.
  - **Navigation**: Uses Next.js `<Link>` to provide a switch button (e.g., "Don't have an account? Sign up" redirecting to `/signup`).
- **`AuthForm.module.css`**: Created to maintain the established project pattern (as seen in Navbar and Avatar), even if primarily relying on Tailwind.
- **`index.ts`**: Standard export file.

### 2. Page Integration
- Modify `app/(public)/login/page.tsx` and `app/(public)/signup/page.tsx`.
- Wrap the `<AuthForm mode="login" />` (or `signup`) in the existing `.page-content` and `.center-content` layout classes globally defined in `globals.css`.

### 3. Verification & Testing
Create `tests/components/AuthForm.test.tsx` using Vitest and `@testing-library/react`. We will test:
- **Rendering**: Form renders the correct title and switch link based on the `mode` prop.
- **State Updates**: User can type into the email and password fields.
- **Toggle Visibility**: Clicking the "hide password" icon toggles the input type correctly.
- **Submission**: Clicking submit triggers `console.log` with the correct payload (mocked via `vi.spyOn(console, 'log')`).

## Critical Files
- `components/AuthForm/AuthForm.tsx`
- `app/(public)/login/page.tsx`
- `app/(public)/signup/page.tsx`
- `tests/components/AuthForm.test.tsx`