//Dependencies
const express = require("express");
const path = require("path")
//Express Setup
const app = express();
const PORT = 3000;
//Express data parsing
app.use(express.urlencoded({entended:true}));
app.use(express.json())
//gaslands cars(data)
const vehicles = [
    {
        routeName: "bike",
        name: "Bike",
        weight: "Lightweight",
        hull: 4,
        maxGear: 6,
        special: "Full Throttle, Pivot",
        handling: 5,
        crew: 1,
        cans: 0
    },
    {
        routeName: "buggy",
        name: "Buggy",
        weight: "Lightweight",
        hull: 6,
        maxGear: 6,
        special: "Roll Cage",
        handling: 4,
        crew: 2,
        cans: 0
    },
    {
        routeName: "car",
        name: "Car",
        weight: "Middleweight",
        hull: 5,
        maxGear: 5,
        special: "",
        handling: 3,
        crew: 2,
        cans: 0
    },
    {
        routeName: "performancecar",
        name: "Performance Car",
        weight: "Middleweight",
        hull: 8,
        maxGear: 6,
        special: "Slip Away",
        handling: 4,
        crew: 1,
        cans: 0
    },
    {
        routeName: "truck",
        name: "Truck",
        weight: "middleweight",
        hull: 12,
        maxGear: 4,
        special: "",
        handling: 2,
        crew: 3,
        cans: 0
    },
    {
        routeName: "monstertruck",
        name: "Monster Truck",
        weight: "Heavyweight",
        hull: 10,
        maxGear: 4,
        special: "All Terrain, Up and Over",
        handling: 3,
        crew: 2,
        cans: 0
    },
    {
        routeName: "heavytruck",
        name: "Heavy Truck",
        weight: "Heavyweight",
        hull: 14,
        maxGear: 3,
        special: "",
        handling: 2,
        crew: 4,
        cans: 0
    },
    {
        routeName: "bus",
        name: "Bus",
        weight: "Heavyweight",
        hull: 16,
        maxGear: 3,
        special: "",
        handling: 2,
        crew: 8,
        cans: 0
    },
    {
        routeName: "bikewithsidedar",
        name: "Bike With Sidedar",
        weight: "Lightweight",
        hull: 4,
        maxGear: 6,
        special: "Full Throttle, Pivot",
        handling: 5,
        crew: 2,
        cans: 0
    },
    {
        routeName: "dragracer",
        name: "Drag Racer",
        weight: "Lightweight",
        hull: 6,
        maxGear: 6,
        special: "Roll Cage",
        handling: 4,
        crew: 2,
        cans: 0
    },
    {
        routeName: "gyrocopter",
        name: "Gyro Copter",
        weight: "Middleweight",
        hull: 4,
        maxGear: 6,
        special: "Air Wolf, Airborne",
        handling: 4,
        crew: 1,
        cans: 0
    },
    {
        routeName: "icecreamtruck",
        name: "Ice-Cream Truck",
        weight: "Middleweight",
        hull: 10,
        maxGear: 4,
        special: "Infuriating Jingle",
        handling: 2,
        crew: 2,
        cans: 0
    },
    {
        routeName: "ambulance",
        name: "Ambulance",
        weight: "Middleweight",
        hull: 12,
        maxGear: 5,
        special: "Uppers, Downers",
        handling: 4,
        crew: 2,
        cans: 0
    },
    {
        routeName: "helicopter",
        name: "Helicopter",
        weight: "Heavyweight",
        hull: 8,
        maxGear: 4,
        special: "Airwolf, Airborne",
        handling: 3,
        crew: 3,
        cans: 0
    },
    {
        routeName: "tank",
        name: "Tank",
        weight: "Heavyweight",
        hull: 20,
        maxGear: 3,
        special: "Pivot, All Terrain, Up and Over",
        handling: 4,
        crew: 3,
        cans: 0
    },
    {
        routeName: "warrig",
        name: "War Rig",
        weight: "Heavyweight",
        hull: 26,
        maxGear: 4,
        special: "Articulated, Ponderous, Piledriver",
        handling: 2,
        crew: 5,
        cans: 0
    }
]
//routes

//first ajax page "/"
app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "view.html"))
})

//display all cars
app.get("/api/vehicles", function(req,res){
    return res.json(vehicles)
})

//display single car or return false
app.get("/api/vehicles/:vehicle", function(req,res){
    const chosen = req.params.vehicle

    console.log(chosen)

    for(i = 0; i < vehicles.length; i++){
        if(chosen === vehicles[i].routeName){
            return res.json(vehicles[i])
        }
    }

    return rex.json(false)
})



//create new car 

//start server 
app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT)
})