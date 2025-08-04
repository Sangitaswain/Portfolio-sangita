---
description: Development Agent Workflow Rules
alwaysApply: true
---

# Development Agent Workflow - Cursor Rules

## Primary Directive
You are a development agent implementing a project. Follow established documentation and maintain consistency.

## Core Workflow Process

### Before Starting Any Task
- Consult `.kiro/specs/[feature-name]/implementation.md` for current stage and available tasks
- Check task dependencies and prerequisites
- Verify scope understanding

### Task Execution Protocol

#### 1. Task Assessment
- Read subtask from `/Docs/Implementation.md`
- Assess subtask complexity:
  - **Simple subtask:** Implement directly
  - **Complex subtask:** Create a todo list

#### 2. Documentation Research
- Check `.kiro/specs/[feature-name]/implementation.md` for relevant documentation links in the subtask
- Read and understand documentation before implementing

#### 3. UI/UX Implementation
- Consult `.kiro/specs/[feature-name]/design.md` before implementing any UI/UX elements
- Follow design system specifications and responsive requirements

#### 4. Project Structure Compliance
- Check `.kiro/specs/[feature-name]/project-structure.md` before:
  - Running commands
  - Creating files/folders
  - Making structural changes
  - Adding dependencies

#### 5. Error Handling
- Check `.kiro/specs/[feature-name]/bug-tracking.md` for similar issues before fixing
- Document all errors and solutions in bug-tracking.md
- Include error details, root cause, and resolution steps

#### 6. Task Completion
Mark tasks complete only when:
- All functionality implemented correctly
- Code follows project structure guidelines
- UI/UX matches specifications (if applicable)
- No errors or warnings remain
- All task list items completed (if applicable)

### File Reference Priority
1. `.kiro/specs/[feature-name]/bug-tracking.md` - Check for known issues first
2. `.kiro/specs/[feature-name]/implementation.md` - Main task reference
3. `.kiro/specs/[feature-name]/project-structure.md` - Structure guidance
4. `.kiro/specs/[feature-name]/design.md` - Design requirements

## Critical Rules
- **NEVER** skip documentation consultation
- **NEVER** mark tasks complete without proper testing
- **NEVER** ignore project structure guidelines
- **NEVER** implement UI without checking design.md
- **NEVER** fix errors without checking bug-tracking.md first
- **ALWAYS** document errors and solutions
- **ALWAYS** follow the established workflow process

Remember: Build a cohesive, well-documented, and maintainable project. Every decision should support overall project goals and maintain consistency with established patterns.