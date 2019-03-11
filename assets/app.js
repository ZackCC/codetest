/* tap the console
  (function () {
   console.log("Hello Browser World!")
  }());
*/
function randomclick() {
    console.log('Somebody wanted a random fact...');
    fetch('http://cinematica.tools:5000/fact/random')
        .then(function(response) {
            return response.json();
        })
        .then(function(randomfact) {
            const resultingfact = randomfact.fact;
            console.log(resultingfact);
            const resultingfactindex = randomfact.randomfactindex;
            document.getElementById('randomfactsection').innerHTML = resultingfact;
            document.getElementById('randomfactindexsection').innerHTML = 'Random Fact #' + (resultingfactindex+1);
            console.log('Bringing the random fact into view Captain');
            const elmnt = document.getElementById('topofrandomfactsection');
            elmnt.scrollIntoView();
        });

}

function drawbuttons() {
    console.log('Someone wanted a specific fact...');
    fetch('http://cinematica.tools:5000/factarray/')
        .then(function(response) {
            return response.json();
        })
        .then(function(allthefacts) {
            console.log(allthefacts[0]);
            for ( let factnumber = 0; factnumber < allthefacts.length; factnumber++) {
                let specificfact = document.createElement('li');
                specificfact.innerHTML = allthefacts[factnumber].toString();
                document.getElementById('eachfactsection').appendChild(specificfact);
            }
        });
}

function scrolltofactlibrary(){
    console.log('Bringing the facts into view captain');
    const elmnt = document.getElementById('factlibrarysection');
    elmnt.scrollIntoView();
}
drawbuttons();
