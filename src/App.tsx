import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/globalStyles';
import GettingStartedLandlord from './pages/gettingStarted/GettingStartedLandlord';
import HomePage from './pages/homepage/HomePage';
import GettingStarted from './pages/gettingStarted/Choice'
import GettingStartedTenant from './pages/gettingStarted/GettingStartedTenant';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import AddProperty from './pages/addProperty/AddProperty';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/mvp-notarizer/" element={<HomePage />} />
          <Route path="/mvp-notarizer/getting-started-landlord" element={<GettingStartedLandlord />} />
          <Route path="/mvp-notarizer/getting-started-tenant" element={<GettingStartedTenant />} />
          <Route path="/mvp-notarizer/login" element={<Login />} />
          <Route path="/mvp-notarizer/getting-started" element={<GettingStarted />} />
          <Route path="/mvp-notarizer/dashboard" element={<Dashboard />} />
          <Route path="/mvp-notarizer/add-property" element={<AddProperty />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
