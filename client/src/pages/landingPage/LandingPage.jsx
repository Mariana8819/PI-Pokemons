import React from 'react'
import {Link} from 'react-router-dom';
import style from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <div className={style.lpdiv}>
        <h1 className={style.lptitle}>Welcome to the Pokemons World</h1>
        <Link to='/home'>
            <button className={style.lpbutton} type='submit'>Time to play!</button>
        </Link>
        </div>
  )
}
