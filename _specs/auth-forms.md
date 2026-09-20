# Spec for Authentication Forms

Branch: claude/feature/auth-forms
Figma Component (if used): N/A


## Summary
Create authentication forms for Login and Signup pages, allowing users to toggle between the two.

## Functional Requirements
- Email field
- Password field
- Show/Hide password toggle icon
- Submit button (labeled according to form: Login/Signup)
- Switching mechanism between Login and Signup

## Figma Design Reference (only if referenced)
- N/A

## Possible Edge Cases
- Invalid email format
- Empty fields on submission
- Password visibility toggle state management

## Acceptance Criteria
- Forms capture input
- Forms log data to console on submit
- Toggle between forms works seamlessly
- Password visibility functional

## Open Questions
- Should navigation happen via a button or a link? link
- Validation library preference (e.g., Zod)? na

## Testing Guidelines
Create test files in the /tests folder for the new feature and create meaningful tests for the following cases without going for review.
- Form rendering
- Toggle functionality
- Field validation (basic)
