import React from 'react';
import {
    CRow,
    CFormLabel,
    CCol,
    CFormInput,
    CButton,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform login validation here (if needed)
        navigate('/questionnaire'); // Navigate to the Music Questionnaire page
    };

    const handleSignUpRedirect = () => {
        navigate('/signup'); // Navigate to the Sign-Up page
    };

    const handleGuestRedirect = () => {
        navigate('/questionnaire'); // Navigate as a guest
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
            <h1>Log In</h1>
            <CRow className="mb-3">
                <CFormLabel htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</CFormLabel>
                <CCol sm={10}>
                    <CFormInput
                        type="email"
                        id="inputEmail"
                        placeholder="Enter your email"
                    />
                </CCol>
            </CRow>

            <CRow className="mb-3">
                <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</CFormLabel>
                <CCol sm={10}>
                    <CFormInput
                        type="password"
                        id="inputPassword"
                        placeholder="Enter your password"
                    />
                </CCol>
            </CRow>

            <CButton color="primary" onClick={handleLogin}>
                Log In
            </CButton>

            <p style={{ marginTop: '20px' }}>
                Don't have an account?{' '}
                <CButton color="link" onClick={handleSignUpRedirect}>
                    Sign Up
                </CButton>
            </p>

            <p style={{ marginTop: '20px' }}>Or</p>

            <CButton color="secondary" onClick={handleGuestRedirect}>
                Proceed as Guest
            </CButton>
        </div>
    );
};

export default Login;