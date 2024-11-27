import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import MarkAttendance from './pages/MarkAttendance';
// import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/mark-attendance" element={<MarkAttendance />} />
                {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
