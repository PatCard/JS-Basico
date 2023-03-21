function juego(maquina, humano) {
    let resultado = "";
  
    switch (maquina) {
      case "piedra":
        if (humano === "tijera") {
          resultado = "Ganó maquina";
        } else if (humano === "papel") {
          resultado = "Ganó humano";
        } else if (humano === "piedra") {
          resultado = "Empate";
        }
        break;
      case "tijera":
        if (humano === "papel") {
          resultado = "Ganó maquina";
        } else if (humano === "piedra") {
          resultado = "Ganó humano";
        } else if (humano === "tijera") {
          resultado = "Empate";
        }
        break;
      case "papel":
        if (humano === "piedra") {
          resultado = "Ganó maquina";
        } else if (humano === "tijera") {
          resultado = "Ganó humano";
        } else if (humano === "papel") {
          resultado = "Empate";
        }
        break;
    }
  
    return resultado;
  }
  
  

console.log(juego("papel", "tijera"));
console.log(juego("papel", "papel"));
console.log(juego("piedra", "tijera"));
