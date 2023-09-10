import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { getQueryPokemon } from '../../redux/actions';
import style from './SearchBar.module.css';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState('');

const handleSearch=()=>{
  dispatch(getQueryPokemon(searchString))
}

  return (
    <div className={style.searchBarContainer}>
      <input
      className={style.searchBar}
      type='text'
      placeholder='Search by name'
      value={searchString}
      onChange={(evento)=>setSearchString(evento.target.value)}>
      </input>
      <button className={style.searchButton} onClick={handleSearch}>Search!</button>
    </div>
  )
}
