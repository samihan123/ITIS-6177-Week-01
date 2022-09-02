const express = require('express')
const app = express()
hostname = '127.0.0.1'
const port = 8080

app.get('/',(req,res)=> {
    res.send("Hello World")
});

app.listen(port, ()=> {
    console.log(`Server running at http://${hostname}:${port}/`)
})