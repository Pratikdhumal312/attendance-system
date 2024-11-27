import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <ul>
                <li><Link to="/admin/teachers">Manage Teachers</Link></li>
                <li><Link to="/admin/students">Manage Students</Link></li>
                <li><Link to="/admin/restrict">Restrict User Access</Link></li>
            </ul>
        </div>
    );
};

export default AdminDashboard;
