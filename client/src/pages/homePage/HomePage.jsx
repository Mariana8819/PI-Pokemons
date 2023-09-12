import React, { useEffect } from 'react'
import { useState } from 'react';
import{useDispatch, useSelector} from 'react-redux';
import {deleteFilter, filterByAttack, filterByOrderAlphabetic, filterByOrderAscDesc, filterByOrigin, filterTypes, getPokemons, getTypes} from '../../redux/actions'
import Cards from '../../components/cards/Cards';
import SearchBar from '../../components/searchBar/SearchBar';
import style from './HomePage.module.css';


export default function HomePage() {
    const dispatch = useDispatch();
   
    const pokemons = useSelector((state)=> state.pokemons);
    //console.log("aquii", pokemons)
    const types = useSelector ((state)=> state.types);  
   // const numPage = useSelector((state)=> state.numPage);

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

    const handleFilterByOrderAlphabetic = (evento)=>{
        evento.preventDefault();
        const {value} = evento.target
        dispatch(filterByOrderAlphabetic(value));
    };

    const handleFilterByOrderAscDesc =(evento)=>{
        evento.preventDefault();
        const {value} = evento.target
        dispatch(filterByOrderAscDesc(value))
    }

    const handleFilterByOrigin = (evento)=>{
        const {name, value} = evento.target;
        if(name === 'origin'){
        dispatch(filterByOrigin(value));
      }
    };

    const handleFilterByAttack = ()=>{
        dispatch(filterByAttack());
    }

    const handleClearFilters = ()=>{
        dispatch(deleteFilter());
    };


  return (
    <div className={style.home}>
        <div className={style.filters}>
         
         <h1 className={style.hometitle}>Pokemons´s House</h1>

            <select className={style.homeselect} name='origin' defaultValue={'Default'} onChange={handleFilterByOrigin}>
                <option disabled>Filter By</option>
                <option value='All'>All</option>
                <option value='Api'>Api</option>
                <option value='DataBase'>DataBase</option>
            </select>

            <select className={style.homeselect} name='alfabetic' defaultValue={'Default'} onChange={handleFilterByOrderAlphabetic}> 
                <option disabled value={'Default'}>Order by Alphabetic</option>
                <option value='AZ'>A-Z</option>
                <option value='ZA'>Z-A</option>
            </select>

            <select className={style.homeselect} name='order' defaultValue={'Default'} onChange={handleFilterByOrderAscDesc}>
                <option disabled value={'Default'}>Select by Order</option>
                <option value='Ascending'>Ascending</option>
                <option value='Descending'>Descending</option>
            </select>
        
            <select className={style.homeselect} onChange={(evento)=> handleFilterTypes(evento)}  value={inputTypes}  >
                <option value='default'>Filter By Type</option>
                {types?.map((type)=>(
                    <option key={type.id} value={type.name}>
                        {type.name}
                    </option>
                ))}
            </select>

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
