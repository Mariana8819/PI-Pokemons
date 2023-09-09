import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';

export default function Card({pokemon}) {
 const {id,name,image,attack,type} = pokemon
  return (
    <div className={style.cardcontainer}>
          
        <div>
        <img src={image} alt={name} />
        </div> 

        <div>
         <h2>{name}</h2>
         </div>  

        <div>
          <p>Attack: {attack}</p>
          <p>Type: {type}</p>
        </div>
                     
        <Link to={`/detail/${id}`}>
        <button>Details</button>
        </Link>

    </div>
  )
}
