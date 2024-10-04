import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import GlobalStyle from './styles/globalStyles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Hero />
      {/* Other components */}
    </ThemeProvider>
  );
};

export default App;