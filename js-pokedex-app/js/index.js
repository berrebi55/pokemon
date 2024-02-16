import Functions from "../modules/functions.js";
console.log("Script index loaded")

const pokemons = Functions.getPokmemonsCollection()

console.log(pokemons)

//On cache le loader
document.querySelector("#loader").hidden = true

//On affiche les pokemons en executant la fonction displayPokemons
displayPokemons(pokemons)


//Function d'afficage des pokemons
function displayPokemons(pokemons){
    const targetEl = document.querySelector("#poke-container")
    pokemons.forEach((pokemon)=>{
        createPokemonElement(pokemon,targetEl)
    })
}

// Function de creation d'un element pokemon
function createPokemonElement(data,targetEl){
    const pokeCardTemplate= document.querySelector("#poke-card")
    let clone = pokeCardTemplate.content.cloneNode(true)
    clone.querySelector("#poke-name").textContent = data.name
    clone.querySelector("#poke-img").src = data.image
    clone.querySelector("#poke-link").href = `./view.html?slug=${data.slug}`
    targetEl.append(clone)
}
//Fin