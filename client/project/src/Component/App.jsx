import React, { useState } from 'react';
import LoginPage from  './User/LoginPage'    // Assume you already have this component
import UserReport from './User/UserReport';
import {handleLogin} from './Utils/Auth';  // Assuming this is the login function

const App = () => {
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState('');
  const [events] = useState([
    { id: 1, title: 'College Tech Fest', date: '2024-10-12', description: 'A technical fest for college students.', location: 'New York', collegeName: 'NYU' },
    { id: 2, title: 'Coding Hackathon', date: '2024-11-05', description: 'A 24-hour coding competition.', location: 'San Francisco', collegeName: 'Stanford' },
    { id: 3, title: 'AI & Robotics Workshop', date: '2024-12-10', description: 'A workshop on AI and robotics.', location: 'Los Angeles', collegeName: 'UCLA' },
    { id: 4, title: 'Cultural Fest', date: '2024-09-15', description: 'Annual cultural fest with music, dance, and art.', location: 'Boston', collegeName: 'MIT' }
  ]);

  const onLogin = (userData) => {
    const result = handleLogin(userData.email, userData.password);  // Simulating login
    if (result.success) {
      setUser(result.user);
      setLoginError('');
    } else {
      setLoginError(result.error);
    }
  };

  return (
    <div className="app">
      {!user ? (
        <>
          <LoginPage onLogin={onLogin} />
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        </>
      ) : (
        <UserReport user={user} events={events} />
      )}
    </div>
  );
};

export default App;