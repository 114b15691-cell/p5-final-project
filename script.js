let started = false;

let particles = [];

window.onload = function(){

    document
    .getElementById("startBtn")
    .addEventListener("click", function(){

        document
        .getElementById("landing")
        .style.display = "none";

        started = true;
    });

};

function setup(){

    createCanvas(
        windowWidth,
        windowHeight
    );

    background(0);
}

function draw(){

    if(!started) return;

    background(0,25);

    for(let i = particles.length - 1; i >= 0; i--){

        particles[i].update();
        particles[i].show();

        if(particles[i].life <= 0){

            particles.splice(i,1);
        }
    }
}

function mouseMoved(){

    if(!started) return;

    particles.push(
        new Particle(
            mouseX,
            mouseY
        )
    );
}

function mousePressed(){

    if(!started) return;

    for(let i=0;i<40;i++){

        particles.push(
            new Particle(
                mouseX,
                mouseY
            )
        );
    }
}

function keyPressed(){

    if(key === "c" || key === "C"){

        particles = [];
    }
}

class Particle{

    constructor(x,y){

        this.x = x;
        this.y = y;

        this.dx = random(-3,3);
        this.dy = random(-3,3);

        this.size = random(4,10);

        this.life = 255;

        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
    }

    update(){

        this.x += this.dx;
        this.y += this.dy;

        this.life -= 3;
    }

    show(){

        noStroke();

        fill(
            this.r,
            this.g,
            this.b,
            this.life
        );

        circle(
            this.x,
            this.y,
            this.size
        );
    }
}

function windowResized(){

    resizeCanvas(
        windowWidth,
        windowHeight
    );
}