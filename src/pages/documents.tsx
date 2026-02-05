import React from 'react';
import { 
  Upload, Search, Filter, Folder, 
  FileText, Eye, Download 
} from 'lucide-react';
import type { DocumentItem, CategoryCard } from '../types';

const CATEGORIES: CategoryCard[] = [
  { title: 'Architectural', count: 1 },
  { title: 'Structural', count: 1 },
  { title: 'MEP', count: 1 },
  { title: 'Safety', count: 1 },
  { title: 'Contract', count: 0 },
  { title: 'Other', count: 0 },
];

const DOCUMENTS: DocumentItem[] = [
  {
    name: 'Structural Plans - Foundation Level',
    type: 'Structural',
    category: 'Engineering Drawings',
    version: 'v2.1',
    uploadedBy: 'John Smith',
    date: '2026-01-20',
    size: '12.5 MB'
  }
];

const documents: React.FC = () => {
  return (
    <div className="documents-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h2 className="title">Document Repository</h2>
          <p className="subtitle">Centralized technical documentation and safety manuals</p>
        </div>
        <button className="btn-primary">
          <Upload size={18} /> Upload Documents
        </button>
      </div>

      {/* Category Grid */}
      <div className="category-grid">
        {CATEGORIES.map((cat) => (
          <div key={cat.title} className="category-card">
            <div className="cat-header">
              <Folder size={18} className="text-muted" />
              <span>{cat.title}</span>
            </div>
            <div className="cat-body">
              <span className="cat-count">{cat.count}</span>
              <span className="cat-label">documents</span>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Filter Bar */}
      <div className="filter-bar">
        <div className="search-input">
          <Search size={18} className="text-muted" />
          <input type="text" placeholder="Search documents..." />
        </div>
        <div className="filter-actions">
          <button className="btn-icon">
            <Filter size={18} />
          </button>
          <select className="type-select">
            <option>All Types</option>
          </select>
        </div>
      </div>

      {/* Document Table */}
      <div className="table-card">
        <h3 className="table-title">Documents ({DOCUMENTS.length})</h3>
        <table className="project-table">
          <thead>
            <tr>
              <th>Document Name</th>
              <th>Type</th>
              <th>Category</th>
              <th>Version</th>
              <th>Uploaded By</th>
              <th>Date</th>
              <th>Size</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {DOCUMENTS.map((doc, idx) => (
              <tr key={idx}>
                <td className="bold">
                  <span className="file-name">
                    <FileText size={18} className="text-muted" /> {doc.name}
                  </span>
                </td>
                <td>
                  <span className="badge-green">{doc.type}</span>
                </td>
                <td className="text-muted">{doc.category}</td>
                <td>{doc.version}</td>
                <td>{doc.uploadedBy}</td>
                <td className="text-muted">{doc.date}</td>
                <td className="text-muted">{doc.size}</td>
                <td>
                  <div className="action-icons">
                    <button className="icon-btn-ghost"><Eye size={18} /></button>
                    <button className="icon-btn-ghost"><Download size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default documents;