import React, { useState } from 'react';
import { CButton, CFormCheck, CRow } from '@coreui/react';
import { useNavigate } from 'react-router-dom';

const MusicQuestionnaire = () => {
    const navigate = useNavigate();
    const [answers, setAnswers] = useState({
        genre: '',
        mood: '',
        instruments: '',
    });

    const handleChange = (e) => {
        setAnswers({
            ...answers,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        // Handle saving the answers or processing suggestions
        console.log('User Answers:', answers);
        navigate('/homepage'); // Redirect to the homepage
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h1>Music Questionnaire</h1>

            <CRow className="mb-4">
                <h5>What’s your favorite music genre?</h5>
                <CFormCheck
                    type="radio"
                    name="genre"
                    value="pop"
                    label="Pop"
                    onChange={handleChange}
                />
                <CFormCheck
                    type="radio"
                    name="genre"
                    value="rock"
                    label="Rock"
                    onChange={handleChange}
                />
                <CFormCheck
                    type="radio"
                    name="genre"
                    value="jazz"
                    label="Jazz"
                    onChange={handleChange}
                />
            </CRow>

            <CRow className="mb-4">
                <h5>What’s your current mood?</h5>
                <CFormCheck
                    type="radio"
                    name="mood"
                    value="happy"
                    label="Happy"
                    onChange={handleChange}
                />
                <CFormCheck
                    type="radio"
                    name="mood"
                    value="relaxed"
                    label="Relaxed"
                    onChange={handleChange}
                />
                <CFormCheck
                    type="radio"
                    name="mood"
                    value="energetic"
                    label="Energetic"
                    onChange={handleChange}
                />
            </CRow>

            <CRow className="mb-4">
                <h5>Do you like any specific instruments?</h5>
                <CFormCheck
                    type="radio"
                    name="instruments"
                    value="guitar"
                    label="Guitar"
                    onChange={handleChange}
                />
                <CFormCheck
                    type="radio"
                    name="instruments"
                    value="piano"
                    label="Piano"
                    onChange={handleChange}
                />
                <CFormCheck
                    type="radio"
                    name="instruments"
                    value="drums"
                    label="Drums"
                    onChange={handleChange}
                />
            </CRow>

            <CButton color="primary" onClick={handleSubmit}>
                Submit
            </CButton>
        </div>
    );
};

export default MusicQuestionnaire;