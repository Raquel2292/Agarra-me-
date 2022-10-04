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

        //musica aquí

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
            //console.log("el score es: ", this.score);

            this.manzanaArr.shift()
        }
    }

    mushuCollisionManzana = () => {
        //console.log(this.manzanaArr.length)
        this.manzanaArr.forEach ((eachManzana, index) => {
            if (this.mushuObj.x < eachManzana.x + eachManzana.w &&
                this.mushuObj.x + this.mushuObj.w > eachManzana.x &&
                this.mushuObj.y < eachManzana.y + eachManzana.h &&
                this.mushuObj.h + this.mushuObj.y > eachManzana.y)
            {
                this.manzanaArr.splice(index,1)
                this.score++
                console.log("el score es: ", this.score);
            }
        })
    }

    mushuCollisionSandia = () => {
        this.sandiaArr.forEach ((eachSandia, index) => {
            if (this.mushuObj.x < eachSandia.x + eachSandia.w &&
                this.mushuObj.x + this.mushuObj.w > eachSandia.x &&
                this.mushuObj.y < eachSandia.y + eachSandia.h &&
                this.mushuObj.h + this.mushuObj.y > eachSandia.y)
            {
                this.sandiaArr.splice(index,1)
            }
        })
    }

    mushuCollisionCereza = () => {
        this.cerezaArr.forEach ((eachCereza, index) => {
            if (this.mushuObj.x < eachCereza.x + eachCereza.w &&
                this.mushuObj.x + this.mushuObj.w > eachCereza.x &&
                this.mushuObj.y < eachCereza.y + eachCereza.h &&
                this.mushuObj.h + this.mushuObj.y > eachCereza.y)
            {
                this.cerezaArr.splice(index,1)
            }
        })
    }

    mushuCollisionPlatano = () => {
        this.platanoArr.forEach ((eachPlatano, index) => {
            if (this.mushuObj.x < eachPlatano.x + eachPlatano.w &&
                this.mushuObj.x + this.mushuObj.w > eachPlatano.x &&
                this.mushuObj.y < eachPlatano.y + eachPlatano.h &&
                this.mushuObj.h + this.mushuObj.y > eachPlatano.y)
            {
                this.platanoArr.splice(index,1)
            }
        })
    }

    mushuCollisionPocion = () => {
        this.pocionArr.forEach ((eachPocion, index) => {
            if (this.mushuObj.x < eachPocion.x + eachPocion.w &&
                this.mushuObj.x + this.mushuObj.w > eachPocion.x &&
                this.mushuObj.y < eachPocion.y + eachPocion.h &&
                this.mushuObj.h + this.mushuObj.y > eachPocion.y)
            {
                this.pocionArr.splice(index,1)
                this.gameOver();
            }
        })
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

    gameOver = () => {
        //detiene el juego
        this.isGameOn = false;
        //ocultar el canvas
        canvas.style.display = "none";
        //mostrar la pantalla gameover
        gameOver.style.display = "block";
    }

    gameScore = () => {
        if(this.manzanaArr.length !== 0 && this.manzanaArr[0].x < -50){
            this.score++
            console.log("el score es: ", this.score)
            //this.manzanaArr.shift()
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
        this.gameScore()
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

        //invocacion funciones
        this.repeatManzana();
        this.repeatSandia();
        this.repeatCereza();
        this.repeatPlatano();
        this.repeatPocion();
        this.mushuCollisionManzana();
        this.mushuCollisionSandia();
        this.mushuCollisionCereza();
        this.mushuCollisionPlatano();
        this.mushuCollisionPocion();
       //this.gameScore();
        

        //4.control de la recursión
        if (this.isGameOn === true){
           requestAnimationFrame(this.gameLoop) 
        }
    }
}
