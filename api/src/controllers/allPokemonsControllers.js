const axios = require("axios");
const {Pokemon, Type} = require("../db");

const allPokemons = async(req, res)=>{
    try {
        const pokemons = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=120')).data.results;
        
        const pokemonMap = await Promise.all(pokemons.map(async (pokemon)=>{
            const pokemonGetUrl = await axios.get(pokemon.url);
            const pokemonData = pokemonGetUrl.data;

            if(!pokemonData){
                throw new Error("Not found pokemon´s information")
            }else{
                const pokemonObj={
                    id: pokemonData.id,
                    name: pokemonData.name,
                    image: pokemonData.sprites["versions"]["generation-v"]["black-white"]["animated"]["front_default"],
                    life: pokemonData.stats.find((elemento)=> elemento.stat.name ==='hp').base_stat,
                    attack: pokemonData.stats.find((elemento)=> elemento.stat.name ==='attack').base_stat,
                    defense: pokemonData.stats.find((elemento)=> elemento.stat.name ==='defense').base_stat,
                    speed: pokemonData.stats.find((elemento)=> elemento.stat.name ==='speed').base_stat,
                    height: pokemonData.height,
                    weight: pokemonData.weight,
                    type: pokemonData.types.map((elemento)=> elemento.type.name), 
                };
                return pokemonObj;
            }
        }));
        return pokemonMap;

    } catch (error) {
        res.status(400).json(`Not found pokemons in DB: ${error.message}`);
    }
}

const pokemonsDb = async ()=>{
    const pokeDb= await Pokemon.findAll({
        include:{
            model: Type,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        },
    });

    const pokeMap= pokeDb.map((p)=> {
        return {
            id: p.id,
            name: p.name,
            image: p.image,
            life: p.life,
            attack: p.attack,
            defense: p.defense,
            speed: p.speed,
            height: p.height,
            weight: p.weight,
            type: p.Types.map(typ=> typ.name)    // se muestra en db = ["",""] y no como [{},{},{}]
        }
    })
    return pokeMap;

};

const getAllPokemons =async ()=>{
        const apiInfo = await allPokemons();
        const dbInfo = await pokemonsDb();
        const infoTotal = apiInfo.concat(dbInfo);
        return infoTotal;
    }

    // const infoTotal = [...allPokemons, ...pokemonsDb];
    // return infoTotal;



module.exports= getAllPokemons;