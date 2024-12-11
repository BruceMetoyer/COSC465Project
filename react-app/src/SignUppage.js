import React, { useState } from 'react';
import {
    CRow,
    CFormLabel,
    CCol,
    CFormInput,
    CButton,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        dateOfBirth: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSignUp = () => {
        // Perform sign-up logic here (if needed)
        console.log('User Signed Up:', formData);
        navigate('/questionnaire'); // Navigate to the Music Questionnaire page
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
            <h1>Sign Up</h1>

            <CRow className="mb-3">
                <CFormLabel htmlFor="firstName" className="col-sm-2 col-form-label">First Name</CFormLabel>
                <CCol sm={10}>
                    <CFormInput
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name"
                        onChange={handleChange}
                    />
                </CCol>
            </CRow>

            <CRow className="mb-3">
                <CFormLabel htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</CFormLabel>
                <CCol sm={10}>
                    <CFormInput
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name"
                        onChange={handleChange}
                    />
                </CCol>
            </CRow>

            <CRow className="mb-3">
                <CFormLabel htmlFor="email" className="col-sm-2 col-form-label">Email</CFormLabel>
                <CCol sm={10}>
                    <CFormInput
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                    />
                </CCol>
            </CRow>

            <CRow className="mb-3">
                <CFormLabel htmlFor="password" className="col-sm-2 col-form-label">Password</CFormLabel>
                <CCol sm={10}>
                    <CFormInput
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        onChange={handleChange}
                    />
                </CCol>
            </CRow>

            <CRow className="mb-3">
                <CFormLabel htmlFor="dateOfBirth" className="col-sm-2 col-form-label">Date of Birth</CFormLabel>
                <CCol sm={10}>
                    <CFormInput
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        onChange={handleChange}
                    />
                </CCol>
            </CRow>

            <CButton color="primary" onClick={handleSignUp}>
                Sign Up
            </CButton>
        </div>
    );
};

export default SignUp;