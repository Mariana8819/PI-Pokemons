import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';


export default function NavBar() {
  return (
    <div className={style.searchbox}>
      <nav className={style.homenav}>
        <Link to='/home' className={style.homebtn} >
          <button className={style.homebtn}>Home</button>
        </Link>
        <Link to='/create' className={style.homebtn}>
          <button className={style.homebtn}>Create Pókemon</button>
        </Link>
        <Link to='/' className={style.homebtn} >
          <button className={style.homebtn}>Inicio</button>
        </Link>
      </nav>
    </div>
  )
}



// //******************************** */
// export default function NavBar({handleChangeNavBar, handleSubmitNavBar}) {
//   return (
//     <div className={style.searchbox}>
//       <form onChange={(evento)=>handleChangeNavBar(evento)}>
//         <input type= 'search' placeholder='Busqueda' />
//         <button type='submit' onClick={handleSubmitNavBar}>Buscar</button>
//       </form>
//     </div>
//   )
// }