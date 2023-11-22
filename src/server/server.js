const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/tenderDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use('/api/users', userRoutes);

// Default route handler
app.get('/', (req, res) => {
  res.send('Welcome to the Tender App');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
