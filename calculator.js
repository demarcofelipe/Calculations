const express = require ("express");
const bodyParser = require ("body-parser");

const app = express()
app.use (bodyParser.urlencoded({extended:true}))

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html")
})

app.get("/bmicalculator", function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/", function (req,res){

  var num1 = Number(req.body.num1)
  var num2 = Number(req.body.num2)
  var total = num1 + num2

  res.send("the sum of your numbers is: " + total)
});

app.post("/bmicalculator", function (req,res){
  var weight = Number(req.body.Weight)
  var height = Number (req.body.Height)
  var bmi = (weight * 2 )/ height

  res.send("The BMI is " + bmi)
});

app.listen(3000, function (){
  console.log("server running on port 3000")
})
