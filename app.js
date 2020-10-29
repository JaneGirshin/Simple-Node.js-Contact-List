const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
const urlencodedParser = bodyParser.urlencoded({ extended: true });

// Contacts array
let contacts = [
    {name: "John", phoneNum: "0523344556"},
    {name: "Alex", phoneNum: "0549191333"},
    {name: "Anna", phoneNum: "0535565556"}
]

// Home page
app.get("/", (req, res)=> {
    res.render('index');
})

// whos-there route
app.get('/whos-there', (req, res)=>{
    res.send('Hi Trax! This is Jane :)');
})

// Get all contacts
app.get('/contacts', (req, res)=> {
    res.send(
        contacts.map(contact =>
            `<span><b>Name:</b> ${contact.name}, <b>Phone Number:</b> ${contact.phoneNum}</span><br>`
        ).join('')
    );
})

// Add new contacts
app.get('/new', (req, res)=> {
    res.render('new');
})

app.post('/new', urlencodedParser, (req, res)=> {
    if(contacts.some(e => e.phoneNum === req.body.phoneNum)){
        res.send('Phone Number Already Exist');
    }else if(contacts.some(e => e.name === req.body.name)){
        res.send('Name Already Exist');
    }else{
        contacts.push({name:req.body.name, phoneNum:req.body.phoneNum});
        res.render('added');
    }
})


app.listen(port, (err)=>{
    if(err){
        console.log('ERROR', err);
    } else {
        console.log(`Server is listening on port ${port}`);
    }
})