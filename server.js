const path = require('path')
const express = require("express")
const app = express()
const PORT = /*process.env.PORT || */3000;
const publicDir = path.join(__dirname, "public")    //server creation, implementing modules and frameworks

const reservations = [{}]   //array of created reservations

app.use(express.urlencoded({ extended: true }));    // added middleware
app.use(express.json());
app.use(express.static(publicDir))

app.get("/", function(req, res) {
    res.sendFile(path.join(publicDir, "index.html"));   //homepage 
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(publicDir, "tables.html"));  //page listing reservations
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(publicDir, "reserve.html")); //page to create a new reservation
  });

  app.get("/api/tables", function(req, res) {   //api grabbing reservations
      res.json(reservations)
  });

  
  app.post("/api/tables", function(req, res) {  //api posting new reservations
    let data = req.body
    reservations.push(data)
    res.json(data)
    console.log(reservations)
});
  

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);   //actually starting server
  });
  