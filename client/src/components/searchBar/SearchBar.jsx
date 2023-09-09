import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { getQueryPokemon } from '../../redux/actions';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState('');

const handleSearch=()=>{
  dispatch(getQueryPokemon(searchString))
}

  return (
    <div>
      <input
      type='text'
      placeholder='Search by name'
      value={searchString}
      onChange={(evento)=>setSearchString(evento.target.value)}>
      </input>
      <button onClick={handleSearch}>Search!</button>
    </div>
  )
}
