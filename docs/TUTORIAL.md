# Tutorial: Building an HR Management System

This tutorial will guide you through using and extending the HR Management System.

## 📚 Table of Contents

1. [Getting Started](#getting-started)
2. [Basic Usage](#basic-usage)
3. [Advanced Features](#advanced-features)
4. [Customization Guide](#customization-guide)
5. [Troubleshooting](#troubleshooting)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Basic knowledge of React and TypeScript

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd reacttypescriptidx
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 💻 Basic Usage

### Adding a New Employee

1. Click the "Add Employee" button
2. Fill in the required fields:
   - First Name
   - Last Name
   - Email
   - Position
   - Department
   - Hire Date
3. Click "Submit"

Example:
```typescript
// Form will validate automatically
const newEmployee = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@company.com",
    position: "Developer",
    department: "Engineering",
    hireDate: "2024-01-15"
};
```

### Searching for Employees

1. Use the search bar at the top
2. Type any keyword (searches across all fields)
3. Results update in real-time

Example search terms:
- "John" (searches names)
- "Engineering" (searches department)
- "Developer" (searches position)

### Deleting an Employee

1. Find the employee in the list
2. Click the delete icon (🗑️)
3. Confirm the deletion

## 🔍 Advanced Features

### Custom Search Filters

Use the advanced search options to filter by:
- Department
- Position
- Hire Date Range

Example:
```typescript
// Using the useEmployeeSearch hook
const { filteredEmployees } = useEmployeeSearch(employees, {
    query: "Engineering",
    field: "department"
});
```

### Form Validation

The system includes built-in validation:
- Email format checking
- Required field validation
- Date format validation

Example custom validation:
```typescript
const customValidation = {
    email: (value: string) => {
        if (!value.includes("@company.com")) {
            return "Must use company email";
        }
        return "";
    }
};
```

## 🎨 Customization Guide

### Styling with Tailwind

1. Modify existing styles:
```tsx
// Example: Customizing a card
<div className="rounded-lg shadow-md hover:shadow-lg 
                bg-white p-4 transition-all duration-300">
    {/* Card content */}
</div>
```

2. Add new color schemes:
```javascript
// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            colors: {
                'custom-blue': '#1234567',
            }
        }
    }
}
```

### Adding New Features

1. Create a new custom hook:
```typescript
const useCustomFeature = () => {
    const [state, setState] = useState(initialState);
    
    // Add your logic here
    
    return { state, actions };
};
```

2. Integrate with existing components:
```tsx
function EmployeeList() {
    const { feature } = useCustomFeature();
    // Use the feature in your component
}
```

## ❗ Troubleshooting

### Common Issues

1. **Search Not Working**
   - Check if the search term is correct
   - Verify that the data is loaded
   - Check console for errors

2. **Form Submission Fails**
   - Validate all required fields
   - Check email format
   - Verify date format

3. **Styling Issues**
   - Clear browser cache
   - Rebuild Tailwind classes
   - Check for conflicting styles

### Debug Tips

1. Enable debug logging:
```typescript
const DEBUG = true;

if (DEBUG) {
    console.log("Employee data:", employees);
}
```

2. Check React DevTools:
- Monitor state changes
- Verify prop values
- Track component re-renders

## 🎯 Next Steps

1. Explore the [Technical Documentation](./TECHNICAL.md)
2. Join our [Community Discord]
3. Submit feature requests
4. Contribute to the project

Remember to check the [README.md](./README.md) for the latest updates and changes!
