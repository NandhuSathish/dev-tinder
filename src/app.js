import express from 'express';
const app = express();

app.use('/', (req, res) => {
    res.send('home page');
});

app.listen(5000, () => {
    console.log('server is running on port 5000 .......');
});
