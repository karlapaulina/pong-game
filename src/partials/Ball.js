import { SVG_NS } from '../settings';

export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1;


        this.reset();
    }

    wallCollision() {
       if (this.x - this.radius <= 0 || this.x + this.radius >= this.boardWidth) {
           this.vx = -this.vx;
       } else if (this.y - this.radius <= 0 || this.y + this.radius >= this.boardHeight) {
           this.vy =  -this.vy;
       }

    }

    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;

        // generates random number between -5 and 5
        this.vy = 0;
        while(this.vy === 0){
        this.vy = Math.floor(Math.random() * 10 - 5);
    }
        console.log(this.vy);
        // a number between -5 and 5, based on this.vy
        this.vx = this.direction * (6 - Math.abs(this.vy));
        console.log(this.vx);
    }

    render(svg) {
        this.x += this.vx;
        this.y += this.vy

        this.wallCollision();

        let circle = document.createElementNS(SVG_NS, 'circle');
        //your code goes here
        circle.setAttributeNS(null, 'fill', '#FFF');
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'cx', this.x);
        circle.setAttributeNS(null, 'cy', this.y);

        svg.appendChild(circle);
    }

}