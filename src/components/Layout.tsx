import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Monitor, User } from 'lucide-react';

const Layout: React.FC = () => {
  return (
    <div className="admin-layout">
      <header className="navbar">
        <div className="brand">
          <Monitor size={28} />
          <div className="brand-text">
            <h1>Site Management System</h1>
            <span className="subtext">Web Admin Dashboard</span>
          </div>
        </div>

        <div className="header-actions">
          <button className="btn-secondary">
            <User size={16} /> Project Manager
          </button>
        </div>
      </header>

      {/* FIXED NAVIGATION */}
      <nav className="tabs-nav">
        <NavLink 
          to="projects"
          className={({ isActive }) => isActive ? "tab active" : "tab"}
        >
          Projects
        </NavLink>

        <NavLink 
          to="documents"
          className={({ isActive }) => isActive ? "tab active" : "tab"}
        >
          Documents
        </NavLink>

        <NavLink 
          to="tasks"
          className={({ isActive }) => isActive ? "tab active" : "tab"}
        >
          Tasks
        </NavLink>

        <NavLink 
          to="contractor-view"
          className={({ isActive }) => isActive ? "tab active" : "tab"}
        >
          Contractor View
        </NavLink>
      </nav>

      <main className="content-area">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;