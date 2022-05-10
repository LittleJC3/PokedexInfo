var pmonGoButton = document.getElementById('pmonGoButton');

pmonGoButton.onclick = function (){
    var Pokemon = document.getElementById('pmon');
    var mon = Pokemon.value;
    var websiteURL = "https://pokeapi.co/api/v2/pokemon/" + mon;
    var XMLRequest = new XMLHttpRequest();

    XMLRequest.onreadystatechange = function(){
        if (XMLRequest.readyState == 4){
            var theResult = XMLRequest.responseText;
            var pokemonParse = JSON.parse(theResult);
            var resultHTML = document.getElementById('results');
            resultHTML.innerHTML = pokemonParse.species["name"];
        }
    };
    XMLRequest.open('GET', websiteURL, true);
    XMLRequest.send(null);

}


var statsGoButton = document.getElementById('statsGoButton');
statsGoButton.onclick = function (){
    var Pokemon = document.getElementById('pmon');
    var mon = Pokemon.value;
    var PokemonStats = document.getElementById('pmonStats');
    var monStats = PokemonStats.value;
    var websiteURL = "https://pokeapi.co/api/v2/pokemon/" + mon;
    var XMLRequest = new XMLHttpRequest();

    XMLRequest.onreadystatechange = function(){
        if (XMLRequest.readyState == 4){
            var theResult = XMLRequest.responseText;
            var pokemonParse = JSON.parse(theResult);
            var resultHTML = document.getElementById('results2');
            resultHTML.innerHTML = pokemonParse.stats[monStats]["stat"]["name"] + ": " + pokemonParse.stats[monStats]["base_stat"];
        }
    };
    XMLRequest.open('GET', websiteURL, true);
    XMLRequest.send(null);

}