const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Thank God It is Friday!! How Are Youu??'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
