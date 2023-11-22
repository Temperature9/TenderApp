// server/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Multer for handling file uploads
const multer = require('multer');
const storage = multer.memoryStorage(); // Store files in memory (you might want to adjust this based on your requirements)
const upload = multer({ storage });

router.post('/register', upload.single('aadharCard'), async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const aadharCardFile = req.file;

    // Simple validation
    if (!fullName || !email || !password || !aadharCardFile) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Convert Aadhar card file to base64 for storing in the database
    const aadharCardBase64 = aadharCardFile.buffer.toString('base64');

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      aadharCard: {
        cardNumber: req.body.aadharCardNumber, // Add Aadhar card details as needed
        file: aadharCardBase64,
      },
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
