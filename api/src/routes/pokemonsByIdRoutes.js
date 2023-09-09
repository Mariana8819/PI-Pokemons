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





// router.get("/:id", async(req, res)=>{
//     try {
//         const {id} = req.params;
//         //console.log("aqui es", typeof(id));
//         const pokemons = await getAllPokemons();
//         //console.log( "aqui estan mis pokemonss:", pokemons);
//         // return typeof id === 'number' && !isNaN(id)
//         const convertId = Number(id)
//        console.log("verr", convertId)
//         if(id){
//             const pokemonApiId = await pokemons.filter((pokemon)=>pokemon.id  === convertId)

//             // //console.log("que id es:", pokemonApiId);
//             // if (pokemonApiId.length === 0){
//             //     return res.status(200).json(pokemonApiId);
//             // } else{
//             //     const pokemonDb = await Pokemon.findByPk(id, {
//             //         include:[
//             //             {
//             //                 model: Type,
//             //                 attributes:['name'],
//             //                 through:{
//             //                     attributes: [],
//             //                 }
//             //             }
//             //         ]
//              //    })
//             //     return pokemonDb;

//             return pokemonApiId;
//             }
                        
//     } catch (error) {
//         res.status(400).json(`Here is the error: ${error.message}`);
//     }
// })

