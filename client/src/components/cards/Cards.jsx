//import { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../card/Card';
import style from './Cards.module.css';
import Paginated from '../paginated/Paginated';

export default function Cards({pokemons}) {
  
const numPage = useSelector((state)=> state.numPage);

let begining = (numPage - 1) * 12;     //define estado local para la pag actual
let end = numPage * 12;

let amountPage = Math.floor(pokemons.length / 12)   //calculo la cantidad de pags

const fetchPokemons = pokemons.slice( begining, end)

  //console.log("pokemons en Cardss", pokemons)
  //pokemon  por pag y crear estado con los pokemons a mostrar
//   const pokemonsPerPage = 12;
//   const [pokemonss, setPokemonss] = useState(pokemons.slice(0,pokemonsPerPage));
//   //pag actual y dar funcion a los botones
//   const [currentPage, setCurrentPage] = useState(0); //para crear un contador creo un estado
// console.log("mi currentPage es: ", currentPage)

  // const prevHandler = ()=>{
  //   const prevPage = currentPage -1;
  //   if(prevPage < 0) return;
  //   const firstIndex = prevPage * pokemonsPerPage;
  //   const lastIndex = firstIndex + pokemonsPerPage;
  //   setPokemonss([...pokemons].slice(firstIndex, lastIndex));
  //   setCurrentPage(prevPage);
  // };
  // const nextHandler = ()=>{
  //   const totalPokemons = pokemons.length;
  //   const nextPage = currentPage + 1;
  //   const firstIndex = nextPage * pokemonsPerPage;
  //   const lastIndex = firstIndex + pokemonsPerPage ;
  //   if (firstIndex > totalPokemons) return;
  //   setPokemonss([...pokemons].slice(firstIndex, lastIndex));
  //   setCurrentPage(nextPage);
  // };
    // mostrar numero de pags
   // const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);

 return (
    
    <div className={style.cardscontainer}>
   
      {/* <h3>Page {currentPage + 1} </h3>
      <button onClick={prevHandler}>Prev</button>
      <button onClick={nextHandler}>Next</button> */}

        {/* {pokemons?.map((pokemon)=>(             */}
            {fetchPokemons.map((pokemon, index)=>
            <Card pokemon={pokemon} 
            key={index}/>
         )}             
          
            <Paginated amountPage={amountPage} />
       
    </div>
    
    
  );
};





//import { useSelector } from 'react-redux';

  //  const pokemons = useSelector((state)=> state.pokemons);

    // id={pokemon.id}
                // name={pokemon.name}
                // image={pokemon.image}
                // attack={pokemon.attack}               
                // types={pokemon.type}
                // />