import { Box, Container, useColorMode, Button, Flex } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

/**
 * MainLayout component that wraps the entire application
 * Provides consistent padding, max-width, and a color mode toggle
 */
const MainLayout = ({ children }: MainLayoutProps) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box minH="100vh" bg={colorMode === 'light' ? 'gray.50' : 'gray.800'}>
      <Flex
        as="nav"
        align="center"
        justify="flex-end"
        padding={4}
        bg={colorMode === 'light' ? 'white' : 'gray.900'}
        borderBottomWidth="1px"
      >
        <Button onClick={toggleColorMode} size="md">
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
      <Container maxW="container.xl" py={8}>
        {children}
      </Container>
    </Box>
  )
}

export default MainLayout
