class Mushu {
    constructor() {
        this.img = new Image()
        this.img.src = "./imagenes/mushu.png"
        this.x = 300;
        this.y = 450;
        this.w = 70;
        this.h = 70;
        this.speed = 2;
        this.moveMushu = 25;
    }

    drawMushu = () => {
        ctx.drawImage ( this.img, this.x, this.y, this.w, this.h);
    }

    movimientoMushuIzq = () => {
        if (this.x > 0){
        this.x = this.x + -20;
        }
    }
    movimientoMushuDcha =  () => {
        if (this.x < 830){
        this.x = this.x + 20;
        }
    }
   
}