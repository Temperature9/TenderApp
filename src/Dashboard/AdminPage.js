import React, { useState, useEffect } from 'react';
import { useWeb3 } from './hooks'; // Assuming a custom hook for handling web3 interactions

const AdminPage = () => {
  const { web3, accounts, contract } = useWeb3(); // Custom hook to connect to web3 and smart contract

  const [tenderDetails, setTenderDetails] = useState([]);
  const [newTender, setNewTender] = useState({});

  useEffect(() => {
    // Fetch existing tender details from the smart contract
    const fetchTenderDetails = async () => {
      try {
        const result = await contract.methods.getTenderDetails().call();
        setTenderDetails(result);
      } catch (error) {
        console.error('Error fetching tender details:', error);
      }
    };

    fetchTenderDetails();
  }, [contract.methods]);

  const handleCreateTender = async () => {
    // Call the smart contract function to create a new tender
    try {
      await contract.methods.createTender(newTender.title, newTender.description).send({ from: accounts[0] });
      // Refresh the tender details after creating a new tender
      fetchTenderDetails();
    } catch (error) {
      console.error('Error creating tender:', error);
    }
  };

  return (
    <div>
      <h2>Admin Page</h2>

      {/* Display existing tenders */}
      <h3>Existing Tenders:</h3>
      <ul>
        {tenderDetails.map((tender, index) => (
          <li key={index}>
            Title: {tender.title}, Description: {tender.description}
          </li>
        ))}
      </ul>

      {/* Form to create a new tender */}
      <h3>Create New Tender:</h3>
      <form onSubmit={(e) => { e.preventDefault(); handleCreateTender(); }}>
        <label>Title:</label>
        <input type="text" value={newTender.title || ''} onChange={(e) => setNewTender({ ...newTender, title: e.target.value })} />

        <label>Description:</label>
        <input type="text" value={newTender.description || ''} onChange={(e) => setNewTender({ ...newTender, description: e.target.value })} />

        <button type="submit">Create Tender</button>
      </form>
    </div>
  );
};

export default AdminPage;
