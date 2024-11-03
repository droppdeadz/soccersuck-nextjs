// src/pages/_app.tsx
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/lib/theme';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Header using MUI AppBar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My Next.js App with MUI</Typography>
        </Toolbar>
      </AppBar>

      {/* Main content area */}
      <Container maxWidth="lg">
        <Box my={4}>
          <Component {...pageProps} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
