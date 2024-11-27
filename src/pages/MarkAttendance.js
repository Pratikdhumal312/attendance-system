
import React, { useState } from 'react';
import { markAttendance } from '../services/attendance';

const MarkAttendance = () => {
    const [selfie, setSelfie] = useState(null);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'

    const handleAttendance = async () => {
        const formData = new FormData();
        formData.append('selfie', selfie);

        try {
            await markAttendance(formData);
            setMessage('Attendance marked successfully!');
            setMessageType('success');
        } catch (error) {
            setMessage('Error marking attendance. Please try again.');
            setMessageType('error');
        }
    };

    return (
        <div className="container">
            <h1>Mark Attendance</h1>
            <input type="file" onChange={(e) => setSelfie(e.target.files[0])} />
            <button onClick={handleAttendance}>Submit</button>

            {message && (
                <div className={`alert ${messageType === 'success' ? 'success' : 'error'}`}>
                    {message}
                </div>
            )}
        </div>
    );
};

export default MarkAttendance;
