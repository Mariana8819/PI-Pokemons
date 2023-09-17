import{
  GET_POKEMONS,
  ADD_POKEMONS,
  GET_QUERY_POKEMON,
  GET_DETAIL_POKEMON,
  GET_TYPES,
  FILTER_TYPES,
  FILTER_BY_ORIGIN,
  FILTER_BY_ORDER_ALPHABETIC,  
  FILTER_BY_ATTACK, 
  FILTER_BY_LOW_ATTACK,  
  PREV_PAGE,
  NEXT_PAGE,
  FILTER_DETAIL,
} from "./actionsTypes";

const initialState = {
  pokemons: [],
  pokemonsCopy: [],
  detail: [],
  types: [],
  numPage: 1,
}

const rootReducer = (state= initialState, action)=>{
  switch( action.type){
    case GET_POKEMONS:
      return{
        ...state,
        pokemons: action.payload,
        pokemonsCopy: action.payload,
      };
    
    case ADD_POKEMONS:
      return{
        ...state,
        pokemons: [...state.pokemons, action.payload],
        pokemonsCopy: [...state.pokemonsCopy, action.payload]
      }  

    case GET_QUERY_POKEMON:
      return{
        ...state,
        pokemons: action.payload
      }

    case GET_DETAIL_POKEMON:
      return{
        ...state,
        detail: action.payload
      }     
    case FILTER_DETAIL:
     return {
      ...state,
      detail: []

     }
      
    case GET_TYPES:
      return{
        ...state,
        types: action.payload,
      }

    case FILTER_TYPES:
      const pokemonCopy = [...state.pokemonsCopy];
      const pokemonTypes = action.payload === 'default'
      ? pokemonCopy
      : pokemonCopy.filter((pokemon)=>
      pokemon.type && pokemon.type.includes(action.payload)
      )
      console.log("aquiiiiii", pokemonTypes)
     return{
      ...state,
      pokemons: pokemonTypes,
     }

     case FILTER_BY_ORIGIN:
      const filtered = state.pokemonsCopy.filter((poke) => {
        const regExp = /^[0-9]+$/;
        if (action.payload === "Api" && regExp.test(poke.id)) {
          return true;
        } else if (action.payload === "DataBase" && !regExp.test(poke.id)) {
          return true;
        }
        else if (action.payload === "All") {
          return true;
        }else {
          return false;
        }
      })
      return {
        ...state,
        pokemons: filtered
      };
      case FILTER_BY_ORDER_ALPHABETIC:
        const sortedPokemons = [...state.pokemons];
        sortedPokemons.sort((a, b) => 
        action.payload === 'A-Z'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
        );
        return {
          ...state,
          pokemons: sortedPokemons,
        };  
      case FILTER_BY_ATTACK:
        const pokemonsAttack = state.pokemonsCopy.sort((a,b)=> b.attack - a.attack)
      return{
          ...state,
          pokemons: pokemonsAttack,
        };

        case FILTER_BY_LOW_ATTACK:
          const pokemonsLowAttack = state.pokemonsCopy.sort((a,b)=> a.attack - b.attack)
        return{
          ...state,
            pokemons: pokemonsLowAttack,
          };

    case NEXT_PAGE:
      return{
        ...state,
        numPage: state.numPage + 1   // seteo la pag en 1
      }  
    case PREV_PAGE:
      return{
        ...state,
        numPage: state.numPage - 1
      }


      default:
        return {...state};
  }
}

export default rootReducer;

