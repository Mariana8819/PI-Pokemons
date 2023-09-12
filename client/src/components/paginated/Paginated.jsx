import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextPage, prevPage } from '../../redux/actions';
import style from './Paginated.module.css';


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
    <nav className={style.navpaginado}>
      <ul className={style.paginado}>
      {
        numPage > 1 ? (
          <>
          <button className={style.pagelink} href="#!" onClick={handlePrevPage}>Prev</button>
          <span>{numPage - 1}</span>
          </>
        ) : null
      }
      <span className={style.labelcc}>{numPage}</span>
      {
        numPage < amountPage ? (
          <>
          <span>{numPage + 1}</span>
          <button className={style.pagelink} href="#!" onClick={handleNextPage}>Next</button>
          </>
        ): null
      }
      </ul>
    </nav>
  )
}





