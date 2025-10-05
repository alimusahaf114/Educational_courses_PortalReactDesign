import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Sidebar = () => {
  const menuItems = [
    { icon: '📊', label: 'Dashboard', active: false },
    { icon: '📖', label: 'Course', active: true },
    { icon: '📈', label: 'Statistic', active: false },
    { icon: '💬', label: 'Message', active: false },
    { icon: '📅', label: 'Schedule', active: false },
    { icon: '🎯', label: 'Grade', active: false }
  ];

  return (
    <div className="bg-white p-4" style={{ width: '240px', borderRight: '1px solid #e0e0e0' }}>
      <div className="d-flex align-items-center mb-5">
        <div className="bg-primary text-white rounded p-2 me-2">
          <span style={{ fontSize: '20px' }}>📚</span>
        </div>
        <div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Selena</div>
          <div style={{ fontSize: '12px', color: '#666' }}>Academy</div>
        </div>
      </div>

      <nav>
        {menuItems.map((item, idx) => (
          <div 
            key={idx}
            className={`mb-3 p-2 rounded ${item.active ? 'bg-primary bg-opacity-10' : ''}`}
            style={{ 
              cursor: 'pointer',
              borderLeft: item.active ? '3px solid #0d6efd' : 'none'
            }}
          >
            <span className="me-2">{item.icon}</span>
            <span style={{ 
              fontSize: '14px', 
              color: item.active ? '#0d6efd' : '#666',
              fontWeight: item.active ? '500' : 'normal'
            }}>
              {item.label}
            </span>
          </div>
        ))}
      </nav>

      <div className="mt-auto pt-5">
        <div className="p-2 rounded" style={{ cursor: 'pointer' }}>
          <span className="me-2">🚪</span>
          <span style={{ fontSize: '14px', color: '#666' }}>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar ;