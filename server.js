const express = require("express");
const multer = require('multer');
const mime = require('mime-types');

// Configurations.
const app = express();
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function(req,file,cb){
        cb("",Date.now() + "-"+ file.originalname);
    }
});

const upload = multer({
    storage: storage
});

app.get('/', (req,res)=>{
    // See the dirname value.
    console.log(__dirname);
    res.sendFile(__dirname + "/views/index.html");
});

app.post('/files', upload.single('file-name'), (req,res)=>{
    res.send("File uploaded succesfully!")
});

app.listen(8000, () => console.log("Server started"));