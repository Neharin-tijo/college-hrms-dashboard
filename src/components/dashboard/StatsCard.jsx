import React from 'react';
import { Users, UserCheck, UserMinus } from 'lucide-react';

const StatsCard = ({ title, value, icon }) => {
  const getIcon = () => {
    switch(icon) {
      case 'total': return <Users size={28} />;
      case 'present': return <UserCheck size={28} />;
      case 'leave': return <UserMinus size={28} />;
      default: return <Users size={28} />;
    }
  };

  const getIconColor = () => {
    switch(icon) {
      case 'total': return '#0284c7';
      case 'present': return '#059669';
      case 'leave': return '#b91c1c';
      default: return '#0284c7';
    }
  };

  return (
    <div className="stats-card">
      <div className="card-icon" style={{ color: getIconColor() }}>
        {getIcon()}
      </div>
      <div className="card-info">
        <h3>{title}</h3>
        <p>{value.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default StatsCard;