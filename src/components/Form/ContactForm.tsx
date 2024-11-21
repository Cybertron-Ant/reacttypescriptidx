import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useColorMode,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
}

/**
 * ContactForm component
 * A responsive form with validation and submission handling
 * Features:
 * - Input validation
 * - Responsive design
 * - Success/error notifications
 * - Color mode aware styling
 */
const ContactForm = () => {
  const { colorMode } = useColorMode()
  const toast = useToast()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Error',
        description: 'Please enter a valid email address',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    // Handle successful submission
    toast({
      title: 'Success',
      description: 'Form submitted successfully!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })

    // Reset form
    setFormData({ name: '', email: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <Card
      bg={colorMode === 'light' ? 'white' : 'gray.700'}
      shadow="xl"
      rounded="lg"
      maxW="md"
      w="100%"
      mx="auto"
    >
      <CardHeader>
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          Contact Form
        </Text>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                bg={colorMode === 'light' ? 'white' : 'gray.600'}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                bg={colorMode === 'light' ? 'white' : 'gray.600'}
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              w="100%"
              mt={6}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </CardBody>
    </Card>
  )
}

export default ContactForm
