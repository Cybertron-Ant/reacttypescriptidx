import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// Define the color mode config
const config: ThemeConfig  = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

// Rest of the file stays the same...

// Define your custom colors
const colors = {
  brand: {
    50: '#f7fafc',
    100: '#edf2f7',
    200: '#e2e8f0',
    300: '#cbd5e0',
    400: '#a0aec0',
    500: '#718096',
    600: '#4a5568',
    700: '#2d3748',
    800: '#1a202c',
    900: '#171923',
  },
}

// Define your custom components styles
const components = {
  Button: {
    // Custom styles for the Button component
    baseStyle: {
      fontWeight: 'bold',
      borderRadius: 'base',
    },
    // Custom variants
    variants: {
      solid: {
        bg: 'brand.500',
        color: 'white',
        _hover: {
          bg: 'brand.600',
        },
      },
    },
  },
}

// Extend the theme
const theme = extendTheme({
  config,
  colors,
  components,
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
})

export default theme
