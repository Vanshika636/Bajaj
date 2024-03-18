const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// POST route for /bfhl
app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data;
    const user_id = 'Harshita_Batra';
    const email = 'harshita0587.be21@chitkara.edu.in';
    const roll_number = '2110990587';
    
    const odd_numbers = data.filter(item => parseInt(item) % 2 !== 0);
    const even_numbers = data.filter(item => parseInt(item) % 2 === 0);
    const alphabets = data.filter(item => /[a-zA-Z]/.test(item)).map(item => item.toUpperCase());

    const response = {
      is_success: true,
      user_id: user_id,
      email: email,
      roll_number: roll_number,
      odd_numbers: odd_numbers,
      even_numbers: even_numbers,
      alphabets: alphabets
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});