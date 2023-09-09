import{
  GET_POKEMONS,
  ADD_POKEMONS,
  GET_QUERY_POKEMON,
  GET_DETAIL_POKEMON,
  GET_TYPES,
  FILTER_TYPES,
  FILTER_BY_ORIGIN,
  FILTER_BY_ORDER_ALPHABETIC,
  FILTER_BY_ORDER_ASC_DESC,
  FILTER_BY_ATTACK,  
  DELETE_FILTERS,
  PREV_PAGE,
  NEXT_PAGE,
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
      const pokemonsFilter = state.pokemonsCopy.filter((pokemon)=>{
        const regExp =/^[0-9]+$/;    // solo dígitos numéricos
        if( action.payload === 'Api' && regExp.test(pokemon.id)) {
          return true;
        }     
        else if(action.payload === 'DataBase' && !regExp.test(pokemon.id)){
          return true;
        }
        else if(action.payload === 'All'){
          return true;
        }
        else{
          return false;
        }
      })
      return{
        ...state,
        pokemons: pokemonsFilter,
      }  

    case FILTER_BY_ORDER_ALPHABETIC:

      const alfabetic = action.payload;
      let alfaPokemons;

      if (alfabetic === 'A-Z') {
          alfaPokemons = state.pokemons.sort((a, b) => 
          a.name.localeCompare(b.name));
      } else if (alfabetic === 'Z-A') {
          alfaPokemons = state.pokemons.sort((a, b) => b.name.localeCompare(a.name));
      } else {
          alfaPokemons = [...state.pokemons];
      }

      return {
          ...state,
          pokemons: alfaPokemons,
          currentPage: 1
      };

      case FILTER_BY_ORDER_ASC_DESC:
        const order = action.payload;
        let sortedPokemons;

        if (order === 'Ascending') {
            sortedPokemons = state.pokemons.sort((a, b) => {
                if (typeof a.id === 'number' && typeof b.id === 'number') {
                    return a.id - b.id;
                } else if (typeof a.id === 'string' && typeof b.id === 'string') {
                    return a.id.localeCompare(b.id);
                } else {
                    return 0; // Si los tipos no son comparables, no se cambia el orden
                }
            });
        } else if (order === 'Descending') {
            sortedPokemons = state.pokemons.sort((a, b) => {
                if (typeof a.id === 'number' && typeof b.id === 'number') {
                    return b.id - a.id;
                } else if (typeof a.id === 'string' && typeof b.id === 'string') {
                    return b.id.localeCompare(a.id);
                } else {
                    return 0; // Si los tipos no son comparables, no se cambia el orden
                }
            });
        } else {
            sortedPokemons = [...state.pokemons];
        }

        return {
            ...state,
            allDogs: sortedPokemons,
            currentPage: 1
        };

      case FILTER_BY_ATTACK:
        const pokemonsAttack = state.pokemonsCopy.sort((a,b)=> b.attack - a.attack)
      return{
          ...state,
          pokemons: pokemonsAttack,
        };    

    case DELETE_FILTERS:
      return{
        ...state,
        pokemons: initialState.pokemons,  //restablecer el estado inicial de los pokemons
      }  

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

