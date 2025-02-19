import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./hooks/auth";
import GlobalStyles from './styles/global';
import ReactDOM from 'react-dom/client';
import { Routes } from './routes';
import theme from './styles/theme';
import React from "react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <AuthProvider>
      <GlobalStyles/>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)