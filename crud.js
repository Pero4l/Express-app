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

    const {name, gender, song} = req.body

    if(!name || !gender || !song){
        return res.status(400).json({
            success: false,
            message: "Name, gender and song is required"
        })
    }

    const musician = {
        id: crypto.randomUUID(),
        name: name,
        gender: gender,
        song: song
    }

    musician_db.push(musician)


    console.log("Added Musician: ",musician_db);
    

    res.status(200).send("Musician added successfuly")
})


app.patch("/update-musician", (req, res) => {
  const { id, name, gender, song } = req.body;

 
  const musician = musician_db.find((m) => m.id === id);

  if (!musician) {
    return res.status(404).json({
      success: false,
      message: "Musician not found",
    });
  }

 
  if (musician.name === name || musician.song === song) {
    return res.status(400).json({
      success: false,
      message: "Musician name or song is still the same as initial",
    });
  }

 
  musician.name = name || musician.name;
  musician.gender = gender || musician.gender;
  musician.song = song || musician.song;

  console.log("Updated Musician:", musician);

  res.status(200).json({
    success: true,
    message: "Musician updated successfully",
    data: musician,
  });

});



app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
    
});