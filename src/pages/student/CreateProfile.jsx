import React, { useState, useEffect } from 'react';
import axios from 'axios';
import createStudentProfile from '../../axios_config/endpoints';

const CreateProfile = () => {
    const [formData, setFormData] = useState({
        userId: '',
        aadharCard: '',
        address: '',
        university: '',
        universityIdCard: ''
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user._id) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                userId: user._id
            }));
        }
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(createStudentProfile, formData);
            console.log('Profile created successfully:', response.data);
        } catch (error) {
            console.error('Error creating profile:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <input type="text" name="userId" value={formData.userId} onChange={handleChange} placeholder="User ID" required readOnly /> */}
            <input type="text" name="aadharCard" value={formData.aadharCard} onChange={handleChange} placeholder="Aadhar Card" required />
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
            <input type="text" name="university" value={formData.university} onChange={handleChange} placeholder="University" required />
            <input type="text" name="universityIdCard" value={formData.universityIdCard} onChange={handleChange} placeholder="University ID Card" required />
            <button type="submit">Create Profile</button>
        </form>
    );
};

export default CreateProfile;
