class Game {
    constructor(){
        //propiedades o elementos del juego
        //fondo
        this.fondo = new Image();
        this.fondo.src= "./imagenes/fondo-juego.png";

        this.mushuObj = new Mushu();
        this.appleObj = new Manzana();
        this.sandiaObj = new Sandia();
        this.cerezaObj = new Cereza();
        this.platanoObj = new Platano();

        this.frames = 0; //aumenta 60 veces por segundo
        this.isGameOn = true;

        this.width = canvas.width;
        this.height = canvas.height;
    }


    gameOver = () => {
        //detiene el juego
        this.isGameOn = false;
        canvas.style.display = "none";
    }

    drawFondo = () => {
        ctx.drawImage (this.fondo, 0, 0, this.width, this.height); //tiene que ser drawImage porque es predeterminado
    }

    gameLoop = () => {
        //1.limpiar el canvas
        ctx.clearRect (0, 0, canvas.width, canvas.height)

        //3.dibujado de los elementos
        this.drawFondo(); //se tiene que generar sola en bucle.
        this.mushuObj.drawMushu();
        this.appleObj.drawManzana();
        this.sandiaObj.drawSandia();
        this.cerezaObj.drawCereza();
        this.platanoObj.drawPlatano();

        //2.acciones y movimientos
        this.appleObj.movimientoApple();
        this.sandiaObj.movimientoSandia();
        this.cerezaObj.movimientoCereza();
        this.platanoObj.movimientoPlatano();
        //4.control de la recursión
        if (this.isGameOn === true){
           requestAnimationFrame(this.gameLoop) 
        }
    }
}
