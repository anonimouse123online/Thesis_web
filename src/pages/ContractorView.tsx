import React from 'react';
import { 
  BarChart3, CheckCircle2, Users, AlertTriangle, 
  Calendar, Info 
} from 'lucide-react';

const ContractorView: React.FC = () => {
  return (
    <div className="contractor-page">
      <div className="page-header">
        <div>
          <h2 className="title">Contractor Overview Dashboard</h2>
          <p className="subtitle">Read-only view of all project progress and workload</p>
          <div className="read-only-badge">
            <Info size={14} /> Read-Only Access
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="category-grid">
        <div className="category-card">
          <div className="card-header-flex">
            <BarChart3 size={20} className="text-muted" />
            <span className="trend-up">↗</span>
          </div>
          <span className="cat-label">Active Projects</span>
          <span className="cat-count">2</span>
        </div>
        <div className="category-card">
          <CheckCircle2 size={20} style={{ color: '#059669', marginBottom: '8px' }} />
          <span className="cat-label">Task Completion</span>
          <div className="cat-count">33%</div>
          <span className="small text-muted">1 of 3 tasks</span>
        </div>
        <div className="category-card">
          <Users size={20} style={{ color: '#2563eb', marginBottom: '8px' }} />
          <span className="cat-label">Site Engineers</span>
          <div className="cat-count">4</div>
          <span className="small text-muted">Active in field</span>
        </div>
        <div className="category-card">
          <AlertTriangle size={20} style={{ color: '#f97316', marginBottom: '8px' }} />
          <span className="cat-label">Overdue Tasks</span>
          <div className="cat-count" style={{ color: '#f97316' }}>0</div>
          <span className="small text-muted">Require attention</span>
        </div>
      </div>

      {/* Project Progress Overview */}
      <div className="table-card" style={{ marginBottom: '24px' }}>
        <h3 className="table-title">Project Progress Overview</h3>
        
        {/* Project 1 */}
        <div className="progress-item">
          <div className="progress-header">
            <div className="proj-info">
              <span className="bold">Downtown Office Complex</span>
              <span className="badge-outline">PRJ-2026-001</span>
            </div>
            <span className="status-pill-orange">0% Complete</span>
          </div>
          <p className="text-muted small">123 Main Street, Downtown District</p>
          <div className="progress-bar-full"><div className="fill" style={{ width: '0%' }}></div></div>
          <div className="progress-details-grid">
            <div><div className="label">Timeline</div><div className="val"><Calendar size={12}/> 2026-01-15 - 2026-12-30</div></div>
            <div><div className="label">Tasks</div><div className="val">0/2</div></div>
            <div><div className="label">Budget</div><div className="val">$2.50M</div></div>
            <div><div className="label">Phase</div><div className="val">Phase 2 - Structure</div></div>
          </div>
        </div>

        <hr className="divider" />

        {/* Project 2 */}
        <div className="progress-item">
          <div className="progress-header">
            <div className="proj-info">
              <span className="bold">Riverside Bridge Renovation</span>
              <span className="badge-outline">PRJ-2026-002</span>
            </div>
            <span className="status-pill-green">100% Complete</span>
          </div>
          <p className="text-muted small">River Road, North District</p>
          <div className="progress-bar-full"><div className="fill" style={{ width: '100%', background: '#000' }}></div></div>
          <div className="progress-details-grid">
            <div><div className="label">Timeline</div><div className="val"><Calendar size={12}/> 2026-02-01 - 2026-08-15</div></div>
            <div><div className="label">Tasks</div><div className="val">1/1</div></div>
            <div><div className="label">Budget</div><div className="val">$1.80M</div></div>
            <div><div className="label">Phase</div><div className="val">Phase 1 - Foundation</div></div>
          </div>
        </div>
      </div>

      {/* Engineer Workload */}
      <div className="table-card">
        <h3 className="table-title">Site Engineer Workload</h3>
        <table className="project-table">
          <thead>
            <tr>
              <th>Engineer</th>
              <th>Role</th>
              <th>Assigned Tasks</th>
              <th>Completed</th>
              <th>In Progress</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><div className="avatar-group"><span className="avatar">M</span> Mike Johnson</div></td>
              <td className="text-muted">Senior Site Engineer</td>
              <td>3</td>
              <td>0</td>
              <td><span className="count-pill">1</span></td>
              <td><span className="badge-busy">busy</span></td>
            </tr>
            <tr>
              <td><div className="avatar-group"><span className="avatar">S</span> Sarah Chen</div></td>
              <td className="text-muted">Site Engineer</td>
              <td>2</td>
              <td>0</td>
              <td><span className="count-pill">0</span></td>
              <td><span className="badge-available">available</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContractorView;