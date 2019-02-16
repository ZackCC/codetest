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

const express = require('express')
const app = express()
const port = 3000
let facts = ["Hitchcock made at least one film in his career.", "Matt has made 36 feature films in the past decade. all of them were silent pornos", "Scot Gray is famous for his appearances in several TV Westerns in the late 1300s"]

//app.get('/', (req, res) => res.send('Hello World!'))
//Yo Express, We have static files!
app.use(express.static("assets"))
//Get array (Default Route)
app.get('/fact/', function(request, response) {
  return response.send(facts.toString());
});
//Get Random Fact
app.get('/fact/random', function(request, response) {
  const fact_index = Math.floor(Math.random() * facts.length)
  return response.send(facts[fact_index]);
});
//Get Specific Fact
app.get('/fact/:id', function(request, response) {
  const fact_index = request.params.id
  return response.send(facts[parseInt(fact_index)]);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
