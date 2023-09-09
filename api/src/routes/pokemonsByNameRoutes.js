const {Router} = require("express");
const getAllPokemons = require("../controllers/allPokemonsControllers");



const router = Router();

router.get("/", async(req, res)=>{
    try {
        const {name}= req.query;
        const pokemons = await getAllPokemons(name);
        if(name){
            const pokemonName = await pokemons.filter((pokemon)=> pokemon.name.toLowerCase().includes(name.toLowerCase()))
            if(pokemonName.length === 0){
                return res.status(400).json(`Not found this pokemon`);                
            }else{
                return res.status(200).json(pokemonName);
            }

        }else{
         return res.status(200).json(pokemons);
        }

    } catch (error) {
        res.status(400).json(`Here is the error ByName:${error.message}`)
    }
})

module.exports= router;