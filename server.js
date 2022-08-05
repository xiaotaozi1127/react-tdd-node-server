const express = require('express');
const cors = require('cors');
const fs = require('fs');


const server = express()
const port = 3030;

server.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

server.use(express.static('public'))

const sundaeOptionsRaw = fs.readFileSync('./sundae-options.json', 'utf-8');
const sundaeOptions = JSON.parse(sundaeOptionsRaw);

server.get('/', (req, res)=>{
    res.send("hello world!")
})

server.get('/scoops', (req, res) => {
    res.json(sundaeOptions.iceCreamFlavors)
})

server.get('/toppings', (req, res)=>{
    res.json(sundaeOptions.toppings)
})

server.post("/order", (req, res) => {
    let orderNumber = Math.floor(Math.random() * 10000000);
    res.status(201).json({orderNumber});
})

server.listen(port, ()=>{
    console.log(`app listen at ${port}`)
})
