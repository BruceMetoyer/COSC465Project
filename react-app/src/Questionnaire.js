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
        console.log(`${e.target.name}: ${e.target.value}`); // Debugging
        setAnswers({
            ...answers,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        console.log('User Answers:', answers);
        navigate('/homepage'); // Redirect to the homepage
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h1>Music Questionnaire</h1>

            <CRow className="mb-4">
                <h5>1. What’s your favorite music genre listed?</h5>
                <CFormCheck
                    type="radio"
                    name="genre"
                    value="pop"
                    label="Pop"
                    onChange={handleChange}
                    checked={answers.genre === 'pop'}
                />
                <CFormCheck
                    type="radio"
                    name="genre"
                    value="rock"
                    label="Rock"
                    onChange={handleChange}
                    checked={answers.genre === 'rock'}
                />
                <CFormCheck
                    type="radio"
                    name="genre"
                    value="jazz"
                    label="Jazz"
                    onChange={handleChange}
                    checked={answers.genre === 'jazz'}
                />
                <CFormCheck
                    type="radio"
                    name="genre"
                    value="r&b"
                    label="R&B"
                    onChange={handleChange}
                    checked={answers.genre === 'r&b'}
                />
                <CFormCheck
                    type="radio"
                    name="genre"
                    value="country"
                    label="Country"
                    onChange={handleChange}
                    checked={answers.genre === 'country'}
                />
                <CFormCheck
                    type="radio"
                    name="genre"
                    value="hiphop"
                    label="Hip Hop"
                    onChange={handleChange}
                    checked={answers.genre === 'hiphop'}
                />
            </CRow>

            <CRow className="mb-4">
                <h5>2. What’s your current mood listed?</h5>
                <CFormCheck
                    type="radio"
                    name="mood"
                    value="happy"
                    label="Happy"
                    onChange={handleChange}
                    checked={answers.mood === 'happy'}
                />
                <CFormCheck
                    type="radio"
                    name="mood"
                    value="relaxed"
                    label="Relaxed"
                    onChange={handleChange}
                    checked={answers.mood === 'relaxed'}
                />
                <CFormCheck
                    type="radio"
                    name="mood"
                    value="energetic"
                    label="Energetic"
                    onChange={handleChange}
                    checked={answers.mood === 'energetic'}
                />
                <CFormCheck
                    type="radio"
                    name="mood"
                    value="sad"
                    label="Sad"
                    onChange={handleChange}
                    checked={answers.mood === 'sad'}
                />
                <CFormCheck
                    type="radio"
                    name="mood"
                    value="mad"
                    label="Mad"
                    onChange={handleChange}
                    checked={answers.mood === 'mad'}
                />
                <CFormCheck
                    type="radio"
                    name="mood"
                    value="nervous"
                    label="Nervous"
                    onChange={handleChange}
                    checked={answers.mood === 'nervous'}
                />
            </CRow>

            <CRow className="mb-4">
                <h5>3. Choose your favorite instrument listed?</h5>
                <CFormCheck
                    type="radio"
                    name="instruments"
                    value="guitar"
                    label="Guitar"
                    onChange={handleChange}
                    checked={answers.instruments === 'guitar'}
                />
                <CFormCheck
                    type="radio"
                    name="instruments"
                    value="piano"
                    label="Piano"
                    onChange={handleChange}
                    checked={answers.instruments === 'piano'}
                />
                <CFormCheck
                    type="radio"
                    name="instruments"
                    value="drums"
                    label="Drums"
                    onChange={handleChange}
                    checked={answers.instruments === 'drums'}
                />
                <CFormCheck
                    type="radio"
                    name="instruments"
                    value="trumpet"
                    label="Trumpet"
                    onChange={handleChange}
                    checked={answers.instruments === 'trumpet'}
                />
            </CRow>

            <CRow className="mb-4">
                <h5>4. What’s your favorite activity listed?</h5>
                <CFormCheck
                    type="radio"
                    name="activity"
                    value="gaming"
                    label="Gaming"
                    onChange={handleChange}
                    checked={answers.activity === 'gaming'}
                />
                <CFormCheck
                    type="radio"
                    name="activity"
                    value="watchingmovies"
                    label="Watching Movies"
                    onChange={handleChange}
                    checked={answers.activity === 'watchingmovies'}
                />
                <CFormCheck
                    type="radio"
                    name="activity"
                    value="sport"
                    label="Playing a Sport"
                    onChange={handleChange}
                    checked={answers.activity === 'sport'}
                />
                <CFormCheck
                    type="radio"
                    name="activity"
                    value="reading"
                    label="Reading"
                    onChange={handleChange}
                    checked={answers.activity === 'reading'}
                />
            </CRow>

            <CRow className="mb-4">
                <h5>5. What’s your favorite food listed?</h5>
                <CFormCheck
                    type="radio"
                    name="food"
                    value="pizza"
                    label="Pizza"
                    onChange={handleChange}
                    checked={answers.food === 'pizza'}
                />
                <CFormCheck
                    type="radio"
                    name="food"
                    value="hamburger"
                    label="Hamburger"
                    onChange={handleChange}
                    checked={answers.food === 'hamburger'}
                />
                <CFormCheck
                    type="radio"
                    name="food"
                    value="chicken"
                    label="Chicken"
                    onChange={handleChange}
                    checked={answers.food === 'chicken'}
                />
                <CFormCheck
                    type="radio"
                    name="food"
                    value="veggies"
                    label="Veggies"
                    onChange={handleChange}
                    checked={answers.food === 'veggies'}
                />
            </CRow>

            <CButton color="primary" onClick={handleSubmit}>
                Submit
            </CButton>
        </div>
    );
};

export default MusicQuestionnaire;