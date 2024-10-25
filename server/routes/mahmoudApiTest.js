// Import required libraries
const Web3 = require('web3').default || require('web3');
const express = require('express');
const router = express.Router();

// Set up Web3 to connect to a public Ethereum node
const web3 = new Web3('https://mainnet.infura.io/v3/7d4fe73a03154e649bd066fda857fd48'); // Replace with a valid Ethereum node URL

// Define the new endpoint
router.get('/api/mahmoudApiTest', async (req, res) => {

    try {
        // Example: Fetch the balance of a sample Ethereum address
        const address = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'; // Example address
        const balance = await web3.eth.getBalance(address);
        
        // Log the balance in the console
        console.log(`Balance of address ${address}:`, web3.utils.fromWei(balance, 'ether'), 'ETH');
        
        // Send response to indicate success
        res.status(200).json({ success: true, balance: web3.utils.fromWei(balance, 'ether') });
    } catch (error) {
        console.error('Error fetching data from blockchain:', error);
        res.status(500).json({ success: false, error: 'Unable to fetch blockchain data' });
    }
});

module.exports = router;