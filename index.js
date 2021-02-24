const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/', (req, res) => {
	res.json({ message: 'Welcome to API' });
});

// protected route
app.post('/api/posts', (req, res) => {
	res.json({ message: 'posts created...' });
});

const port = 3000;
app.listen(port, () => console.log(`server started on port : ${port}`));
