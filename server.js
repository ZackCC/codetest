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
const port = process.env.PORT || 5000;
let facts = ['Hitchcock made at least one film in his career.', 'Matt has made 36 feature films in the past decade. all of them were silent pornos', 'Scot Gray is famous for his appearances in several TV Westerns in the late 1300s', 'Fact #4 returns null', '5 whole facts testing the array math'];

//app.get('/', (req, res) => res.send('Hello World!'))
//Yo Express, We have static files! (Default Route)
app.use(express.static('assets'));
//Get array
/* app.get('/fact/', function(request, response) {
  return response.json(facts.toString());
}); */
app.get('/factarray/', function(request, response) {
    return response.json(facts);
});
//Get Random Fact
app.get('/fact/random', function(request, response) {
    const randomfactindex = Math.floor(Math.random() * facts.length);
    let returnable = {
        fact:facts[randomfactindex],
        randomfactindex:randomfactindex
    };
    return response.json(returnable);
});
//Get Specific Fact
app.get('/fact/:id', function(request, response) {
    const fact_index = request.params.id;
    return response.json(facts[parseInt(fact_index)]);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
