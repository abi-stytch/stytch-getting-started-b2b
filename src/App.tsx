import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/Navbar';
import { Box, ThemeProvider } from '@mui/material';
import AppRouter from './AppRouter';
import { theme } from './theme';
import "./App.css";



function App() {
  return (
    <div id="login">
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: '#222222',
          }}
        >
          <header>
            <NavBar />
          </header>
          <Box
            flex={1}
            p={3}
          >
            <AppRouter />
          </Box>
        </Box>
    </ThemeProvider>
    </div>
  );
}

export default App;