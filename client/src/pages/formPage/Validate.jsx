export default function validate (inputs){
    const errors= {};
    if( !inputs.name.trim().length) {
      errors.name = "Must have a name"
    }
    else if(!inputs.image.trim().startsWith('http')){
      errors.image = "Must have an URL"
    }
    else if(isNaN(inputs.life)){
      errors.life = "Must have a numeric value"
    }
    else if(isNaN(inputs.attack)){
      errors.attack = "Must have a numeric value"
    }
    else if(isNaN(inputs.defense)){
      errors.defense = "Must have a numeric value"
    }
    else if(isNaN(inputs.speed)){
      errors.speed = "Must have a numeric value"
    }
    else if(isNaN(inputs.height)){
      errors.height = "Must have a numeric value"
    }
    else if(isNaN(inputs.weight)){
      errors.weight = " Must have a numeric value"
    }
    else if(!inputs.type){
      errors.type = " Must have a type"
    }
    return errors;
  }