import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import validate from './Validate';
import { addPokemons } from '../../redux/actions';
import style from './FormPage.module.css';
//import axios from 'axios';

export default function FormPage() {

  const dispatch = useDispatch();


  const [input, setInput]= useState({
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
    setInput({
      ...input,
      [name]:value,
      type: value.split(',').map((item)=> item.trim())      //es dinamico y se adapta al lugar donde este seteado el name
    })
  setErrors(validate({      //seteo los errores en el estado
    ...input,
    [name]:value,
  }));
};

  const handlerSubmit=(evento)=>{
    evento.preventDefault();
    dispatch(addPokemons(input));
    alert("✅Pokemon created successfully!!✅");
    };

  //const  types= useSelector((state)=> state.types);

  // useEffect(()=>{
  //   dispatch(getTypes());
  // },[dispatch]);

  // const handleDelete=(type)=>{
  //   setInput({
  //     ...input,
  //     types: input.types.filter((types)=> types !==type),
  //   })
  // };

  // const hanldeSelectType=(evento)=>{
  //   const selected = evento.target.value;
  //   if(input.type.length >=2)
  //   return alert("Cannot choose more than two types");
  // if(!input.type.includes(selected)){
  //   setInput({
  //     ...input,
  //     types: [...input.type, selected],
  //   })
  // }
  // };

// const handlerSubmit= async(evento)=>{
//   evento.preventDefault();            
//   axios.post('http://localhost:3001/pokemons/new', JSON.stringify(input),{   
//    headers:{
//     'Content-Type':'application/json'
//    }
//   })
//     .then(res=>{
//       alert('Form completed successfully');
//     })
//      .catch(errorCatch => {
//       alert(errorCatch);
//      })
// }

  return (
    <div className={style.allcc}>
        <h1 className={style.h1cc} >Create your Pokemon</h1>
      <form className={style.formcc} onSubmit={(evento)=>handlerSubmit(evento)}>
        <div className={style.containercc}>
          <label className={style.labelcc}>Name: </label>
            <input
            className={style.inputcc}
            name='name'
            value={input.name}
            onChange={handleChange}
            />
            <span className={style.labelcc}>{errors.name}</span>
         
        </div>
        <div className={style.containercc}>
          <label className={style.labelcc}>Image: </label>
            <input
            name='image'
            value={input.image}
            onChange={handleChange}
            />
            <span className={style.labelcc}>{errors.image}</span>
         
        </div>
        <div className={style.containercc}>
          <label className={style.labelcc}>Life:</label>
            <input
            name='life'
            value={input.life}
            onChange={handleChange}
            />
            <span className={style.labelcc}>{errors.life}</span>
          
        </div>
        <div className={style.containercc}>
          <label className={style.labelcc}>Attack: </label>
            <input
            name='attack'
            value={input.attack}
            onChange={handleChange}
            />
            <span className={style.labelcc}>{errors.attack}</span>
        
        </div>
        <div className={style.containercc}>
          <label className={style.labelcc}>Defense:   </label>
            <input
            name='defense'
            value={input.defense}
            onChange={handleChange}
            />
            <span className={style.labelcc}>{errors.defense}</span>
       
        </div>
        <div className={style.containercc}>
          <label className={style.labelcc}>Speed: </label>
            <input
            name='speed'
            value={input.speed}
            onChange={handleChange}
            />
            <span className={style.labelcc}>{errors.speed}</span>
        
        </div>
        <div className={style.containercc}>
          <label className={style.labelcc}>Height: </label>
            <input
            name='height'
            value={input.height}
            onChange={handleChange}
            />
            <span className={style.labelcc}>{errors.height}</span>
       
        </div>
        <div className={style.containercc}>
          <label className={style.labelcc}>Weight: </label>
            <input
            name='weight'
            value={input.weight}
            onChange={handleChange}
            />
            <span className={style.labelcc}>{errors.weight}</span>
        
        </div>
        <div className={style.containercc}>
          <label className={style.labelcc}>Types:  </label>
            <input
            name='type'
            value={input.type}
            onChange={handleChange}
            />
            <span className={style.labelcc}>{errors.type}</span>
            {/* {types.map((type)=>{
              return(
                <option key={type.id} value={type.name}>
                  {type.name}
                </option>
              )
            })}
            <span>{errors.type}</span>
            </input>        
        </div>
        <div>
          {input.type?.map((typee)=>{
            return(
              <span key={typee}>
                <button onClick={()=>handleDelete(typee)}>
                  x
                </button>
                {typee}
              </span>
            )
          })} */}
        </div>

        {Object.keys(errors).length === 0 ?
        (
        <button className={style.buttoncc} type='submit'>Send</button>
        ): null}       

      </form>
    </div>
  )
}
