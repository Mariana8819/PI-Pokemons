export default function validate (input){
    const errors= {};
    if( !input.name.trim().length) {
      errors.name = "Must have a name"
    }
    else if(!input.image.trim().startsWith('http')){
      errors.image = "Must have an URL"
    }
    else if(isNaN(input.life)){
      errors.life = "Must have a numeric value"
    }
    else if(isNaN(input.attack)){
      errors.attack = "Must have a numeric value"
    }
    else if(isNaN(input.defense)){
      errors.defense = "Must have a numeric value"
    }
    else if(isNaN(input.speed)){
      errors.speed = "Must have a numeric value"
    }
    else if(isNaN(input.height)){
      errors.height = "Must have a numeric value"
    }
    else if(isNaN(input.weight)){
      errors.weight = " Must have a numeric value"
    }
    else if(!input.type){
      errors.type = " Must have a type"
    }
    return errors;
  }