class Manzana {
    constructor() {
        this.img = new Image()
        this.img.src = "./imagenes/manzana.png" 
        let randomName = Math.random() * 550
        let randomNum = Math.floor(randomName)
        this.x = randomNum;
        this.y = 50;
        this.w = 50;
        this.h = 50;
        this.speed = 4;
        this.moveManzana = 25;
    }

    drawManzana = () => {
        ctx.drawImage (this.img, this.x, this.y, this.w, this.h);
    }

    movimientoApple = () => {
        this.y = this.y + this.speed;
    }
   
}

class Espada {
    constructor() {
        this.img = new Image()
        this.img.src = "./imagenes/espada.png"
        let randomName = Math.random() * 550
        let randomNum = Math.floor(randomName)
        this.x = randomNum;
        this.y = 50;
        this.w = 60;
        this.h = 60;
        this.speed = 6;
        this.moveSandia = 25;
    }

    drawEspada = () => {
        ctx.drawImage (this.img, this.x, this.y, this.w, this.h);
    }

    movimientoEspada = () => {
        this.y = this.y + this.speed;
    }
   
}

class Grillo{
    constructor() {
        this.img = new Image()
        this.img.src = "./imagenes/grillo.png"
        let randomName = Math.random() * 550
        let randomNum = Math.floor(randomName)
        this.x = randomNum;
        this.y = 50;
        this.w = 60;
        this.h = 60;
        this.speed = 5;
        this.moveGrillo = 25;
    }

    drawGrillo = () => {
        ctx.drawImage (this.img, this.x, this.y, this.w, this.h);
    }

    movimientoGrillo = () => {
        this.y = this.y + this.speed;
    }
   
}

class Mulan{
    constructor() {
        this.img = new Image()
        this.img.src = "./imagenes/mulan.png"
        let randomName = Math.random() * 550
        let randomNum = Math.floor(randomName)
        this.x = randomNum;
        this.y = 50;
        this.w = 60;
        this.h = 60;
        this.speed = 3;
        this.moveMulan = 25;
    }

    drawMulan = () => {
        ctx.drawImage (this.img, this.x, this.y, this.w, this.h);
    }

    movimientoMulan = () => {
        this.y = this.y + this.speed;
    }
}

    class ShanYu{
        constructor() {
            this.img = new Image()
            this.img.src = "./imagenes/shanyu.png"
            let randomName = Math.random() * 550
            let randomNum = Math.floor(randomName)
            this.x = randomNum;
            this.y = 50;
            this.w = 90;
            this.h = 90;
            this.speed = 7;
            this.movePlatano = 25;
        }
    
        drawShanYu = () => {
            ctx.drawImage (this.img, this.x, this.y, this.w, this.h);
        }
    
        movimientoShanYu= () => {
            this.y = this.y + this.speed;
        }

}