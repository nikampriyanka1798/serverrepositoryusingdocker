var express = require("express");

var empRoutes= require("./emp");
var app =  express();
const port = 4000;


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Use Middleware
app.use(express.json());

app.use("/employees",empRoutes);

//listen to port for requests
app.listen(port, function(){
    console.log("Server Started on port  " + port );
})
