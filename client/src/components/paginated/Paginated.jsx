import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextPage, prevPage } from '../../redux/actions';


export default function Paginated({amountPage}) {
  const numPage = useSelector((state)=> state.numPage);
  const dispatch = useDispatch();

  const handleNextPage = () => {
    dispatch(nextPage())
  }

  const handlePrevPage = () => {
    dispatch(prevPage())
  }

  return (
    <div>
      {
        numPage > 1 ? (
          <>
          <button onClick={handlePrevPage}>Prev</button>
          <span>{numPage - 1}</span>
          </>
        ) : null
      }
      <span>{numPage}</span>
      {
        numPage < amountPage ? (
          <>
          <span>{numPage + 1}</span>
          <button onClick={handleNextPage}>Next</button>
          </>
        ): null
      }
    </div>
  )
}







// import React from 'react';
// import style from './Paginated.module.css';

// export default function Paginated({pokemonsPerPage, pokemons, paginated}) {
  
//   const pageNumber = [];

//   for( let i = 1 ; i <= Math.ceil(pokemons/pokemonsPerPage) ; i++){
//     pageNumber.push(i);
//   }

 
//   return (
//     <nav className={style.navpaginado}>
//       <ul>
//         {pageNumber &&
//         pageNumber.map((number)=>(
//           <li key={number}  className={style.pageitem}>
//             <a onClick={()=> paginated(number)} className={style.pagelink} href='#!' >
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   )
// }
