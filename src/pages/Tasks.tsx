import React from 'react';
import { Plus, ChevronRight, CheckCircle2, Clock } from 'lucide-react';

const Tasks: React.FC = () => {
  return (
    <div className="tasks-page">
      <div className="page-header">
        <div>
          <h2 className="title">Task & Subtask Management</h2>
          <p className="subtitle">Create, organize, and track project tasks</p>
        </div>
        <button className="btn-primary">
          <Plus size={18} /> Create Task
        </button>
      </div>

      {/* Summary Cards */}
      <div className="category-grid">
        <div className="category-card">
          <span className="cat-label">Total Tasks</span>
          <span className="cat-count">3</span>
        </div>
        <div className="category-card">
          <span className="cat-label" style={{ color: '#2563eb' }}>In Progress</span>
          <span className="cat-count" style={{ color: '#2563eb' }}>1</span>
        </div>
        <div className="category-card">
          <span className="cat-label" style={{ color: '#059669' }}>Completed</span>
          <span className="cat-count" style={{ color: '#059669' }}>1</span>
        </div>
        <div className="category-card">
          <span className="cat-label" style={{ color: '#dc2626' }}>Blocked</span>
          <span className="cat-count" style={{ color: '#dc2626' }}>0</span>
        </div>
      </div>

      {/* Phase 1 Table */}
      <div className="table-card" style={{ marginBottom: '24px' }}>
        <h3 className="table-title">Phase 1 - Foundation</h3>
        <table className="project-table">
          <thead>
            <tr>
              <th style={{ width: '40px' }}></th>
              <th>Task</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Assignee</th>
              <th>Progress</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><ChevronRight size={18} className="text-muted" /></td>
              <td>
                <div className="bold">Foundation Excavation - Section A</div>
                <div className="text-muted small">Complete excavation for basement levels 1-3...</div>
              </td>
              <td><span className="status-pill-blue"><Clock size={12} /> in-progress</span></td>
              <td><span className="badge-orange">high</span></td>
              <td>
                <div className="avatar-group">
                  <span className="avatar">M</span> Mike Johnson
                </div>
              </td>
              <td>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: '60%' }}></div>
                  <span className="small">60%</span>
                </div>
              </td>
              <td className="text-muted">2026-02-20</td>
              <td><button className="btn-outline">Assign</button> <Plus size={18} className="text-muted cursor-pointer" /></td>
            </tr>
            <tr>
              <td><ChevronRight size={18} className="text-muted" /></td>
              <td>
                <div className="bold">Bridge Deck Inspection</div>
                <div className="text-muted small">Complete structural assessment of existing bridge...</div>
              </td>
              <td><span className="status-pill-green"><CheckCircle2 size={12} /> completed</span></td>
              <td><span className="badge-blue">medium</span></td>
              <td>
                <div className="avatar-group">
                  <span className="avatar">R</span> Robert Martinez
                </div>
              </td>
              <td>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: '100%' }}></div>
                  <span className="small">100%</span>
                </div>
              </td>
              <td className="text-muted">2026-02-10</td>
              <td><button className="btn-outline">Assign</button> <Plus size={18} className="text-muted cursor-pointer" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Phase 2 Section */}
      <div className="table-card">
        <h3 className="table-title">Phase 2 - Structure</h3>
        <table className="project-table">
            {/* Table Header and Row for Steel Frame Installation matching your image */}
            <tbody>
                <tr>
                    <td style={{ width: '40px' }}></td>
                    <td>
                        <div className="bold">Steel Frame Installation - Tower Section</div>
                        <div className="text-muted small">Install structural steel columns and beams...</div>
                    </td>
                    <td><span className="status-pill-gray">pending</span></td>
                    <td><span className="badge-red">critical</span></td>
                    <td><div className="avatar-group"><span className="avatar">S</span> Sarah Chen</div></td>
                    <td>
                        <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width: '0%', backgroundColor: '#e5e7eb' }}></div>
                        <span className="small">0%</span>
                        </div>
                    </td>
                    <td className="text-muted">2026-03-15</td>
                    <td><button className="btn-outline">Assign</button> <Plus size={18} className="text-muted cursor-pointer" /></td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tasks;