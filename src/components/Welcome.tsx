import { VStack, Heading, Text, useColorMode } from '@chakra-ui/react'

interface WelcomeProps {
  title: string
  subtitle?: string
}

/**
 * Welcome component that displays a title and optional subtitle
 * Automatically adjusts colors based on the current color mode
 */
const Welcome = ({ title, subtitle }: WelcomeProps) => {
  const { colorMode } = useColorMode()

  return (
    <VStack
      spacing={4}
      align="center"
      p={8}
      borderRadius="lg"
      bg={colorMode === 'light' ? 'white' : 'gray.700'}
      boxShadow="md"
    >
      <Heading as="h1" size="xl" textAlign="center">
        {title}
      </Heading>
      {subtitle && (
        <Text
          fontSize="lg"
          color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
          textAlign="center"
        >
          {subtitle}
        </Text>
      )}
    </VStack>
  )
}

export default Welcome
