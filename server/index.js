const express = require('express');
const app = new express();

app.get('/', (req, res) => {
    res.send({ bye: "buddy22"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
