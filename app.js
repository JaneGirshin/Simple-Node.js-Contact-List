const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

let contacts = [
    {name: "John", phoneNum: "0523344556"},
    {name: "Alex", phoneNum: "0549191333"},
    {name: "Anna", phoneNum: "0535565556"}
]

app.get("/", (req, res)=> {
    res.render('index');
})

app.get('/whos-there', (req, res)=>{
    res.send('Hi Trax! This is Jane :)');
})

app.listen(port, (err)=>{
    if(err){
        console.log('ERROR', err);
    } else {
        console.log(`Server is listening on port ${port}`);
    }
})