/* tap the console
  (function () {
   console.log("Hello Browser World!")
  }());
*/
  function randomclick() {
    //console.log("Somebody wanted a random fact...")
   fetch('http://localhost:3000/fact/random')
  .then(function(response) {
    return response.json();
  })
  .then(function(randomfact) {
    const resultingfact = randomfact.fact
    console.log(resultingfact);
    const resultingfactindex = randomfact.randomfactindex
    document.getElementById("randomfactsection").innerHTML = resultingfact;
    document.getElementById("randomfactindexsection").innerHTML = "Random Fact #" + (resultingfactindex+1);
  });
  }

  function drawbuttons() {
    console.log("Someone wanted a specific fact...")
    fetch('http://localhost:3000/factarray/')
   .then(function(response) {
     return response.json();
   })
   .then(function(allthefacts) {
     //const allthefacts = JSON.stringify(eachfact)
     console.log(allthefacts[0]);
     //document.getElementById("eachfactsection").innerHTML = allthefact;
     for ( let factnumber = 0; factnumber < allthefacts.length; factnumber++) {
      let specificfact = document.createElement('li');
      specificfact.innerHTML = allthefacts[factnumber].toString()
      document.getElementById("eachfactsection").appendChild(specificfact)
     }
   });
   }
