const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res)=> {
    res.send('hello world');
})

app.listen(port, (err)=>{
    if(err){
        console.log('ERROR', err);
    } else {
        console.log(`Server is listening on port ${port}`);
    }
})