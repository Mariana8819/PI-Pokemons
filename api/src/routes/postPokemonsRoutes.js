const {Router} = require("express");
const { Pokemon, Type} = require("../db");

const router = Router();

router.post("/", async(req, res)=>{
    try {
        const{ name, image, life, attack, defense, speed, height, weight, type} = req.body;
    

        const newPokemon = await Pokemon.create({
            name, 
            image, 
            life, 
            attack, 
            defense, 
            speed, 
            height, 
            weight,
            
        });


        for (let typeName of type){
            const poketypes = await Type.findAll({
                where:{ name: typeName}
            })
            await newPokemon.addTypes(poketypes)
        }
        //console.log(types);
        res.status(200).json(newPokemon)
        
    } catch (error) {
        res.status(400).json(`Could not create the pokemon: ${error.message}`);
    }
})

module.exports= router;