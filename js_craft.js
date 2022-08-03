/** @type {HTMLCanvasElement} */
const cvn = document.getElementById('cnv');
const ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 1000;
numberOfEnemies = 10;
totalEnemy = [];
let gameFram = 0;


class Enemy {
    constructor(){
        this.image = new Image();
        this.image.src = 'enemy1.png';
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight /2.5;
        this.x = Math.random() * (cnv.width - this.width);
        this.y = Math.random() * (cnv.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    }
    update() {
        this.x += Math.random() * 5 - 2.5;
        this.y += Math.random() * 5 - 2.5;
        if(gameFram % this.flapSpeed === 0) {
              this.frame > 4 ? this.frame = 0 : this.frame++;
        }
        this.draw();
    }
    draw() {
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight,
             this.x, this.y, this.width, this.height)
    }
};

for (let i = 0; i < numberOfEnemies; i++){
     totalEnemy.push(new Enemy());
}

function animate() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    totalEnemy.forEach(enemy => {
       enemy.update();
    });
    gameFram++;
    requestAnimationFrame(animate);
};
animate();

/**enme2 */
const cvn2 = document.getElementById('cnv2');
const ctx2 = cnv2.getContext("2d");
cnv2.width = 500;
cnv2.height = 1000;
numberOfEnemies = 10;
totalEnemy2 = [];
let gameFram2 = 0;


class Enemy2 {
    constructor(){
        this.image2 = new Image();
        this.image2.src = 'enemy2.png';
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth2 = 266;
        this.spriteHeight2 = 188;
        this.width2 = this.spriteWidth2 / 2;
        this.height2 = this.spriteHeight2 /2;
        this.x = Math.random() * (cnv2.width - this.width2);
        this.y = Math.random() * (cnv2.height - this.height2);
        this.frame2 = 0;
        this.flapSpeed2 = Math.floor(Math.random() * 3 + 1);
        this.angle = 0;
        this.angleSpeed = Math.random() * 0.2;

    }
    update() {
        this.x -= this.speed;
        this.y += (Math.random() * 8 + 3) * Math.sin(this.angle);
        this.angle += this.angleSpeed;
        if (this.x + this.width2 < 0) this.x = cnv2.width;
        if(gameFram2 % this.flapSpeed2 === 0) {
              this.frame2 > 4 ? this.frame2 = 0 : this.frame2++;
        }
        this.draw();
    }
    draw() {
        ctx2.drawImage(this.image2, this.frame2 * this.spriteWidth2, 0, this.spriteWidth2, this.spriteHeight2,
             this.x, this.y, this.width2, this.height2)
    }
};

for (let i = 0; i < numberOfEnemies; i++){
     totalEnemy2.push(new Enemy2());
}

function animate2() {
    ctx2.clearRect(0, 0, cnv2.width, cnv2.height);
    totalEnemy2.forEach(enemy => {
       enemy.update();
    });
    gameFram2++;
    requestAnimationFrame(animate2);
};
animate2();