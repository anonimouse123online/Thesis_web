import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './pages/Login';
import Projects from './pages/Projects';
import Documents from './pages/documents'; 
import Tasks from './pages/Tasks';
import ContractorView from './pages/ContractorView';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route path="/" element={<LoginPage />} />

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<Layout />}>
          {/* Default redirect */}
          <Route index element={<Navigate to="projects" replace />} />

          {/* Nested routes */}
          <Route path="projects" element={<Projects />} />
          <Route path="documents" element={<Documents />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="contractor-view" element={<ContractorView />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;