const express = require('express');

const app = express();

app.listen(3000,() => {
    console.log("server listen on port 3000");
});


app.get('/',(req,res,next) => {
    res.status(200).json({
        message : "It worked."
    })
});