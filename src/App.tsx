import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Projects from './pages/Projects';
import Documents from './pages/documents';// Import must match file casing
import Tasks from './pages/Tasks';
import ContractorView from './pages/ContractorView';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/projects" replace />} />
          <Route path="projects" element={<Projects />} />
          <Route path="documents" element={<Documents />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="ContractorView" element={<ContractorView />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;