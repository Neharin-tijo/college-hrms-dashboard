import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Menu } from 'lucide-react';

const Layout = ({ children, title = 'Dashboard' }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      
      // Auto close sidebar on mobile when resizing to desktop
      if (window.innerWidth > 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;
  const isDesktop = windowWidth > 1024;

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleOverlayClick = () => {
    setSidebarOpen(false);
  };

  const handleSidebarCollapse = (collapsed) => {
    if (isDesktop) {
      setSidebarCollapsed(collapsed);
    }
  };

  return (
    <div className="dashboard-container">
      {/* Mobile Menu Button - Only visible on mobile */}
      {isMobile && (
        <button className="menu-toggle" onClick={toggleSidebar}>
          <Menu size={20} />
        </button>
      )}
      
      {/* Overlay for mobile - Only visible when sidebar is open on mobile */}
      {isMobile && (
        <div 
          className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`}
          onClick={handleOverlayClick}
        />
      )}
      
      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        isMobile={isMobile}
        isTablet={isTablet}
        isDesktop={isDesktop}
        onCollapse={handleSidebarCollapse}
        initialCollapsed={false}
      />
      
      {/* Main Content */}
      <main className={`main-content ${!isMobile && sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Header title={title} isMobile={isMobile} />
        <div className="content-wrapper">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;