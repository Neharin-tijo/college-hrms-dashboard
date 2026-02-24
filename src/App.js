import React from 'react';
import Layout from './components/layout/Layout';
import StatsCard from './components/dashboard/StatsCard';
import EmployeeTable from './components/dashboard/EmployeeTable';
import { statsData } from './data/mockData';
import './styles/dashboard.css';

function App() {
  return (
    <Layout title="Dashboard">
      {/* Statistics Cards */}
      <div className="stats-section">
        <StatsCard title="Total Employees" value={statsData.totalEmployees} icon="total" />
        <StatsCard title="Present Today" value={statsData.presentToday} icon="present" />
        <StatsCard title="On Leave" value={statsData.onLeave} icon="leave" />
      </div>

      {/* Employee Table */}
      <EmployeeTable />
    </Layout>
  );
}

export default App;