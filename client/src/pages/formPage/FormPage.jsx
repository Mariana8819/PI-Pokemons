import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import validate from './Validate';
import { addPokemons } from '../../redux/actions';
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
    <div>
      <form onSubmit={(evento)=>handlerSubmit(evento)}>
        <div>
          <label>Name: </label>
            <input
            name='name'
            value={input.name}
            onChange={handleChange}
            />
            <span>{errors.name}</span>
         
        </div>
        <div>
          <label>Image: </label>
            <input
            name='image'
            value={input.image}
            onChange={handleChange}
            />
            <span>{errors.image}</span>
         
        </div>
        <div>
          <label>Life:</label>
            <input
            name='life'
            value={input.life}
            onChange={handleChange}
            />
            <span>{errors.life}</span>
          
        </div>
        <div>
          <label>Attack: </label>
            <input
            name='attack'
            value={input.attack}
            onChange={handleChange}
            />
            <span>{errors.attack}</span>
        
        </div>
        <div>
          <label>Defense:   </label>
            <input
            name='defense'
            value={input.defense}
            onChange={handleChange}
            />
            <span>{errors.defense}</span>
       
        </div>
        <div>
          <label>Speed: </label>
            <input
            name='speed'
            value={input.speed}
            onChange={handleChange}
            />
            <span>{errors.speed}</span>
        
        </div>
        <div>
          <label>Height: </label>
            <input
            name='height'
            value={input.height}
            onChange={handleChange}
            />
            <span>{errors.height}</span>
       
        </div>
        <div>
          <label>Weight: </label>
            <input
            name='weight'
            value={input.weight}
            onChange={handleChange}
            />
            <span>{errors.weight}</span>
        
        </div>
        <div>
          <label>Types:  </label>
            <input
            name='type'
            value={input.type}
            onChange={handleChange}
            />
            <span>{errors.type}</span>
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
        <button type='submit'>Send</button>
        ): null}       

      </form>
    </div>
  )
}
