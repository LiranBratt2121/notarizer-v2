import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/globalStyles';
import GettingStartedLandlord from './pages/gettingStarted/GettingStartedLandlord';
import HomePage from './pages/homepage/HomePage';
import GettingStarted from './pages/gettingStarted/Choice'
import GettingStartedTenant from './pages/gettingStarted/GettingStartedTenant';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/mvp-notarizer/" element={<HomePage />} />
          <Route path="/mvp-notarizer/getting-started-landlord" element={<GettingStartedLandlord />} />
          <Route path="/mvp-notarizer/getting-started-tenant" element={<GettingStartedTenant />} />
          <Route path="/mvp-notarizer/getting-started" element={<GettingStarted />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
