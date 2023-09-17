
import { useSelector } from 'react-redux';
import Card from '../card/Card';
import style from './Cards.module.css';
import Paginated from '../paginated/Paginated';

export default function Cards({pokemons}) {
  
const numPage = useSelector((state)=> state.numPage);

let begining = (numPage - 1) * 12;                     //define estado local para la pag actual
let end = numPage * 12;

let amountPage = Math.ceil(pokemons.length / 12)                //calculo la cantidad de pags

const fetchPokemons = pokemons.slice( begining, end)

  

 return (
    
    <div className={style.cardscontainer}> 

            {fetchPokemons.map((pokemon, index)=>
            <Card className={style.img} pokemon={pokemon} 
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