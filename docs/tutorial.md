# Tutorial: Getting Started with React TypeScript and Chakra UI

## 📚 Table of Contents

1. [Setup and Installation](#setup-and-installation)
2. [Project Structure](#project-structure)
3. [Creating Your First Component](#creating-your-first-component)
4. [Theme Customization](#theme-customization)
5. [Advanced Features](#advanced-features)

## 🚀 Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Code editor (VS Code recommended)

### Initial Setup

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📁 Project Structure

Our project follows a modular structure:

```
src/
├── components/   # Reusable UI components
├── layouts/      # Layout components
├── theme/        # Theme configuration
└── App.tsx       # Main application
```

## 🎨 Creating Your First Component

Let's create a simple component using Chakra UI:

```tsx
import { Box, Text, VStack } from '@chakra-ui/react'

interface CardProps {
  title: string
  description: string
}

export const Card = ({ title, description }: CardProps) => {
  return (
    <Box 
      p={5} 
      shadow="md" 
      borderWidth="1px" 
      borderRadius="md"
    >
      <VStack align="start" spacing={3}>
        <Text fontSize="xl" fontWeight="bold">
          {title}
        </Text>
        <Text>{description}</Text>
      </VStack>
    </Box>
  )
}
```

### Using the Component

```tsx
function App() {
  return (
    <Card 
      title="Hello World" 
      description="This is my first Chakra UI component!"
    />
  )
}
```

## 🎭 Theme Customization

### Modifying the Theme

```typescript
// src/theme/index.ts
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      500: '#718096',
      900: '#171923',
    },
  },
})

export default theme
```

### Using Custom Theme

```tsx
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* Your app components */}
    </ChakraProvider>
  )
}
```

## 🚀 Advanced Features

### 1. Dark Mode Support

```tsx
import { useColorMode, Button } from '@chakra-ui/react'

function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  
  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  )
}
```

### 2. Responsive Design

```tsx
<Box
  w={{ base: "100%", md: "50%", lg: "33%" }}
  p={{ base: 4, md: 6, lg: 8 }}
>
  {/* Content */}
</Box>
```

### 3. Custom Component Styles

```typescript
const theme = extendTheme({
  components: {
    Button: {
      variants: {
        custom: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
      },
    },
  },
})
```

## 🔍 Best Practices

1. **Type Safety**
   - Always define prop types using interfaces
   - Use TypeScript's strict mode
   - Leverage Chakra UI's built-in types

2. **Component Organization**
   - Keep components small and focused
   - Use composition over inheritance
   - Implement proper prop drilling or context

3. **Performance**
   - Memoize expensive calculations
   - Use React.memo when needed
   - Implement proper code splitting

## 🎯 Next Steps

1. Explore more Chakra UI components
2. Implement routing with React Router
3. Add state management if needed
4. Write unit tests
5. Deploy your application

## 🤝 Need Help?

- Check the [Chakra UI documentation](https://chakra-ui.com/)
- Visit the [React documentation](https://reactjs.org/)
- Join our community Discord
- Open an issue on GitHub
