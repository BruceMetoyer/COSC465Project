import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Login from './Loginpage';
import SignUp from './SignUppage';
import MusicQuestionnaire from './Questionnaire';
import Homepage from './homepage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/questionnaire" element={<MusicQuestionnaire />} />
                <Route path="/homepage" element={<Homepage />} />
            </Routes>
        </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;