import {
  Box,
  Flex,
  Button,
  useColorMode,
  Text,
  IconButton,
  useDisclosure,
  Stack,
  HStack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

/**
 * Responsive Navbar component
 * Features:
 * - Responsive design with mobile menu
 * - Color mode toggle
 * - Navigation links
 */
const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box>
      <Flex
        bg={colorMode === 'light' ? 'white' : 'gray.800'}
        color={colorMode === 'light' ? 'gray.600' : 'white'}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={{ base: 'center', md: 'left' }}
            fontFamily={'heading'}
            color={colorMode === 'light' ? 'gray.800' : 'white'}
            fontWeight="bold"
          >
            Form App
          </Text>
        </Flex>

        <HStack spacing={8} flex={{ base: 1, md: 0 }} justify={'flex-end'}>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>
      </Flex>

      {/* Mobile menu */}
      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'none' }}
        bg={colorMode === 'light' ? 'white' : 'gray.800'}
      >
        <Stack
          spacing={4}
          py={2}
          px={4}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
        >
          {/* Add mobile menu items here if needed */}
        </Stack>
      </Box>
    </Box>
  )
}

export default Navbar
