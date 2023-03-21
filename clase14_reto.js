//piedra gana tijera
//tijera gana papel
//papel gana piedra

/*function juego(maquina, humano){
    var resultado = "";
    if (maquina === "piedra" && humano === "tijera" || maquina === "tijera" && humano === "papel" || maquina === "papel" && humano === "piedra")
        resultado = "Ganó maquina";
    else  if (humano === "piedra" && maquina === "tijera" || humano === "tijera" && maquina === "papel" || humano === "papel" && maquina === "piedra")
        resultado = "Ganó humano";
    else if (maquina === humano)
        resultado = "Empate";

    return resultado;
}*/

/*function juego(maquina, humano){
    return (maquina === "piedra" && humano === "tijera" || maquina === "tijera" && humano === "papel" || maquina === "papel" && humano === "piedra") ? "Ganó maquina"
           : (humano === "piedra" && maquina === "tijera" || humano === "tijera" && maquina === "papel" || humano === "papel" && maquina === "piedra") ? "Ganó humano"
           : (maquina === humano) ? "Empate"
           : "";
  }*/
  function juego(maquina, humano){
    return (maquina === "piedra" && humano === "tijera" || maquina === "tijera" && humano === "papel" || maquina === "papel" && humano === "piedra") ? "Ganó maquina"
           : (humano === "piedra" && maquina === "tijera" || humano === "tijera" && maquina === "papel" || humano === "papel" && maquina === "piedra") ? "Ganó humano"
           : "Empate";
  }

console.log(juego("papel", "tijera"));
console.log(juego("papel", "papel"));
console.log(juego("piedra", "tijera"));
