class Game {
    constructor(){
        //propiedades o elementos del juego
        //fondo
        this.fondo = new Image();
        this.fondo.src= "./imagenes/fondo-casa.png";

        this.manzanaArr = []; //para que caigan mas manzanas
        this.espadaArr = []; // para que caigan mas espada
        this.grilloArr = []; //para que caigan mas grillos
        this.mulanArr = []; //para que caigan mas mulan
        this.ShanYuArr = []; //para que caigan mas shanyu
        this.fondos = ["./imagenes/fondo-jardin.png", "./imagenes/fondo-casa.png", "./imagenes/fondo-loto.png", "./imagenes/perro-mulan.png"]
        this.fondoGrillo = ["./imagenes/grillo.png", "./imagenes/grillo-mushu.png", "./imagenes/caricias-grillo.png"];
        this.fondoEspada = ["./imagenes/mulan-entrenamiento.png", "./imagenes/mulan-guerrero.png"];

        this.mushuObj = new Mushu();
        //this.appleObj = new Manzana();
        //this.espadaObj = new Espada();
        //this.grilloObj = new Grillo();
        //this.mulanObj = new Mulan();
        //this.shanyuObj = new shanyu ();

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

    mushuCollisionEspada = () => {
        this.espadaArr.forEach ((eachEspada, index) => {
            if (this.mushuObj.x < eachEspada.x + eachEspada.w &&
                this.mushuObj.x + this.mushuObj.w > eachEspada.x &&
                this.mushuObj.y < eachEspada.y + eachEspada.h &&
                this.mushuObj.h + this.mushuObj.y > eachEspada.y)
            {
                this.espadaArr.splice(index,1)
                this.score += 5;

                let random = Math.floor(Math.random() * this.fondoEspada.length);
                this.fondo.src = this.fondoEspada[random];

                this.mushuObj.w = 100;
                this.mushuObj.h = 100;
            }
        })
    }

    mushuCollisionGrillo = () => {
        this.grilloArr.forEach ((eachGrillo, index) => {
            if (this.mushuObj.x < eachGrillo.x + eachGrillo.w &&
                this.mushuObj.x + this.mushuObj.w > eachGrillo.x &&
                this.mushuObj.y < eachGrillo.y + eachGrillo.h &&
                this.mushuObj.h + this.mushuObj.y > eachGrillo.y)
            {
                this.grilloArr.splice(index,1)
                this.score += 10;
               
                let random = Math.floor(Math.random() * this.fondoGrillo.length);
                this.fondo.src = this.fondoGrillo[random];

                this.mushuObj.w = 50;
                this.mushuObj.h = 50;
            }
        })
    }

    mushuCollisionMulan = () => {
        this.mulanArr.forEach ((eachMulan, index) => {
            
            if (this.mushuObj.x < eachMulan.x + eachMulan.w &&
                this.mushuObj.x + this.mushuObj.w > eachMulan.x &&
                this.mushuObj.y < eachMulan.y + eachMulan.h &&
                this.mushuObj.h + this.mushuObj.y > eachMulan.y)
               
            {
                this.mulanArr.splice(index,1)
                this.score += 15;
                
                let random = Math.floor(Math.random() * this.fondos.length);
                console.log(random)
                this.fondo.src = this.fondos[random];
            }                
        })
    }

    mushuCollisionShanyu = () => {
        this.ShanYuArr.forEach ((eachShanYu, index) => {
            if (this.mushuObj.x < eachShanYu.x + eachShanYu.w &&
                this.mushuObj.x + this.mushuObj.w > eachShanYu.x &&
                this.mushuObj.y < eachShanYu.y + eachShanYu.h &&
                this.mushuObj.h + this.mushuObj.y > eachShanYu.y)
            {
                this.ShanYuArr.splice(index,1)
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

    repeatEspada = () => {
        if(this.frames % 180 === 0){
            let nuevaEspada = new Espada()
            this.espadaArr.push(nuevaEspada)
        }
    }

    repeatGrillo = () => {
        if (this.frames % 180 === 0){
            let nuevoGrillo = new Grillo()
            this.grilloArr.push(nuevoGrillo)
        }
    }

    repeatMulan = () => {
        if(this.frames % 180 === 0){
            let nuevoMulan = new Mulan()
            this.mulanArr.push(nuevoMulan)
        }
    }

    repeatShanYu = () => {
        if(this.frames %180 === 0){
            let nuevoShanYu = new ShanYu()
            this.ShanYuArr.push(nuevoShanYu)
        }
    }

    gameOver = () => {
        //detiene el juego
        this.isGameOn = false;
        //ocultar el canvas
        canvas.style.display = "none";
        //mostrar la pantalla gameover
        gameOver.style.display = "block";
        //this.gameOver(audio.pause);
        audioGo.pause();
        //suena cuando se acaba el juego;
        audioReset.play();
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
        this.espadaArr.forEach ((eachEspada) => {
            eachEspada.drawEspada()
        })
        //this.grilloObj.drawGrillo();
        this.grilloArr.forEach ((eachGrillo) => {
            eachGrillo.drawGrillo()
        })
        //this.mulanObj.drawMulan();
        this.mulanArr.forEach ((eachMulan) => {
            eachMulan.drawMulan()
        })

        //this.shanYuObj.drawShanYu();
        this.ShanYuArr.forEach ((eachShanYu) => {
            eachShanYu.drawShanYu()
        })

        //2.acciones y movimientos
        this.manzanaArr.forEach ((eachManzana) => {
            eachManzana.movimientoApple()
        })
        this.gameScore()
        //this.espadaObj.movimientoEspada();
        this.espadaArr.forEach ((eachEspada) => {
            eachEspada.movimientoEspada()
        })

        //this.grilloObj.movimientoGrillo();
        this.grilloArr.forEach ((eachGrillo) => {
            eachGrillo.movimientoGrillo()
        })
        //this.mulanObj.movimientoMulan();
        this.mulanArr.forEach ((eachMulan) => {
            eachMulan.movimientoMulan()
        })
        //this.shanYuObj.movimientoShanYu();
        this.ShanYuArr.forEach ((eachShanYu) => {
            eachShanYu.movimientoShanYu();
        })

        //invocacion funciones
        this.repeatManzana();
        this.repeatEspada();
        this.repeatGrillo();
        this.repeatMulan();
        this.repeatShanYu();
        this.mushuCollisionManzana();
        this.mushuCollisionEspada();
        this.mushuCollisionGrillo();
        this.mushuCollisionMulan();
        this.mushuCollisionShanyu();

       //this.gameScore();
        

        //4.control de la recursión
        if (this.isGameOn === true){
           requestAnimationFrame(this.gameLoop) 
        }
    }
}
