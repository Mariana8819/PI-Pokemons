import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getDetailPokemon } from '../../redux/actions';
import style from './DetailPage.module.css';

export default function DetailPage() {
  const {id}= useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state)=> state.detail)
  //console.log("mi detaill", detail);
  //const [input, setInput] = useState('');

useEffect(()=>{
  dispatch(getDetailPokemon(id))
  
}, [dispatch, id])

  return (
    <div className={style.detail}>
      {/* <p>Id:{id}</p> */}
      <div className={style.detailright}>
      <p className={style.namedetail}>Name:{detail.name}</p>      
      </div>
      <img className={style.detailimg} src={detail.image} alt={detail.name}/>
      <div className={style.detailleft}>
      <p className={style.typedetailT}>Types:{detail.type && detail.type.join(', ')}</p>
      </div>     
      <p className={style.hwaddetail}>Life:{detail.life}</p>
      <p className={style.hwaddetail}>Attack:{detail.attack}</p>
      <p className={style.hwaddetail}>Defense:{detail.defense}</p>
      <p className={style.hwaddetail}>Speed:{detail.speed}</p>
      <p className={style.hwaddetail}>Height:{detail.height}</p>
      <p className={style.hwaddetail}>Weight:{detail.weight}</p>      
      </div>
  )
}
