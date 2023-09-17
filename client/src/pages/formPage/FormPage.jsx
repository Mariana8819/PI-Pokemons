import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import validate from './Validate';
import { addPokemons } from '../../redux/actions';
import style from './FormPage.module.css';

export default function FormPage() {

  const dispatch = useDispatch();


  const [inputs, setInputs]= useState({
    name: '',
    image:'',
    life:'',
    attack:'',
    defense:'',
    speed:'',
    height:'',
    weight:'',
    type:[],
  })

  const [errors, setErrors]= useState({
    name: '',
    image:'',
    life:'',
    attack:'',
    defense:'',
    speed:'',
    height:'',
    weight:'',
    type:[],
  })

  

  const handleChange=(evento)=>{      //f para manejar los cambios en los inputs del form
    const {name, value} =evento.target;
    setInputs({
      ...inputs,
      [name]:value,
      type: value.split(',').map((item)=> item.trim())      //es dinamico y se adapta al lugar donde este seteado el name
    })
  setErrors(validate({      //seteo los errores en el estado
    ...inputs,
    [name]:value,
  }));
};

  const handlerSubmit=(evento)=>{
    evento.preventDefault();
    dispatch(addPokemons(inputs));
    alert("✅Pokemon created successfully!!✅");
    };


  return (
    <div className={style.allcc}>
        <h1 className={style.h1cc} >Create your Pokemon</h1>
      <form className={style.formcc} onSubmit={(evento)=>handlerSubmit(evento)}>
        <div className={style.containercc}>
          <label className={style.labelcc}>Name: </label>
            <input
            className={style.inputcc}
            name='name'
            value={inputs.name}
            onChange={handleChange}
            />
            <span className={style.labelcc}>{errors.name}</span>
         
        </div>
        <div className={style.containercc}>
          <label className={style.labelcc}>Image: </label>
            <input
            name='image'
            value={inputs.image}
            onChange={handleChange}
            />
            <span className={style.labelcc}>{errors.image}</span>
         
        </div>
        <div className={style.containercc}>
          <label className={style.labelcc}>Life:</label>
            <input
            name='life'
            value={inputs.life}
            onChange={handleChange}
            />
            <span className={style.labelcc}>{errors.life}</span>
          
        </div>
        <div className={style.containercc}>
          <label className={style.labelcc}>Attack: </label>
            <input
            name='attack'
            value={inputs.attack}
            onChange={handleChange}
            />
            <span className={style.labelcc}>{errors.attack}</span>
        
        </div>
        <div className={style.containercc}>
          <label className={style.labelcc}>Defense:   </label>
            <input
            name='defense'
            value={inputs.defense}
            onChange={handleChange}
            />
            <span className={style.labelcc}>{errors.defense}</span>
       
        </div>
        <div className={style.containercc}>
          <label className={style.labelcc}>Speed: </label>
            <input
            name='speed'
            value={inputs.speed}
            onChange={handleChange}
            />
            <span className={style.labelcc}>{errors.speed}</span>
        
        </div>
        <div className={style.containercc}>
          <label className={style.labelcc}>Height: </label>
            <input
            name='height'
            value={inputs.height}
            onChange={handleChange}
            />
            <span className={style.labelcc}>{errors.height}</span>
       
        </div>
        <div className={style.containercc}>
          <label className={style.labelcc}>Weight: </label>
            <input
            name='weight'
            value={inputs.weight}
            onChange={handleChange}
            />
            <span className={style.labelcc}>{errors.weight}</span>
        
        </div>
        <div className={style.containercc}>
          <label className={style.labelcc}>Types:  </label>
            <input
            name='type'
           
            onChange={handleChange}
            />
            <span className={style.labelcc}>{errors.type}</span>
       
        </div>

        {Object.keys(errors).length === 0 ?
        (
        <button className={style.buttoncc} type='submit'>Send</button>
        ): null}       

      </form>
    </div>
  )
}
