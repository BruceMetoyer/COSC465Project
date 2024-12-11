import React from 'react';
import {
    CRow,
    CFormLabel,
    CCol,
    CFormInput,
    CButton,
} from '@coreui/react';

const SignUp = () => {
    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
            <h1>Sign Up</h1>
            <CRow className="mb-3">
                <CFormLabel htmlFor="firstName" className="col-sm-2 col-form-label">First Name</CFormLabel>
                <CCol sm={10}>
                    <CFormInput
                        type="text"
                        id="firstName"
                        placeholder="Enter your first name"
                    />
                </CCol>
            </CRow>

            <CRow className="mb-3">
                <CFormLabel htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</CFormLabel>
                <CCol sm={10}>
                    <CFormInput
                        type="text"
                        id="lastName"
                        placeholder="Enter your last name"
                    />
                </CCol>
            </CRow>

            <CRow className="mb-3">
                <CFormLabel htmlFor="email" className="col-sm-2 col-form-label">Email</CFormLabel>
                <CCol sm={10}>
                    <CFormInput
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                    />
                </CCol>
            </CRow>

            <CRow className="mb-3">
                <CFormLabel htmlFor="password" className="col-sm-2 col-form-label">Password</CFormLabel>
                <CCol sm={10}>
                    <CFormInput
                        type="password"
                        id="password"
                        placeholder="Create a password"
                    />
                </CCol>
            </CRow>

            <CRow className="mb-3">
                <CFormLabel htmlFor="dob" className="col-sm-2 col-form-label">Date of Birth</CFormLabel>
                <CCol sm={10}>
                    <CFormInput
                        type="date"
                        id="dob"
                    />
                </CCol>
            </CRow>

            <CButton color="primary" type="submit">
                Sign Up
            </CButton>
        </div>
    );
};

export default SignUp;