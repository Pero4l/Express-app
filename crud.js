const express = require("express");

require("dotenv").config(); 

const PORT = process.env.PORT | 7000;

const app = express();

app.use(express.json())

const musician_db = [
    {
        id: 1,
        "name": "Lil baby",
        "gender": "Male",
        "song": "Go Hard"
    }
]

app.get("/", (req,res) => {

if(musician_db.length == 0){
    return res.status(404).json({
        success: false,
        message: "No Musicians Found"
    })

}


    return res.status(200).json({
        success: true,
        data: musician_db,
        message: "Musicians retrived successfully"
    })
})

app.post("/add-musicians", (req, res)=>{

    console.log("Added Musician: ",req.body);
    

    res.send("Musician added successfuly")
})


app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
    
});