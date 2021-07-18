const express = require('express')
const router = express.Router();
const path = require('path')
const url = require("url")
const cors = require("cors");

const port = 8081

const app = express();
app.use(express.static(path.join(__dirname, '/')))

app.get('/', (req, resp) => {
    resp.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/datetime', (req, resp) => {
    resp.writeHead(200);
    resp.end(`the date and time are: ${Date()} `)
})


app.get('/bigger', (req, resp) => {
    //console.log(req.url)
    //console.log(req.query)
    if (isNaN(Number(req.query.a))) {
        resp.writeHead(400);
        resp.end(`${req.query.a} is not a number!`);
        return;
    }
    if (isNaN(Number(req.query.b))) {
        resp.writeHead(400);
        resp.end(`${req.query.b} is not a number!`);
        return;
    }
    const a = Number(req.query.a)
    const b = Number(req.query.b)

    if(a > b){
        resp.writeHead(200);
        resp.end(`${a} > ${b} `)
    }else
     if(a < b){
         resp.writeHead(200);
         resp.end(`${a} < ${b} `)
    }else 
     if(a === b){
         resp.writeHead(200);
         resp.end(`${a} = ${b} `)
     }
    
})


app.get('/targil', (req, resp) => {
    
    console.log(req.url)
    console.log(req.query)
    if (isNaN(Number(req.query.a))) {
        resp.writeHead(400);
        resp.end(`${req.query.a} is not a number!`);
        return;
    }
    if (isNaN(Number(req.query.b))) {
        resp.writeHead(400);
        resp.end(`${req.query.b} is not a number!`);
        return;
    }
    if (isNaN(Number(req.query.sum))) {
        resp.writeHead(400);
        resp.end(`${req.query.sum} is not a number!`);
        return;
    }
    const a = Number(req.query.a)
    const b = Number(req.query.b)
    let sum1 = a + b;
    const sum = Number(req.query.sum)
     

    if(sum1 === sum){
            
            resp.sendFile(path.join(__dirname + '/correct.html'));
        
    }else{
        
            resp.sendFile(path.join(__dirname + '/wrong.html'));
    
    }
})

app.listen(port, () => console.log(`Listening to port ${port}`))