const express = require('express');
const app = express();
const path = require('path');
const publicFolderPath = path.resolve('public');

app.use(express.static(publicFolderPath));


const port = process.env.PORT || 3000;
app.listen(port, () => { 
    console.log ('HTTP Funcionando');
});

app.get('/', (req, res)=> {
     res.sendFile(path.resolve('views/home.html'))
})
app.get('/register', (req, res)=> {
    res.sendFile(path.join( __dirname +'/views/register.html'))
})
app.get('/login', (req, res)=> {
    res.sendFile(path.join( __dirname +'/views/login.html'))
})
app.post('/', function (req, res) {
    return res.sendFile(req.body)
})
