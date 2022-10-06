
const canvas = document.querySelector ("#my-canvas");
const ctx = canvas.getContext ("2d");
const inicioScreen = document.querySelector ("#pantalla-inicio");
const inicioBtn = document.querySelector("#boton-inicio");
const gameOver = document.querySelector("#gameover-screen");
const volverAjugar = document.querySelector ("#jugar-btn");
const volverAinicio = document.querySelector ("#inicio-btn");

let gameGo;
let audioGo = new Audio();
audioGo.src="./musica/hombresDeAccion.mp3" 
let audioReset = new Audio();
audioReset.src="./musica/mushu.mp3"

const startGame = () => {

    console.log("iniciando el juego");

    inicioScreen.style.display = "none";
    canvas.style.display = "block"; //si lo pongo en none, de la pantalla de inicio me salta a la de GAMEOVER
    gameOver.style.display = "none";

    gameGo = new Game();
    console.log(gameGo);
    audioGo.play();

    gameGo.gameLoop();
}


const inicioJuego = () => {
    inicioScreen.style.display = "flex";
    canvas.style.display = "none";
    gameOver.style.display = "none";
}


//iniciar el juego
inicioBtn.addEventListener ("click", startGame); 
volverAjugar.addEventListener ("click", startGame);
volverAinicio.addEventListener ("click", inicioJuego);


//teclas flechas hacia los lados mushu se mueve hacia un lado o el otro
window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight"){
        console.log ("mushu hacia la derecha")
        gameGo.mushuObj.movimientoMushuDcha();
    }
    else if (event.code === "ArrowLeft"){
        console.log ("mushu hacia la izquierda")
        
        gameGo.mushuObj.movimientoMushuIzq();
    }
})