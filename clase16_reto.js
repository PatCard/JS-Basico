function solution(article) {
    // Tu código aquí 👈
    let mensaje = "";
    switch(article){
        case 'computadora':
            mensaje = "Con mi computadora puedo programar usando JavaScript";
            break;
            
        case 'celular':
            mensaje = "En mi celular puedo aprender usando la app de Platzi";
            break;

        case 'cable':
            mensaje = "¡Hay un cable en mi bota!";
            break;

        default:
            mensaje = "Artículo no encontrado";
            break;
        }

    return mensaje;
  }
  
console.log(solution('computadora'));
console.log(solution('celular'));
console.log(solution('cable'));
console.log(solution('ornitorrinco'));
  
