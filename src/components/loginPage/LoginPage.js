// LoginPage.js
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../auth/auth';
import './LoginPage.css';
import loginImage from '../../assets/login.jpg';

const LoginPage = () => {
  const { login } = useAuth();
  const [userType, setUserType] = useState('contractor');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    // Check if the entered credentials are for the admin
    if (username === 'admin' && password === 'adminpassword') {
      // Assuming you have a function to get the token for the admin
      const adminToken = 'admin_generated_token';
      
      // Set the token in the AuthContext
      login(adminToken);

      // Redirect to the admin dashboard
      history.push('/AdminPage');
      return;
    }

    // Perform login logic based on userType
    // Example: const token = await authService.login(username, password, userType);

    // Assuming you have a function to get the token
    const token = 'your_generated_token';

    // Set the token in the AuthContext
    login(token);
  };

  return (
    <div className="container1">
      
      <div className="card-container">
        <div className="registration-form">
          <h2 className="mb-4">Login</h2>
          <div className="select-user-type">
            <label>
              Select User Type:
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="form-control"
              >
                <option value="contractor">Contractor</option>
                <option value="sugarFactory">Sugar Factory</option>
                <option value="adminSupport">Admin/Support</option>
              </select>
            </label>
          </div>

          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <button onClick={handleLogin} className="btn btn-primary1">
              Login
            </button>
          </div>

          {/* Add a link to the registration page */}
          <Link to="/register" className="register-link">
            Create an account
          </Link>
        </div>
        <div className="image-container">
          <img src={loginImage} alt="Login" />
          {/* Add your image component or img tag here */}
          {/* Example: <img src="path/to/your/image.jpg" alt="Your Image" /> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
