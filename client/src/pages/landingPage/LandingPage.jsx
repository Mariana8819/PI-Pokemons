import React from 'react'
import {Link} from 'react-router-dom';
//import style from './LandingPage/LandingPage.module.css';

export default function LandingPage() {
  return (
    <div>
        <h1>Welcome to the Pokemons World</h1>
        <Link to='/home'>
            <button type='submit'>Time to play!</button>
        </Link>
        </div>
  )
}
