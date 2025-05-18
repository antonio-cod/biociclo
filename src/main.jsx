import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider} from 'styled-components';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

import { Routes } from './routes';
import { AuthProvider } from './hooks/auth';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ToastContainer />
       <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
)
