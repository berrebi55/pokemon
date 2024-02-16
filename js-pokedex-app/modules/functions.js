//On importe la const pokemons qui contient la liste des pokemons
//depuis le fichier pokemons.js
import {pokemons} from "./pokemons.js";

// Fonction de recupération de tous les pokemons
// Un objet pokemon est décrit de la manière suivante:
//{ id,name,image,slug }
function getPokmemonsCollection(){
    return pokemons.map((item)=>{
        return {id:item.id, name:item.name, image:item.image,slug:item.slug}
    })
}

// Fonction de récuperation d'un seul pokemon suivant son slug
// Ici Un objet pokemon comprend toutes les informations
function getPokemonDetail(slug){
    return pokemons.filter(item=>{return item.slug === slug})[0]
}

export default {
    getPokmemonsCollection,
    getPokemonDetail
}
