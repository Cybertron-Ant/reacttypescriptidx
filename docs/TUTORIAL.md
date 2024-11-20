# Tailwind CSS in React TypeScript Tutorial

This tutorial will guide you through using Tailwind CSS in your React TypeScript project, from basic concepts to advanced patterns.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Basic Concepts](#basic-concepts)
3. [Responsive Design](#responsive-design)
4. [Custom Components](#custom-components)
5. [Advanced Patterns](#advanced-patterns)
6. [Troubleshooting](#troubleshooting)

## Getting Started

### Installation
```bash
# Install Tailwind CSS and its dependencies
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind CSS
npx tailwindcss init -p
```

### Configuration Setup
1. Update `tailwind.config.js`:
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
```

2. Create or update your CSS file (e.g., `src/styles/main.css`):
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. Import the CSS in your main component:
```typescript
import './styles/main.css';
```

## Basic Concepts

### 1. Utility-First Approach
Instead of writing custom CSS, use Tailwind's utility classes:

```tsx
// Traditional CSS
<div className="header">
  <h1 className="title">Hello World</h1>
</div>

// With Tailwind CSS
<div className="p-4 bg-white shadow-md">
  <h1 className="text-2xl font-bold text-gray-800">Hello World</h1>
</div>
```

### 2. Common Utilities
- Spacing: `p-4` (padding), `m-2` (margin)
- Typography: `text-xl`, `font-bold`, `text-center`
- Colors: `text-blue-500`, `bg-gray-100`
- Layout: `flex`, `grid`, `container`

## Responsive Design

### Breakpoint Prefixes
```tsx
<div className="
  w-full          // Mobile first
  md:w-1/2       // Medium screens (768px)
  lg:w-1/3       // Large screens (1024px)
">
  Responsive Content
</div>
```

### Example: Responsive Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="card">Item 1</div>
  <div className="card">Item 2</div>
  <div className="card">Item 3</div>
</div>
```

## Custom Components

### 1. Creating Reusable Components
Use the `@layer components` directive in your CSS:

```css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded-md
    hover:bg-blue-600 transition-colors duration-200;
  }
}
```

### 2. Component Example
```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children }) => {
  const baseClasses = "px-4 py-2 rounded-md transition-colors duration-200";
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
};
```

## Advanced Patterns

### 1. Dynamic Classes
```tsx
const isDark = true;

<div className={`
  ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}
  p-4 rounded-lg
`}>
  Dynamic Content
</div>
```

### 2. Custom Variants
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundColor: {
        'primary': {
          light: '#60A5FA',
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
        }
      }
    }
  }
}
```

### 3. Group Hover Effects
```tsx
<div className="group hover:bg-gray-100 p-4">
  <h2 className="group-hover:text-blue-500">
    Hover the parent to see this change
  </h2>
</div>
```

## Troubleshooting

### Common Issues and Solutions

1. **Classes not applying**
   - Check if the file is included in `content` array in `tailwind.config.js`
   - Ensure CSS file is imported correctly
   - Clear PostCSS cache: `rm -rf node_modules/.cache/postcss`

2. **Custom classes not working**
   - Verify `@layer` directive usage
   - Check for syntax errors in class definitions
   - Ensure proper ordering of CSS imports

3. **Build optimization issues**
   - Use PurgeCSS correctly
   - Check for dynamic class name generation
   - Verify proper content configuration

### Performance Tips
1. Use JIT mode for faster development
2. Minimize dynamic class name generation
3. Leverage component extraction for repeated patterns
4. Use proper purge configuration in production

Need help? Check out:
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React TypeScript Documentation](https://www.typescriptlang.org/docs/handbook/react.html)
- [PostCSS Documentation](https://postcss.org/)

# HR Events Module Tutorial

This tutorial will guide you through using the HR Events Management feature step by step.

## Table of Contents
1. [Viewing Events](#viewing-events)
2. [Creating an Event](#creating-an-event)
3. [Managing Event Status](#managing-event-status)
4. [Best Practices](#best-practices)

## Viewing Events

The Events page displays all your HR events in a clean, grid layout. Each event card shows:
- Event title
- Description
- Date and time
- Location
- Number of attendees
- Status indicator

### Filtering Events
*Coming soon*

## Creating an Event

1. Click the "Create New Event" button in the top-right corner
2. Fill in the event details:
   - Title (required)
   - Description
   - Date and time
   - Location
   - Event type (select from dropdown)
   - Status

### Example: Creating a Training Event

1. Click "Create New Event"
2. Enter details:
   ```
   Title: Q2 React Training
   Description: Hands-on React training for new developers
   Date: [Select tomorrow's date]
   Time: 10:00 AM
   Location: Conference Room A
   Type: TRAINING
   Status: SCHEDULED
   ```
3. Click "Create Event"

## Managing Event Status

Events can have the following statuses:
- `SCHEDULED`: Default status for new events
- `IN_PROGRESS`: Event is currently happening
- `COMPLETED`: Event has finished
- `CANCELLED`: Event was cancelled

### Updating Event Status

1. Find the event in the list
2. Click the status indicator
3. Select the new status from the dropdown
4. Status will update with corresponding color:
   - Blue: Scheduled
   - Yellow: In Progress
   - Green: Completed
   - Red: Cancelled

## Best Practices

### Event Naming
Use clear, descriptive names:
- "Q2 2024 Performance Reviews"
- "Meeting"

### Time Management
- Schedule events during business hours
- Consider time zones for remote attendees
- Add buffer time before and after

### Description Guidelines
Include:
- Purpose of the event
- Required preparations
- Contact person
- Any special instructions

Example:
```
Quarterly performance review meetings for the Engineering team.
Please prepare:
- Q2 goals review
- Project highlights
- Growth areas

Contact: john.doe@company.com
```

## Tips & Tricks

1. **Quick Create**
   - Use keyboard shortcut `Ctrl + N` to open new event form
   - Tab through fields for quick entry

2. **Event Templates**
   *Coming soon*
   - Save common event types as templates
   - Quick-fill forms with template data

3. **Bulk Operations**
   *Coming soon*
   - Select multiple events
   - Update status in bulk
   - Export selected events

## Troubleshooting

### Common Issues

1. **Event Not Showing**
   - Refresh the page
   - Check if you have the correct permissions
   - Verify the event status isn't "CANCELLED"

2. **Can't Create Event**
   - All required fields must be filled
   - Date must be in the future
   - Time must be in correct format

### Getting Help

If you encounter any issues:
1. Check this documentation
2. Contact HR system administrator
3. Submit a support ticket

## Next Steps

After mastering the basics, try:
1. Creating recurring events
2. Managing attendee lists
3. Exporting event reports
4. Setting up event notifications

## Upcoming Features

Stay tuned for:
- Calendar view
- Event templates
- Attendee management
- Email notifications
- Mobile app support

## Feedback

We're constantly improving! Send your feedback to:
- Email: support@company.com
- Internal ticket: #hr-events-feedback
