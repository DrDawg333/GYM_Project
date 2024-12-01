const express = require('express')
const app = express()
const port = 3000
const path = require('path') 
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/build")));
const { createtable, createuser, findUser } = require('./src/lib/sql_query');
require("dotenv").config();


app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.post("/api/sign-up", async (req, res) => {
  const { email, password } = req.body;

  try {
    await createuser(email, password);
    res.status(200).json({ message: "Sign-up successful!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user. Email may already exist." });
  }
});

app.post("/api/sign-in", async (req, res) => {
  const { email, password } = req.body;

  try {
    const users = await findUser(email);

    if (users.length > 0 && users[0].password === password) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false, error: "Invalid email or password." });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while verifying credentials." });
  }
});

app.post('/api/auth', async (req, res) => {
  const { email, password } = req.body;
  try {
    await createtable();
    await findUser(email);
    // Add your logic for comparing passwords and other checks if necessary
    return res.send('hello');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
