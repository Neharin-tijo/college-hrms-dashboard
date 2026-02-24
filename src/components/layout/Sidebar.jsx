import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  CalendarCheck, 
  Wallet, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Sidebar = ({ 
  isOpen, 
  toggleSidebar, 
  isMobile, 
  isTablet, 
  isDesktop, 
  onCollapse,
  initialCollapsed = false 
}) => {
  const [collapsed, setCollapsed] = useState(initialCollapsed);
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Employees', icon: Users },
    { name: 'Attendance', icon: CalendarCheck },
    { name: 'Payroll', icon: Wallet },
    { name: 'Settings', icon: Settings },
  ];

  useEffect(() => {
    if (onCollapse) {
      onCollapse(collapsed);
    }
  }, [collapsed, onCollapse]);

  // Auto collapse on tablet
  useEffect(() => {
    if (isTablet) {
      setCollapsed(true);
    } else if (isDesktop) {
      setCollapsed(initialCollapsed);
    }
  }, [isTablet, isDesktop, initialCollapsed]);

  const handleCollapse = () => {
    if (!isMobile) {
      setCollapsed(!collapsed);
    }
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    if (isMobile) {
      toggleSidebar();
    }
  };

  // Determine sidebar classes
  const sidebarClasses = [
    'sidebar',
    collapsed ? 'collapsed' : '',
    isMobile && isOpen ? 'mobile-open' : '',
    isTablet ? 'tablet-view' : '',
    isDesktop ? 'desktop-view' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={sidebarClasses}>
      <div className="sidebar-header">
        {!collapsed && (
          <div className="college-name">
            SJCET Palai
            <div className="college-subname">
              St. Joseph's College of<br />
              Engineering & Technology, Palai
            </div>
          </div>
        )}
        {!isMobile && (
          <button 
            onClick={handleCollapse}
            className="collapse-btn"
            style={{
              background: 'none', 
              border: 'none', 
              color: 'white', 
              cursor: 'pointer',
              padding: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        )}
      </div>

      <ul className="nav-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <li
              key={item.name}
              className={`nav-item ${activeItem === item.name ? 'active' : ''}`}
              onClick={() => handleItemClick(item.name)}
            >
              <Icon />
              {!collapsed && <span>{item.name}</span>}
            </li>
          );
        })}
      </ul>

      {/* Footer note for collapsed view */}
      {collapsed && !isMobile && (
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: '10px',
          color: '#6b7280',
          padding: '10px'
        }}>
          v1.0
        </div>
      )}
    </div>
  );
};

export default Sidebar;