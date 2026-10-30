const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Listen to them. The children of the night...what music they make.</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About the Web Design Club</h1>');
});

app.listen(PORT, () => {
    console.log('Server running at http://localhost:' + PORT);
});