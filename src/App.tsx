import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import { theme } from './theme/theme';
import { Navbar } from './components/layout/Navbar';
import { ContactForm } from './components/forms/ContactForm';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <ContactForm />
      </Container>
    </ThemeProvider>
  );
}

export default App;