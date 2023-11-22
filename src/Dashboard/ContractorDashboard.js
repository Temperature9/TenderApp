// src/components/ContractorDashboard/ContractorDashboard.js

import React from 'react';
import './ContractorDashboard.css';
import factoryImage from '../assets/factory.jpg';

const ContractorDashboard = () => {
  const factoryData = [
    { name: 'Factory 1', image: factoryImage },
    { name: 'Factory 2', image: factoryImage },
    { name: 'Factory 3', image: factoryImage },
    { name: 'Factory 4', image: factoryImage },
    { name: 'Factory 5', image: factoryImage },
    { name: 'Factory 6', image: factoryImage },
    { name: 'Factory 7', image: factoryImage },
    { name: 'Factory 8', image: factoryImage },
  ];

  return (
    <div className="container">
      <div><h2>Dashboard</h2></div>
      <div className="card-grid">
        {factoryData.map((factory, index) => (
          <div className="card" key={index}>
            <img src={factory.image} alt={`Factory ${index + 1}`} />
            <h3>{factory.name}</h3>
            <p>Place:Bhor</p><p>Time Remaining</p>
           
            <div> <button className="bid-button">Bid</button></div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default ContractorDashboard;
