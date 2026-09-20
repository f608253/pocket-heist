# Implementation Plan: Authentication Forms

## Context
This plan addresses the need for functional mock authentication forms on the `/login` and `/signup` pages, as outlined in the `_specs/auth-forms.md` spec. We need to capture email and password, toggle password visibility, log the data to the console, and allow users to switch easily between the two forms.

## Recommended Approach

We will build a reusable client component (`AuthForm`) which handles the shared functionality (inputs, visibility toggle, submission logging) and adapts its messaging and linkage based on a `mode` prop.

### 1. Reusable Component (`components/AuthForm/`)
- **`AuthForm.tsx`**: A client component (`"use client"`) that accepts a `mode` prop (`'login'` | `'signup'`).
  - Manages state for `email`, `password`, and `showPassword`.
  - Forms use Tailwind and project CSS utilities (`.form-title`, `.btn`) for styling.
  - The submit handler will log form data to the console and prevent default browser submission.
  - Includes a Next.js `<Link>` to toggle between `/login` and `/signup`.
- **`AuthForm.module.css`**: (Created for consistency with the project pattern, even if styling is mostly Tailwind inline).
- **`index.ts`**: Standard export.

### 2. Page Integration
- Modify `app/(public)/login/page.tsx` and `app/(public)/signup/page.tsx`.
- Both pages will utilize the existing `.page-content` and `.center-content` layout wrapper classes.
- Mount the `<AuthForm>` specifying the respective mode.

### 3. Verification & Testing
Create `tests/components/AuthForm.test.tsx` using Vitest and React Testing Library:
- Verify correct rendering for both modes (Login vs Signup text).
- Verify password visibility toggle functionality.
- Verify that submission triggers `console.log` with the correct payload.

## Critical Files
- `components/AuthForm/AuthForm.tsx`
- `app/(public)/login/page.tsx`
- `app/(public)/signup/page.tsx`
- `tests/components/AuthForm.test.tsx`