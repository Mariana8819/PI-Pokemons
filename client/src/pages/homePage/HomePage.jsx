import React, { useEffect } from 'react'
import { useState } from 'react';
import{useDispatch, useSelector} from 'react-redux';
import {deleteFilter, filterByAttack,filterByLowAttack,  filterByOrigin, filterTypes, getPokemons, getTypes, orderByAlphabetic} from '../../redux/actions'
import Cards from '../../components/cards/Cards';
import SearchBar from '../../components/searchBar/SearchBar';
import style from './HomePage.module.css';


export default function HomePage() {
    const dispatch = useDispatch();

    const [option, setOption] = useState('');
    const [lowAttack, setlowAttack] = useState('');
   
    const pokemons = useSelector((state)=> state.pokemons);
    //console.log("aquii", pokemons)
    const types = useSelector ((state)=> state.types);  

    const [inputTypes, setInputTypes] = useState('');
   // console.log("filtro typee", inputTypes)
     


    useEffect(()=>{
        dispatch(getPokemons());
        dispatch(getTypes());
        dispatch(deleteFilter());
    },[dispatch]);

    
    const handleFilterTypes = (evento)=>{
        const selectedValue = evento.target.value;
        setInputTypes(selectedValue);
        if(evento.target.value === 'default'){
            dispatch(getPokemons());
        }else{
        dispatch(filterTypes(selectedValue));
    };
}  

    const handleFilterByOrigin = (evento)=>{
        const {name, value} = evento.target;
        if(name === 'Origin'){
        dispatch(filterByOrigin(value));
      }
    };

    const handlerOrderAlphabetic = () => {
        if(option === "Filter by Alphabetetic"){
         dispatch(getPokemons())
        }
        dispatch(orderByAlphabetic(option));
    }

    const handleFilterByAttack = ()=>{
        dispatch(filterByAttack());
    }
    const handleFilterByLowAttack = ()=>{
        dispatch(filterByLowAttack(lowAttack));
    }

    const handleClearFilters = ()=>{
        dispatch(getPokemons());
    };


  return (
    <div className={style.home}>
        <div className={style.filters}>
         
         <h1 className={style.hometitle}>Pokemons´s House</h1>

         <select className={style.homeselect} name="Origin" onChange={handleFilterByOrigin} defaultValue="Filter by origin">
                    <option disabled >Filter By</option>
                    <option value="All">All</option>
                    <option value="Api">Api</option>
                    <option value="DataBase">DataBase</option>
                </select>

            <select className={style.homeselect} onClick={handlerOrderAlphabetic} defaultValue="Filter by Alphabetetic" onChange={(e) => setOption(e.target.value)}>
                    <option value={"Filter by Alphabetetic"}>Order by Alphabetic</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
            
            <select className={style.homeselect} onChange={(evento)=> handleFilterTypes(evento)}  value={inputTypes}  >
                <option value='default'>Filter By Type</option>
                {types?.map((type)=>(
                    <option key={type.id} value={type.name}>
                        {type.name}
                    </option>
                ))}
            </select>
            <button className={style.homeselect} name='attack' onClick={handleFilterByLowAttack} onChange={(e) => setlowAttack(e.target.value)}>Low Attack</button>
            <button className={style.homeselect} name='attack' onClick={handleFilterByAttack}>Higher Attack</button>
            <button className={style.homeselect} name='reset' onClick={handleClearFilters}>Delete Filters</button>
        </div>

        <SearchBar />        
        <div className={style.cardscontainer}>
        <Cards
         pokemons={pokemons}/>       
        </div>
    </div>
  )
}
