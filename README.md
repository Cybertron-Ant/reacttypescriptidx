# HR Management System Documentation

## Overview

The HR Management System is a modern React application built with TypeScript that demonstrates best practices in React Hooks usage, state management, and component architecture. This system provides a comprehensive solution for managing employee data with features like filtering, searching, and basic CRUD operations.

## Documentation

- [Technical Documentation](docs/hr-system/TECHNICAL.md) - Detailed implementation details and code examples
- [Tutorial](docs/hr-system/TUTORIAL.md) - Step-by-step guide to building the system
- [API Documentation](docs/hr-system/API.md) - API endpoints and usage

## Table of Contents

1. [Features](#features)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Architecture](#architecture)

## Features

- 👥 Employee Management
  - View employee list with details
  - Filter employees by status
  - Search employees by name
  - Delete employees
- 📊 Statistics Dashboard
  - Total employees count
  - Active employees count
  - Average salary calculation
- 🎯 Best Practices Implementation
  - Custom hooks
  - Context API
  - TypeScript integration
  - Performance optimization

## Technology Stack

- React 18+
- TypeScript
- Tailwind CSS
- Context API for state management
- Custom Hooks for business logic

## Project Structure

```
src/
├── context/
│   └── HRContext.tsx       # Global state management
├── features/
│   └── employees/
│       └── EmployeeList.tsx # Main employee management component
├── hooks/
│   └── useEmployees.ts     # Custom hook for employee operations
├── types/
│   └── hr.types.ts         # TypeScript interfaces
├── styles/
│   └── main.css           # Global styles
└── App.tsx                # Root component
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

For detailed setup instructions and examples, check out our [Tutorial](docs/hr-system/TUTORIAL.md).

## Architecture

### Context Layer

The application uses React Context API for global state management. The `HRContext` provides:
- Employee data
- Loading states
- Error handling
- CRUD operations

For detailed implementation, see our [Technical Documentation](docs/hr-system/TECHNICAL.md#context-implementation).

### Custom Hooks

`useEmployees` hook encapsulates:
- Employee state management
- CRUD operations
- Data filtering
- Performance optimizations

For hook implementation details, see our [Technical Documentation](docs/hr-system/TECHNICAL.md#react-hooks-implementation-details).

### Components

Components follow a hierarchical structure:
- App.tsx (Root component)
  - HRProvider (Context wrapper)
    - EmployeeList (Main feature component)

### Type Safety

The system uses TypeScript interfaces for:
- Employee data
- Department data
- Context types
- Filter options

For complete type definitions, see our [Technical Documentation](docs/hr-system/TECHNICAL.md#type-definitions).
