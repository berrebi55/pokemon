console.log("SCript view loaded")
import Functions from "../modules/functions.js";

const params = new URLSearchParams(window.location.search)

const slug = params.get("slug")

const pokemon = Functions.getPokemonDetail(slug) // Local access

console.log(pokemon)

document.querySelector("#poke-name").textContent = pokemon.name
document.querySelector("#poke-img").src = pokemon.image
document.querySelector("#poke-sprite").src = pokemon.sprite
document.querySelector("#poke-gen").textContent = pokemon.apiGeneration

pokemon.apiTypes.forEach((type)=>{
    let span = document.createElement("span")
    let typeImg = document.createElement("img")
    typeImg.src = type.image
    typeImg.alt = type.name
    typeImg.width = 30
    typeImg.height = 30
    span.textContent = type.name
    span.prepend(typeImg)
    document.querySelector("#poke-types").append(span)
})

Object.keys(pokemon.stats).forEach((key)=>{
    document.querySelector(`#poke-stat-${key.toLowerCase()}`).textContent = pokemon.stats[key]
})

document.querySelector("#poke-name-2").textContent = pokemon.name
