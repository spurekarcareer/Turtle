;

turnflag = false;
deg = 0;

function main() {
    init();
    gameLoop();
};


function init() {
    H = window.innerHeight-100;
    W = window.innerWidth-100;

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.height = H;
    canvas.width = H;
    ctx.fillStyle = "#2E2E2E";
    ctx.fillRect(0,0,H,H);

    player = new Player();

    addEventListener('keydown', keypress, false);
};

function gameLoop() {
    draw();
    setTimeout(gameLoop, 100);
};

function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = "#2E2E2E";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    ctx.translate(player.xpos,player.ypos);
    ctx.rotate(deg*Math.PI/180);
    deg = 0;
    ctx.translate(-player.xpos,-player.ypos);

    player.draw();

    ctx.restore();
};

var Player = function() {
    this.xpos = canvas.width/2;
    this.ypos = canvas.height/2;

    this.draw = function() {
        var img = new Image();
        img.src = 'Turtle.png';
        ctx.drawImage(img,this.xpos-img.width/2,this.ypos-img.height/2);
    }

    this.moveLeft = function(dist) {
        this.xpos -= dist;
        console.log("left");
    }
    this.moveRight = function(dist) {
        this.xpos += dist;
        console.log("right");
    }
    this.moveForward = function(dist) {
        this.ypos -= dist;
        console.log("forward");
    }
    this.moveReverse = function(dist) {
        this.ypos += dist;
        console.log("reverse");
    }
};

function keypress(e) { //e is event given by listener
    switch (e.which) {
        case 37: //left arrow
            player.moveLeft(20);
            break;
        case 38: //up arrow
            player.moveForward(20);
            break;
        case 39: //right arrow
            player.moveRight(20);
            break;
        case 40: //down arrow
            player.moveReverse(20);
            break;
        case 32: //spacebar
            turnflag = true;
            deg += 90;
            console.log("turn" + deg);
            break;
        default:
            break;
    }
};
