const {Router} = require("express");
const {Pokemon, Type} = require("../db");
const getAllPokemons = require("../controllers/allPokemonsControllers");

const router = Router();

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const convertId = Number(id);

        let pokemon;

        if (!isNaN(convertId)) {            
            const pokemons = await getAllPokemons();       // Si el ID se puede convertir a un número, buscar por ID numérico
            pokemon = pokemons.find((p) => p.id === convertId);

        } else {            
            const pokemons = await getAllPokemons();       // Si el ID no se puede convertir a un número, buscar por el ID tal como llega
            pokemon = pokemons.find((p) => p.id === id);
           // console.log("aqui mi :", pokemon);
        }
        
        if (pokemon) {
            res.json(pokemon);
        } else {
            res.status(404).json({ message: "No se encontró ningún Pokémon con el ID proporcionado." });
        }
    } catch (error) {
        res.status(500).json(`Here is the error: ${error.message}`);
    }
});

module.exports= router;



