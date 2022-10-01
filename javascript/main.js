
const canvas = document.querySelector ("#my-canvas");
const ctx = canvas.getContext ("2d");
const inicioScreen = document.querySelector ("#pantalla-inicio");
const inicioBtn = document.querySelector("#boton-inicio");

let gameGo;

const startGame = () => {
    console.log("iniciando el juego");

    inicioScreen.style.display = "none";
    canvas.style.display = "block"; //si lo pongo en none, de la pantalla de inicio me salta a la de GAMEOVER
    

    gameGo = new Game();
    console.log(gameGo);

    gameGo.gameLoop();
}

//iniciar el juego
inicioBtn.addEventListener ("click", startGame); 