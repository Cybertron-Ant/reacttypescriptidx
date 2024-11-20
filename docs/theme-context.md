# Theme Context Documentation

## Overview
The Theme Context implementation provides a robust, type-safe theming solution for React applications using TypeScript. It enables dynamic switching between light and dark themes while maintaining full type safety and providing a simple API for consumers.

## Architecture

### Core Components
1. **ThemeContext (`src/context/ThemeContext.tsx`)**
   - Context provider for theme-related state
   - Custom hook for consuming theme context
   - TypeScript interfaces for type safety

2. **ThemeToggle (`src/components/ThemeDemo/ThemeToggle.tsx`)**
   - Demo component showcasing context usage
   - Theme switching functionality
   - Styled using Tailwind CSS

## API Reference

### ThemeContextType Interface
```typescript
interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: {
    background: string;
    text: string;
    primary: string;
  };
}
```

### Theme Provider Props
```typescript
interface ThemeProviderProps {
  children: ReactNode;
}
```

### Available Hooks

#### useTheme
```typescript
const useTheme = (): ThemeContextType
```
Returns the current theme context. Must be used within a ThemeProvider.

**Returns:**
- `isDarkMode`: Current theme mode state
- `toggleTheme`: Function to switch between light and dark modes
- `theme`: Current theme configuration object

**Throws:**
- Error if used outside ThemeProvider

### Theme Configuration

#### Light Theme
```typescript
{
  background: 'bg-white',
  text: 'text-gray-900',
  primary: 'text-blue-600'
}
```

#### Dark Theme
```typescript
{
  background: 'bg-gray-900',
  text: 'text-gray-100',
  primary: 'text-blue-400'
}
```

## Implementation Details

### Provider Setup
The ThemeProvider must wrap any components that need access to the theme:

```typescript
<ThemeProvider>
  <YourApp />
</ThemeProvider>
```

### Using the Theme
```typescript
const MyComponent = () => {
  const { isDarkMode, toggleTheme, theme } = useTheme();
  
  return (
    <div className={`${theme.background} ${theme.text}`}>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};
```

## Best Practices

1. **Type Safety**
   - Always use the provided TypeScript interfaces
   - Let TypeScript infer types where possible

2. **Performance**
   - Use the context only for theme-related state
   - Avoid unnecessary re-renders by memoizing when needed

3. **Error Handling**
   - Always use useTheme within ThemeProvider
   - Handle potential theme-related errors gracefully

## Technical Considerations

### Browser Support
- Compatible with all modern browsers
- Uses CSS classes for theme switching
- No CSS-in-JS dependencies

### Performance Impact
- Minimal bundle size impact
- Efficient theme switching using Tailwind classes
- No runtime CSS generation

## Troubleshooting

### Common Issues

1. **"useTheme must be used within a ThemeProvider"**
   - Ensure ThemeProvider is present in the component tree
   - Check for multiple React instances

2. **Theme not updating**
   - Verify Tailwind classes are properly configured
   - Check for CSS specificity issues

## Contributing
When contributing to the theme system:

1. Maintain TypeScript types
2. Follow existing naming conventions
3. Update documentation for API changes
4. Add unit tests for new features
