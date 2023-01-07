const express = require('express');
const config = require('./config');

const app = express();

app.use(express.static('client'));

app.listen(config.port, () => {
    console.log(`Server running on port http://localhost:${config.port}`);
});

app.get("/",(req,res)=>{
    res.sendFile("views/index.html")
}); 