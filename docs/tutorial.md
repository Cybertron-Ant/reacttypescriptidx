# Material UI Tutorial

This tutorial will guide you through common use cases and best practices for working with our Material UI implementation.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Creating a New Component](#creating-a-new-component)
3. [Using the Theme](#using-the-theme)
4. [Common Patterns](#common-patterns)
5. [Troubleshooting](#troubleshooting)

## Getting Started

### Prerequisites

- Node.js 14+
- npm or yarn
- Basic knowledge of React and TypeScript

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Creating a New Component

### 1. Basic Component Structure

```typescript
import React from 'react';
import { Box, Typography } from '@mui/material';

interface MyComponentProps {
  title: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return (
    <Box>
      <Typography variant="h6">{title}</Typography>
    </Box>
  );
};
```

### 2. Adding Styles

```typescript
// Using sx prop (recommended for one-off styles)
<Box
  sx={{
    padding: 2,
    backgroundColor: 'primary.light',
    borderRadius: 1
  }}
>

// Using styled components (recommended for reusable styles)
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.light,
  borderRadius: theme.shape.borderRadius
}));
```

## Using the Theme

### 1. Accessing Theme Values

```typescript
// In sx prop
<Box sx={{ color: 'primary.main' }}>

// In styled components
const StyledComponent = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main
}));

// In custom styles
const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main
  }
}));
```

### 2. Responsive Design

```typescript
// Breakpoint-based styling
<Box
  sx={{
    width: {
      xs: '100%',    // 0px+
      sm: '50%',     // 600px+
      md: '33.33%'   // 900px+
    }
  }}
>
```

## Common Patterns

### 1. Form Components

```typescript
import { TextField, Button, Box } from '@mui/material';

export const LoginForm: React.FC = () => {
  return (
    <Box component="form" sx={{ '& > *': { mb: 2 } }}>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
      >
        Login
      </Button>
    </Box>
  );
};
```

### 2. Data Display

```typescript
import { Card, CardContent, Grid } from '@mui/material';

interface DataItem {
  id: string;
  title: string;
  content: string;
}

interface DataGridProps {
  items: DataItem[];
}

export const DataGrid: React.FC<DataGridProps> = ({ items }) => {
  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Typography>{item.content}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
```

## Troubleshooting

### Common Issues

1. Theme not applying
   - Check ThemeProvider is wrapping your app
   - Verify theme object structure

2. TypeScript errors
   - Ensure proper type definitions
   - Check component prop types

3. Styling conflicts
   - Check specificity of styles
   - Verify sx prop usage

### Best Practices

1. Component Organization
   - Keep components small and focused
   - Use composition over inheritance

2. Performance
   - Memoize expensive components
   - Use proper React hooks

3. Code Style
   - Follow consistent naming conventions
   - Document complex components

## Need Help?

If you encounter any issues:
1. Check the technical documentation
2. Review the component examples
3. Create an issue in the project tracker
