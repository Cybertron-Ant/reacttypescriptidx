import { Box, ChakraProvider } from "@chakra-ui/react"
import theme from "./theme"
import MainLayout from "./layouts/MainLayout"
import ContactForm from "./components/Form/ContactForm"

/**
 * Main App component that sets up ChakraProvider and renders the application
 * Uses custom theme and MainLayout for consistent styling
 */
function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          minH="calc(100vh - 200px)"
        >
          <ContactForm />
        </Box>
      </MainLayout>
    </ChakraProvider>
  )
}

export default App
