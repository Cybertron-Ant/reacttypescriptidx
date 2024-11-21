import React from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Grid,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

/**
 * Validation schema for the contact form
 * - Name: Required, minimum 2 characters
 * - Email: Required, must be a valid email format
 */
const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Name should be at least 2 characters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
});

/**
 * Contact form component with validation and Material-UI styling
 * Features:
 * - Form validation using Formik and Yup
 * - Responsive layout using Grid
 * - Material-UI components for consistent styling
 */
export const ContactForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log('Form submitted:', values);
    },
  });

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Contact Us
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                  size="large"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};
