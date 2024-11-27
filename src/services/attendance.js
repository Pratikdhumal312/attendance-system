import axios from 'axios';

export const markAttendance = (formData) => {
    return axios.post('/attendance', formData, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
    });
};
