/** @type {HTMLCanvasElement} */
const cvn3 = document.getElementById('cnv3');
const ctx3 = cnv3.getContext("2d");
cnv3.width = 500;
cnv3.height = 1000;
numberOfEnemies2 = 100;
totalEnemy3 = [];
let gameFram3 = 0;


class Enemy3 {
    constructor(){
        this.image3 = new Image();
        this.image3.src = 'enemy3.png';
        this.speed2 = Math.random() * 4 + 1;
        this.spriteWidth3 = 218;
        this.spriteHeight3 = 177;
        this.width3 = this.spriteWidth3 / 2;
        this.height3 = this.spriteHeight3 /2;
        this.x = Math.random() * (cnv3.width - this.width3);
        this.y = Math.random() * (cnv3.height - this.height3);
        this.frame = 0;
        this.flapSpeed3 = Math.floor(Math.random() * 3 + 1);
        this.angle2 = Math.random() * 250;
        this.angleSpeed2 = Math.random() * 5.5 + 0.5;
    }
    update() {
        this.x = 250 * Math.cos(this.angle2 * Math.PI/200) + (cnv3.width/2 - this.width3/2);
        this.y = 500 * Math.sin(this.angle2 * Math.PI/300) + (cnv3.height/2 - this.height3/2);
        this.angle2 += this.angleSpeed2;
        if (this.x + this.width3 < 0) this.x = cnv3.width;
        if(gameFram3 % this.flapSpeed3 === 0) {
              this.frame > 4 ? this.frame = 0 : this.frame++;
        }
        this.draw();
    }
    draw() {
        // ctx.strokeRect(this.x,this.y,this.width,this.height);
        ctx3.drawImage(this.image3, this.frame * this.spriteWidth3, 0, this.spriteWidth3, this.spriteHeight3, this.x, this.y, this.width3, this.height3)
    }
};

for (let i = 0; i < numberOfEnemies2; i++){
     totalEnemy3.push(new Enemy3());
}

function animate3() {
    ctx3.clearRect(0, 0, cnv3.width, cnv3.height);
    totalEnemy3.forEach(enemy => {
       enemy.update();
    });
    gameFram++;
    requestAnimationFrame(animate3);
};
animate3();
