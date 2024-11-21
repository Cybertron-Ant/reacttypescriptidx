import React from 'react';
import { Box, Container, AppBar, Toolbar, Typography, CssBaseline } from '@mui/material';

/**
 * MainLayout component that wraps the entire application
 * Provides consistent spacing and structure across all pages
 * 
 * @param {React.PropsWithChildren} props - Component props including children elements
 * @returns {JSX.Element} The wrapped application layout
 */
export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      
      {/* Main Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Your App Name
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content Area */}
      <Container component="main" sx={{ 
        flexGrow: 1, 
        py: 4,
        display: 'flex',
        flexDirection: 'column'
      }}>
        {children}
      </Container>

      {/* Footer Area */}
      <Box component="footer" sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[200]
      }}>
        <Container maxWidth="sm">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Your App Name
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};
