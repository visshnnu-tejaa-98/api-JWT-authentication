const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/', (req, res) => {
	res.json({ message: 'Welcome to API' });
});

// middle ware
const authenticate = (req, res, next) => {
	// Get auth header value
	const bearer = req.headers['authorization'];
	if (bearer) {
		console.log(bearer);
		req.token = bearer;
		next();
	} else {
		res.json({ message: 'Forbidden' });
	}
	next();
};

// protected route
app.post('/api/posts', authenticate, (req, res) => {
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
