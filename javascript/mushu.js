class Mushu {
    constructor() {
        this.img = new Image()
        this.img.src = "./imagenes/mushu.png"
        this.x = 300;
        this.y = 700;
        this.w = 50;
        this.h = 50;
        this.speed = 2;
        this.moveMushu = 25;
    }

    drawMushu = () => {
        ctx.drawImage ( this.img, this.x, this.y, this.w, this.h);
    }

    movimientoMushuIzq = () => {
        this.x = this.x + -20;
    }
    movimientoMushuDcha =  () => {
        this.x = this.x + 20;
    }
   
}