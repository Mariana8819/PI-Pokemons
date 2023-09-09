import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getDetailPokemon } from '../../redux/actions';

export default function DetailPage() {
  const {id}= useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state)=> state.detail)
  //console.log("mi detaill", detail);

useEffect(()=>{
  dispatch(getDetailPokemon(id))
}, [dispatch, id])

  return (
    <div>
      <p>Id:{id}</p>
      <p>Name:{detail.name}</p>      
      <p>Types:{detail.type && detail.type.join(', ')}</p>
      <p>Life:{detail.life}</p>
      <p>Attack:{detail.attack}</p>
      <p>Defense:{detail.defense}</p>
      <p>Speed:{detail.speed}</p>
      <p>Height:{detail.height}</p>
      <p>Weight:{detail.weight}</p>
      <img src={detail.image} alt={detail.name}/>
      <p></p>

    </div>
  )
}
