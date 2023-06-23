const express = require ('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000; 

const fastaFilePath = path.join(__dirname, 'CepA_variantssequences.fasta');

app.get('/fasta',(req,res)=>{
   
    fs.readFile(fastaFilePath, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error reading file');
        }
    });    
    res.setHeader('Content-Type', 'text/plain');

    res.sendFile(fastaFilePath);
});

app.listen(port,('0.0.0.0'),()=>{
    console.log("Server started on port 3000!!")
})