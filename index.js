const express = require('express');
const app = express();
const PORT = 3000; // We'll use port 3000

// Simple GET API
app.get('/', (req, res) => {
    res.send('Hello from Node.js Backend!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://13.60.243.178:${PORT}/`);
});
