import axios from "axios";
import {
    GET_POKEMONS,
    ADD_POKEMONS,
    GET_QUERY_POKEMON,
    GET_DETAIL_POKEMON,
    GET_TYPES,
    FILTER_TYPES,
    FILTER_BY_ORIGIN,
    FILTER_BY_ORDER_ALPHABETIC,
    FILTER_BY_ATTACK,
    DELETE_FILTERS,
    FILTER_BY_LOW_ATTACK,
    FILTER_DETAIL,
    NEXT_PAGE,
    PREV_PAGE,
} from "./actionsTypes";

export const getPokemons = ()=>{
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/pokemons/`);
      return  dispatch ({
            type: GET_POKEMONS,
            payload: response.data
        })
    }
}

export const getDetailPokemon = (id)=>{
    return async function(dispatch){
        try{
        const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
        //console.log("mi response",response);
          dispatch({
            type: GET_DETAIL_POKEMON,
            payload : response.data

        });
    }catch(error){
        alert("The pokemon with that ID does not exist");
    }
 }
}

export const filterDetail = (input)=>{
return async function(dispatch){
    return ({
        type: FILTER_DETAIL,
        payload:input

     })
 }
}

export const getQueryPokemon = (name) =>{
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
      return dispatch({
            type: GET_QUERY_POKEMON,
            payload: response.data
        })
    }
}

export const addPokemons = (inputs) =>{
    return async function(dispatch){
        try{
        const response = await axios.post("http://localhost:3001/pokemons", inputs);
        return dispatch({
            type: ADD_POKEMONS,
            payload: response.data
        })
    }catch(error){
        alert("The pokemon could not create");    
    }
  }
}

export const getTypes = () =>{
    return async function(dispatch){
        const response = await axios.get("http://localhost:3001/types");
        return dispatch({
            type: GET_TYPES,
            payload: response.data
        })
    }
}

export const filterTypes = (payload) =>{
   return{
    type: FILTER_TYPES,
    payload,
   }
}

export const filterByOrigin = (origin)=>{
    return{
        type: FILTER_BY_ORIGIN,
        payload: origin,
    }
}

export const filterByAttack = () =>{
    return{
        type: FILTER_BY_ATTACK,
        
    }
}

export const filterByLowAttack = (lowAttack) =>{
    return{
        type: FILTER_BY_LOW_ATTACK,
        payload:lowAttack,
        
    }
}

export const orderByAlphabetic = (option) => {
 return {
    type:  FILTER_BY_ORDER_ALPHABETIC,
    payload: option,
 }
}
 
export const deleteFilter= ()=>{
    return{
        type: DELETE_FILTERS,
    }
}



export const nextPage= ()=>{
    return{
        type: NEXT_PAGE,
    }
}

export const prevPage = ()=>{
    return{
        type: PREV_PAGE,
    }
}