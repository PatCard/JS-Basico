/*En eeste desafío vas a recibir un parámetro arraySecreto en la función solution. 
Debes retornar true si el primer elemento del arraySecreto es de tipo string y 
debes retornar false si es de cualquier otro tipo.*/

function solution(arraySecreto) {
    // Tu código aquí 👈
    if (typeof arraySecreto[0] === "string"  )
        return true;
    else 
        return false;
  }

/*function solution(arraySecreto) {
    return(typeof arraySecreto[0] === "string"? true: false)
  }*/  

console.log(solution(["Huevo", "Gallina", "Vaca"]));
console.log(solution([1, "Gallina", "Vaca"]));

