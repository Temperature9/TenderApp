// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/loginPage/HomePage';
import AboutUsPage from './components/AboutUsPage';
import TeamPage from './components/TeamPage';
import LoginPage from './components/loginPage/LoginPage';
import RegistrationPage from './components/loginPage/RegistrationPage';
import ContractorDashboard from './Dashboard/ContractorDashboard';
import ContractorForm from './components/loginPage/ContractorForm';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutUsPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
          <Route path="/contractor-form" component={ContractorForm} />
          <Route path="/contractor-dashboard" component={ContractorDashboard} />
        
        </Switch>
      </div>
    </Router>
  );
};

export default App;
