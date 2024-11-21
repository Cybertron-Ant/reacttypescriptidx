import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import MainLayout from './layouts/MainLayout'
import Welcome from './components/Welcome'

/**
 * Main App component that sets up ChakraProvider and renders the application
 * Uses custom theme and MainLayout for consistent styling
 */
function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Welcome 
          title="Welcome to Your React + TypeScript App" 
          subtitle="Powered by Chakra UI for beautiful, accessible components"
        />
      </MainLayout>
    </ChakraProvider>
  )
}

export default App