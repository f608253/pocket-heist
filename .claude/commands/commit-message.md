---
description: Create a commit message by analyzing git diffs
allowed-tools: Bash(git status:*), Bash(git diff --staged), Bash(git commit:*)
---

## Your task:

Analyze above stages git changes and create a commit message. Use present tense and explain "why" something has changed , nit just "what" has changed.


## Run these commands:

```bash
git status
git diff --staged
```

## Commit types with emojis
Only use the following emojis:

  ✨ `feat:` - New feature
  🐛 `fix:` - Bug fix
  📝 `docs:` - Documentation
  🎨 `style:` - Code style changes
  ♻️ `refactor:` - Code refactoring
  ✅ `test:` - Adding or modifying tests

## Format:
Use the following format for making the commit message:

```
<emoji> <type>: <concise_description>
<optional_body_explaining_why>
```

## Output: 
1. Show summary of changes currently stages
2. Propose commit message with appropriate emoji
3. Ask for confirmation before commiting

DO NOT auto commit - wait for use approval, and only commit if the user says so.