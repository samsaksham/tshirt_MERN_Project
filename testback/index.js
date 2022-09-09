const express = require('express');

const app = express();

const port = 3000;

app.get('/',(req,res) => {
        return res.send("zhello there!!");
});

app.listen(port,()=>{
    console.log("Server is runnning");
})