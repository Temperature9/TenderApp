// src/components/LoginPage/ContractorForm.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const ContractorForm = () => {
  const [contractorName, setContractorName] = useState('');
  const [projectDetails, setProjectDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add any form submission logic here
    console.log('Contractor Form Submitted:', { contractorName, projectDetails });
  };

  return (
    <div className="contractor-form">
      <h3>Contractor Page</h3>
      <form onSubmit={handleSubmit}>
        <label>Contractor Name:</label>
        <input
          type="text"
          value={contractorName}
          onChange={(e) => setContractorName(e.target.value)}
        />

        <label>Project Details:</label>
        <textarea
          value={projectDetails}
          onChange={(e) => setProjectDetails(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContractorForm;
