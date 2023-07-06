const express = require('express');
const cors= require('cors');
const app= express();

//middleware
app.use(express.json());
app.use(cors());


app.listen(5000, (req,res)=>{
    console.log('Litening in port 5000');
});
