/** @type {HTMLCanvasElement} */
const cvn4 = document.getElementById('cnv4');
const ctx4 = cnv4.getContext("2d");
cnv4.width = 500;
cnv4.height = 1000;
numberOfEnemies = 10;
totalEnemy4 = [];
let gameFram4 = 0;


class Enemy4 {
    constructor(){
        this.image4 = new Image();
        this.image4.src = 'enemy4.png';
        this.spriteWidth4 = 213;
        this.spriteHeight4 = 213;
        this.width4 = this.spriteWidth4 / 2;
        this.height4 = this.spriteHeight4 /2;
        this.x = Math.random() * (cnv4.width - this.width4);
        this.y = Math.random() * (cnv4.height - this.height4);
        this.newX = Math.random() * cnv4.width;
        this.newY = Math.random() * cnv4.height;
        this.frame = 0;
        this.flapSpeed3 = Math.floor(Math.random() * 3 + 1);
        this.interval = Math.floor(Math.random() * 200 + 50);
    }
    update() {
        if (gameFram4 % this.interval === 0) {
            this.newX = Math.random() * (cnv4.width - this.width4);
            this.newY = Math.random() * (cnv4.height - this.height4);
        }
        let dx = this.x - this.newX;
        let dy = this.y - this.newY;
        this.x -= dx/20;
        this.y -= dy/20;
        if(this.x + this.width4 < 0) this.x = cvn4.width;
        if(gameFram4 % this.flapSpeed3 === 0) {
              this.frame > 4 ? this.frame = 0 : this.frame++;
        }
        this.draw();
    }
    draw() {
        // ctx.strokeRect(this.x,this.y,this.width,this.height);
        ctx4.drawImage(this.image4, this.frame * this.spriteWidth4, 0, this.spriteWidth4, this.spriteHeight4, this.x, this.y, this.width4, this.height4)
    }
};

for (let i = 0; i < numberOfEnemies; i++){
     totalEnemy4.push(new Enemy4());
}

function animate4() {
    ctx4.clearRect(0, 0, cnv4.width, cnv4.height);
    totalEnemy4.forEach(enemy => {
       enemy.update();
    });
    gameFram4++;
    requestAnimationFrame(animate4);
};
animate4();
