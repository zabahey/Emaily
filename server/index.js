const express = require('express');
<<<<<<< HEAD
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

app.listen(5000);
=======
const app = new express();

app.get('/', (req, res) => {
    res.send({ hi: "there"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
>>>>>>> cb2aec0ce9a57f62108aef675efc3c31f008a540
