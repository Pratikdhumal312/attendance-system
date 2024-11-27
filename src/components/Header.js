import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/');
    };

    return (
        <header>
            <nav>
                <Link to="/">Home</Link> | <Link to="/mark-attendance">Mark Attendance</Link> | <Link to="/admin">Admin</Link>
            </nav>
            <button onClick={handleLogout}>Logout</button>
        </header>
    );
};

export default Header;
