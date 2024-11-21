# Tutorial: Getting Started with React TypeScript and Chakra UI

## ?? Table of Contents

1. [Setup and Installation](#setup-and-installation)
2. [Project Structure](#project-structure)
3. [Creating Components](#creating-components)
4. [Form Implementation](#form-implementation)
5. [Theme Customization](#theme-customization)
6. [Advanced Features](#advanced-features)

## ?? Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Code editor (VS Code recommended)

### Initial Setup

```bash
# Clone the repository
git clone <repository-url>
cd reacttypescriptidx

# Install dependencies
npm install

# Start development server
npm run dev
```

## ?? Project Structure

The project follows a modular structure:

```
src/
+-- components/
¦   +-- Form/
¦   ¦   +-- ContactForm.tsx    # Form component
¦   +-- Navbar/
¦       +-- Navbar.tsx         # Navigation component
+-- layouts/
¦   +-- MainLayout.tsx         # Main layout wrapper
+-- theme/
¦   +-- index.ts              # Theme configuration
+-- App.tsx                    # Root component
```

## ?? Creating Components

### Creating the Navbar

1. Create a new file `src/components/Navbar/Navbar.tsx`:

```typescript
import { Box, Flex, Button, useColorMode } from "@chakra-ui/react"

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  
  return (
    <Flex as="nav" p={4}>
      <Button onClick={toggleColorMode}>
        Toggle Theme
      </Button>
    </Flex>
  )
}
```

### Implementing the Form

1. Create `src/components/Form/ContactForm.tsx`:

```typescript
import { FormControl, Input, Button } from "@chakra-ui/react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  })

  return (
    <form>
      <FormControl>
        <Input name="name" placeholder="Name" />
      </FormControl>
      <Button type="submit">Submit</Button>
    </form>
  )
}
```

## ?? Form Implementation

### Adding Form Validation

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  
  // Validation
  if (!formData.email) {
    toast({
      title: "Error",
      description: "Email is required",
      status: "error"
    })
    return
  }
}
```

### Implementing Toast Notifications

```typescript
import { useToast } from "@chakra-ui/react"

const toast = useToast()

// Success notification
toast({
  title: "Success",
  description: "Form submitted!",
  status: "success"
})
```

## ?? Theme Customization

### Customizing Colors

```typescript
// In theme/index.ts
const colors = {
  brand: {
    500: "#718096",
    600: "#4a5568"
  }
}

const theme = extendTheme({ colors })
```

### Adding Custom Components

```typescript
const components = {
  Button: {
    baseStyle: {
      fontWeight: "bold"
    },
    variants: {
      solid: {
        bg: "brand.500"
      }
    }
  }
}
```

## ?? Advanced Features

### Responsive Design

```typescript
<Box
  display={{ base: "block", md: "flex" }}
  padding={{ base: 4, md: 8 }}
>
  {/* Content */}
</Box>
```

### Form State Management

```typescript
const [formData, setFormData] = useState({
  name: "",
  email: ""
})

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }))
}
```

### Error Handling

```typescript
const [errors, setErrors] = useState({
  name: "",
  email: ""
})

const validate = () => {
  const newErrors = {}
  if (!formData.name) newErrors.name = "Name is required"
  if (!formData.email) newErrors.email = "Email is required"
  return newErrors
}
```

## ?? Testing

### Component Testing

```typescript
import { render, fireEvent } from "@testing-library/react"

test("form submission", () => {
  const { getByPlaceholderText, getByText } = render(<ContactForm />)
  const input = getByPlaceholderText("Email")
  fireEvent.change(input, { target: { value: "test@example.com" } })
})
```

## ?? Mobile Responsiveness

### Mobile Menu Implementation

```typescript
const { isOpen, onToggle } = useDisclosure()

return (
  <Box display={{ base: isOpen ? "block" : "none", md: "block" }}>
    {/* Menu items */}
  </Box>
)
```

## ?? Next Steps

1. Add more form fields
2. Implement form submission to backend
3. Add animation effects
4. Implement form validation
5. Add error boundaries
6. Implement loading states

## ?? Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## ?? Additional Resources

- [Chakra UI Documentation](https://chakra-ui.com/docs/getting-started)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Hook Form](https://react-hook-form.com/)

