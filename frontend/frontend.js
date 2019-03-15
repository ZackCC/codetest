/*
console.log ("hello world")

function hello(){
   return "hey";
 }

module.exports.iscool = function(whoiscool){
  return whoiscool + " is a really cool guy and hes handsome and he smells like Mahogany and Cedarwood? Weird."
}

module.exports.islame = function(whoislame){
  return whoislame + " is a really lame guy and hes handsome and he smells like garbage and patchouli? Gross."
}
*/

// Express Server

const express = require('express');
const app = express();
const port = process.env.PORT || 80;

//app.get('/', (req, res) => res.send('Hello World!'))
//Yo Express, We have static files! (Default Route)
app.use(express.static('assets'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
