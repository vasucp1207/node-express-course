const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
]

app.get('/users', function(req, res){
    res.json({
        success: true,
        message: 'successfully got user.',
        users: mockUserData
    })
})

app.get('/users/:id', function(req, res){
    console.log(req.params.id);
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})

app.post('/login', function(req, res){
    const username = req.body.username
})

app.listen(8000, () => {
    console.log("server is running");
})