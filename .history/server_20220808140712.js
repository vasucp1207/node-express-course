const express = require('express');
const app = express();

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