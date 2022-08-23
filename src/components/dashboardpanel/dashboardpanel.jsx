import './dashboardpanel.css';
import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Dashboard from './dashboard/dashboard';

function DashboardPanel() {
    return (
        <div className='dashboardpanel d-flex'>
            <Sidebar />
            <Dashboard />
        </div>
    )
}

export default DashboardPanel