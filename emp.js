const mysql = require("mysql");
var express = require("express");

var emprouter =  express();

const connection = mysql.createConnection({
    host     : '192.168.43.49',
    user     : 'root',
    password : 'Manager@123',
    database : 'nodetest',
    port: 3308
  });

var myData =[];
connection.connect();


emprouter.post("/",function(request, response){

    let eno = parseInt(request.body.No);
    let ename = request.body.Name;
    let eddress = request.body.Address; 
    
    let query = `insert into emp values(${eno}, '${ename}', '${eddress}')`;
    console.log(query);

    connection.query(query, function(err, result){
        if(err==null)
        {
           response.contentType("application/json");
           response.send(JSON.stringify(result));
        }
        else
        {
           response.contentType("application/json");
           response.send(err); 
        }
    });
});




emprouter.get("/", function(request, response){
    connection.query("select * from emp", function(err, result){
        var myData;
        console.log("hii");
        if(err==null)
        {
           myData = result;
           console.log( myData);
           response.contentType("application/json");
           response.send(JSON.stringify(myData));
        }
        else
        {
           response.send("Something went wrong!"); 
        }
    });
    
});


module.exports = emprouter;
