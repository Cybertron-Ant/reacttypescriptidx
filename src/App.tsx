import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme';
import { MainLayout } from './components/layout/MainLayout';
import { Dashboard } from './components/features/Dashboard';

function App() {

  // Change these values to test the ternary operator behavior
  const userLoggedIn = true;
  const currentUserName = 'Alice';

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
