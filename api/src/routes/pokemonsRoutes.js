const {Router} = require("express");
const getAllPokemons = require("../controllers/allPokemonsControllers");

const router = Router();

router.get("/", async (req, res)=>{
    try {
        const pokemons = await getAllPokemons();
        res.status(200).json(pokemons)
        
    } catch (error) {
        res.status(400).json(`Aqui esta el error:${error.message}`)
    }
})

module.exports = router;