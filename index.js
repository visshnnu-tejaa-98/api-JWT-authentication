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

app.post('/api/login', (req, res) => {
	//mock  user
	user = {
		id: 1,
		userName: 'visshnnu',
		email: 'visshnnu@gmail.com',
	};
	// doing asyncronously
	jwt.sign({ user }, 'secret', (err, token) => {
		res.json({ token });
	});
});

const port = 3000;
app.listen(port, () => console.log(`server started on port : ${port}`));
