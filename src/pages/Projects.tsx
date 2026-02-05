import React, { useState } from 'react';
import { Plus, MapPin, Calendar } from 'lucide-react';
import type { Project } from '../types';

const STATIC_PROJECTS: Project[] = [
  {
    projectCode: 'PRJ-2026-001',
    name: 'Downtown Office Complex',
    location: '123 Main Street',
    client: 'Metropolitan Development Corp',
    timeline: { start: '2026-01-15', end: '2026-12-30' },
    budget: '$2.50M',
    status: 'active'
  },
  {
    projectCode: 'PRJ-2026-002',
    name: 'Riverside Bridge Renovation',
    location: 'River Road',
    client: 'City Infrastructure Department',
    timeline: { start: '2026-02-01', end: '2026-08-15' },
    budget: '$1.80M',
    status: 'active'
  }
];

const Projects: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="projects-container">
      <section className="page-header">
        <div className="header-titles">
          <h2>Project Management</h2>
          <p>Create and manage construction projects</p>
        </div>
        {!showForm && (
          <button className="btn-primary" onClick={() => setShowForm(true)}>
            <Plus size={18} /> New Project
          </button>
        )}
      </section>

      {showForm && (
        <div className="table-card" style={{ marginBottom: '32px' }}>
          <h3 className="table-title">Create New Project</h3>
          <div className="project-form">
            <div className="form-row">
              <div className="form-group">
                <label>Project Name *</label>
                <input type="text" placeholder="e.g., Downtown Office Complex" />
              </div>
              <div className="form-group">
                <label>Project Code *</label>
                <input type="text" placeholder="e.g., PRJ-2026-001" />
              </div>
            </div>

            <div className="form-group">
              <label>Location *</label>
              <input type="text" placeholder="Full address with coordinates" />
            </div>

            <div className="form-group">
              <label>Project Scope *</label>
              <textarea placeholder="Detailed description of project scope, deliverables, and requirements" rows={3} />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Client Name *</label>
                <input type="text" placeholder="Client organization" />
              </div>
              <div className="form-group">
                <label>Budget (USD) *</label>
                <input type="number" placeholder="0.00" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Start Date *</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>End Date *</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Construction Phase *</label>
                <select>
                  <option>Phase 1 - Foundation</option>
                  <option>Phase 2 - Structure</option>
                  <option>Phase 3 - Finishing</option>
                </select>
              </div>
            </div>

            <div className="form-actions">
              <button className="btn-outline" onClick={() => setShowForm(false)}>Cancel</button>
              <button className="btn-primary" style={{ backgroundColor: '#000' }}>Create Project</button>
            </div>
          </div>
        </div>
      )}

      <div className="table-card">
        <h3 className="table-title">Active Projects</h3>
        <table className="project-table">
          <thead>
            <tr>
              <th>Project Code</th>
              <th>Name</th>
              <th>Location</th>
              <th>Client</th>
              <th>Timeline</th>
              <th>Budget</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {STATIC_PROJECTS.map((p) => (
              <tr key={p.projectCode}>
                <td className="text-muted">{p.projectCode}</td>
                <td className="bold">{p.name}</td>
                <td><div className="cell-flex"><MapPin size={14} className="text-muted" /> {p.location}</div></td>
                <td>{p.client}</td>
                <td><div className="cell-flex"><Calendar size={14} className="text-muted" /> {p.timeline.start} - {p.timeline.end}</div></td>
                <td className="bold">{p.budget}</td>
                <td><span className="status-pill-black">{p.status}</span></td>
                <td><button className="btn-outline">View Details</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;