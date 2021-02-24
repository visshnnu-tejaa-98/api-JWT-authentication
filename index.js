const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/', (req, res) => {
	res.json({ message: 'Welcome to API' });
});

const port = 3000;
app.listen(port, () => console.log(`server started on port : ${port}`));
