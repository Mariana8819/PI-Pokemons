const axios = require("axios");
const {Type} = require("../db");

const createTypesDb = async()=>{
    const types = (await axios.get('https://pokeapi.co/api/v2/type')).data.results;
    const typeName = [];
    for (let type of types){
        let typeDb = await Type.findOne({
            where:{
                name: type.name
            }
        });
        if(typeDb){
            typeName.push(typeDb);
        }else{
            const newType= await Type.create({
                name:type.name,
            });
            typeName.push(newType);
        }
    }
    return typeName;
}

module.exports= {createTypesDb};