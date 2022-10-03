class Game {
    constructor(){
        //propiedades o elementos del juego
        //fondo
        this.fondo = new Image();
        this.fondo.src= "./imagenes/fondo-juego.png";

        this.manzanaArr = []; //para que caigan mas manzanas
        this.sandiaArr = []; // para que caigan mas sandias
        this.cerezaArr = []; //para que caigan mas cerezas
        this.platanoArr = []; //para que caigan mas platanos
        this.pocionArr = []; //para que caigan mas pociones

        this.mushuObj = new Mushu();
        //this.appleObj = new Manzana();
        //this.sandiaObj = new Sandia();
        //this.cerezaObj = new Cereza();
        //this.platanoObj = new Platano();
        //this.pocionObj = new Pocion ();

        this.frames = 0; //aumenta 60 veces por segundo
        this.isGameOn = true;

        this.score = 0;

        this.width = canvas.width;
        this.height = canvas.height;
    }

    gameOver = () => {
        //detiene el juego
        this.isGameOn = false;
        canvas.style.display = "none";
    }

    gameScore = () => {
        if(this.manzanaArr.length !== 0 || this.manzanaArr[0].x < -50){
            this.score++
            console.log("el score es: ", this.score);

            this.manzanaArr.shift()
        }
    }

    drawFondo = () => {
        ctx.drawImage (this.fondo, 0, 0, this.width, this.height); //tiene que ser drawImage porque es predeterminado
    }

    drawScore = () => {
        ctx.font = "20px Arial";
        let scoreStr = `Score: ${this.score}`
        ctx.fillText (scoreStr, canvas.width * 0.4 , 50)
    }

    repeatManzana = () => {
        if (this.frames % 180 === 0){
            let nuevaManzana = new Manzana()
            this.manzanaArr.push(nuevaManzana)
        }   
    }

    repeatSandia = () => {
        if(this.frames % 180 === 0){
            let nuevaSandia = new Sandia()
            this.sandiaArr.push(nuevaSandia)
        }
    }

    repeatCereza = () => {
        if (this.frames % 180 === 0){
            let nuevaCereza = new Cereza()
            this.cerezaArr.push(nuevaCereza)
        }
    }

    repeatPlatano = () => {
        if(this.frames % 180 === 0){
            let nuevoPlatano = new Platano()
            this.platanoArr.push(nuevoPlatano)
        }
    }

    repeatPocion = () => {
        if(this.frames %180 === 0){
            let nuevaPocion = new Pocion()
            this.pocionArr.push(nuevaPocion)
        }
    }
 
    gameLoop = () => {
        this.frames = this.frames + 1;
        //1.limpiar el canvas
        ctx.clearRect (0, 0, canvas.width, canvas.height)

        //3.dibujado de los elementos
        this.drawFondo(); //se tiene que generar sola en bucle.
        this.drawScore();
        this.mushuObj.drawMushu();
        //this.appleObj.drawManzana();
        this.manzanaArr.forEach ((eachManzana) => {
            eachManzana.drawManzana()
        })

        //this.sandiaObj.drawSandia();
        this.sandiaArr.forEach ((eachSandia) => {
            eachSandia.drawSandia()
        })
        //this.cerezaObj.drawCereza();
        this.cerezaArr.forEach ((eachCereza) => {
            eachCereza.drawCereza()
        })
        //this.platanoObj.drawPlatano();
        this.platanoArr.forEach ((eachPlatano) => {
            eachPlatano.drawPlatano()
        })

        //this.pocionObj.drawPocion();
        this.pocionArr.forEach ((eachPocion) => {
            eachPocion.drawPocion()
        })

        //2.acciones y movimientos
        this.manzanaArr.forEach ((eachManzana) => {
            eachManzana.movimientoApple()
        })
        //this.sandiaObj.movimientoSandia();
        this.sandiaArr.forEach ((eachSandia) => {
            eachSandia.movimientoSandia()
        })

        //this.cerezaObj.movimientoCereza();
        this.cerezaArr.forEach ((eachCereza) => {
            eachCereza.movimientoCereza()
        })
        //this.platanoObj.movimientoPlatano();
        this.platanoArr.forEach ((eachPlatano) => {
            eachPlatano.movimientoPlatano()
        })
        //this.pocionObj.movimientoPocion();
        this.pocionArr.forEach ((eachPocion) => {
            eachPocion.movimientoPocion()
        })


        this.repeatManzana();
        this.repeatSandia();
        this.repeatCereza();
        this.repeatPlatano();
        this.repeatPocion();
        //4.control de la recursión
        if (this.isGameOn === true){
           requestAnimationFrame(this.gameLoop) 
        }
    }
}
