const express = require('express');
const app = new express();

app.get('/', (req, res) => {
    res.send({ hi: "there"});
});

app.listen(5000);
