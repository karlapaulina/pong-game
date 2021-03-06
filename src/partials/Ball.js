import { SVG_NS } from '../settings';

export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1;
        this.sound = new Audio('public/sounds/sos.wav');
        this.sound2 = new Audio('public/sounds/bomb.wav');
        this.reset();
    }

    wallCollision() {
        if (this.x - this.radius <= 0 || this.x + this.radius >= this.boardWidth) {
            this.vx = -this.vx;
        } else if (this.y - this.radius <= 0 || this.y + this.radius >= this.boardHeight) {
            this.vy = -this.vy;
        }

    }

    paddleCollision(player1, player2) {
        if (this.vx > 0) {
            let paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height)
            let [leftX, rightX, topY, bottomY] = paddle

            if (
                (this.x + this.radius >= leftX)
                && (this.x + this.radius <= rightX)
                && (this.y >= topY && this.y <= bottomY)
            ) {
                this.vx = -this.vx;
                this.sound.play();
            }
        } else {
            let paddle = player1.coordinates(player1.x, player1.y, player1.width, player1.height)
            let [leftX, rightX, topY, bottomY] = paddle

            if (
                (this.x - this.radius <= rightX)
                && (this.x - this.radius >= leftX)
                && (this.y >= topY && this.y <= bottomY)
            ) {
                this.vx = -this.vx;
                this.sound2.play();
            }
        }
    }


    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;

        // generates random number between -5 and 5
        this.vy = 0;
        while (this.vy === 0) {
            this.vy = Math.floor(Math.random() * 10 - 5);
        }
        // a number between -5 and 5, based on this.vy
        this.vx = this.direction * (6 - Math.abs(this.vy));
    }

    goal(player) {
        player.score++;
        this.reset();
    }

    render(svg, player1, player2) {

        this.x += this.vx;
        this.y += this.vy

        this.wallCollision();
        this.paddleCollision(player1, player2);


        let circle = document.createElementNS(SVG_NS, 'circle');
        //your code goes here
        circle.setAttributeNS(null, 'fill', '#FFF');
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'cx', this.x);
        circle.setAttributeNS(null, 'cy', this.y);

        svg.appendChild(circle);

        // Detect Goal
        const rightGoal = this.x + this.radius >= this.boardWidth;
        const leftGoal = this.x - this.radius <= 0;

        if (rightGoal) {
            this.goal(player1);
            this.direction = 1;
        } else if (leftGoal) {
            this.goal(player2);
            this.direction = -1;
        }

    }

}

export class Ball2 {
    constructor(radius, boardWidth, boardHeight) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 5;
        this.sound = new Audio('public/sounds/sos.wav');
        this.sound2 = new Audio('public/sounds/bomb.wav');
        this.reset();
    }

    wallCollision() {
        if (this.x - this.radius <= 0 || this.x + this.radius >= this.boardWidth) {
            this.vx = -this.vx;
        } else if (this.y - this.radius <= 0 || this.y + this.radius >= this.boardHeight) {
            this.vy = -this.vy;
        }

    }

    paddleCollision(player1, player2) {
        if (this.vx > 0) {
            let paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height)
            let [leftX, rightX, topY, bottomY] = paddle

            if (
                (this.x + this.radius >= leftX)
                && (this.x + this.radius <= rightX)
                && (this.y >= topY && this.y <= bottomY)
            ) {
                this.vx = -this.vx;
                this.sound.play();
            }
        } else {
            let paddle = player1.coordinates(player1.x, player1.y, player1.width, player1.height)
            let [leftX, rightX, topY, bottomY] = paddle

            if (
                (this.x - this.radius <= rightX)
                && (this.x - this.radius >= leftX)
                && (this.y >= topY && this.y <= bottomY)
            ) {
                this.vx = -this.vx;
                this.sound2.play();
            }
        }
    }


    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;

        // generates random number between -5 and 5
        this.vy = 0;
        while (this.vy === 0) {
            this.vy = Math.floor(Math.random() * 10 - 5);
        }
        // a number between -5 and 5, based on this.vy
        this.vx = this.direction * (6 - Math.abs(this.vy));
    }

    goal(player) {
        player.score++;
        this.reset();
    }

    render(svg, player1, player2) {

        this.x += this.vx;
        this.y += this.vy

        this.wallCollision();
        this.paddleCollision(player1, player2);


        let circle = document.createElementNS(SVG_NS, 'circle');
        //your code goes here
        circle.setAttributeNS(null, 'fill', '#FFF');
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'cx', this.x);
        circle.setAttributeNS(null, 'cy', this.y);

        svg.appendChild(circle);

        // Detect Goal
        const rightGoal = this.x + this.radius >= this.boardWidth;
        const leftGoal = this.x - this.radius <= 0;

        if (rightGoal) {
            this.goal(player1);
            this.direction = 1;
        } else if (leftGoal) {
            this.goal(player2);
            this.direction = -1;
        }

    }

} 