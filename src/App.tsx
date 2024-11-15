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
import PropertyDisplay from './pages/propertyDisplay/PropertyDisplay';
import Notarize from './pages/notarize/Notarize';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/getting-started-landlord" element={<GettingStartedLandlord />} />
          <Route path="/getting-started-tenant" element={<GettingStartedTenant />} />
          <Route path="/login" element={<Login />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/notarize" element={<Notarize />} />
          <Route path="/property/:propertyId" element={<PropertyDisplay />} />
          <Route path="/notarize/:propertyId" element={<Notarize />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
