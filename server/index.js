// Importing express
const express = require('express');
const UserRouter = require('./Router/UserRouter');
const PetRouter = require('./Router/PetRouter'); // Import the PetRouter
const cors = require('cors');

// Initialize express
const app = express();

const port = 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000' // Allow requests from the frontend
}));

app.use(express.json());
app.use('/user', UserRouter); // Use the UserRouter
app.use('/pet', PetRouter); // Use the PetRouter

// Endpoint or route
app.get('/', (req, res) => {
    res.send('Response from Express');
});

// Additional routes can be added here
app.get('/add', (req, res) => {
    res.send('Response from add');
});

// Starting the express server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});