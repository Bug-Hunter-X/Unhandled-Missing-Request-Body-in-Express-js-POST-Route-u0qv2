const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  if (!req.body) {
    return res.status(400).send({ error: 'Missing request body' });
  }
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send({ error: 'Missing name or email' });
  }
  const user = { name, email };
  console.log(user);
  res.status(201).send({ message: 'User created', user });
});
app.listen(3000, () => console.log('Server listening on port 3000'));