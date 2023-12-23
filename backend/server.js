const express = require("express");
const app = express();
const PORT = 3000;



app.get('/', (req, res)=>{
    res.json("Backend of school application")
});

app.listen(PORT, ()=>{
    console.log(`Le serveur est lancé sur le port : ${PORT}`)
});