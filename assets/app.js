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
    const resultingfact = JSON.stringify(randomfact)
    console.log(resultingfact);
    document.getElementById("randomfactsection").innerHTML = resultingfact;
  });
  }
  function drawbuttons() {
    fetch('http://localhost:3000/factarray/')
   .then(function(response) {
     return response.json();
   })
   .then(function(eachfact) {
     const eachfact = JSON.stringify(eachfact)
     console.log(eachfact);
     document.getElementById("eachfactsection").innerHTML = eachfact;
   });
   }

    for ( let factnumber = 0; factnumber < facts.length; factnumber++) {
      text += facts[factnumber] + "<br>";
    }
