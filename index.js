const express = require("express");

require("dotenv").config(); 

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send('Welcome to Home page');
});

app.get("/about", (req, res) =>{
    res.send('About Us');
});

app.post("/user-detail", (req, res) =>{
    console.log(req.body);
    
    res.send("Registration successful")
})


const PORT = process.env.PORT | 7000;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
    
});