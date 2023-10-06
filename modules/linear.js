// A vector class it takes in context, x, y and color

class Matrix {
    constructor()
}

export class Vector{
    constructor( x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;  
    }

    add(other){
        let x = this.x + other.x;
        let y = this.y + other.y;
        let color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})` 
        
        return new Vector(this.context, x, y, color);
    }
};

export class VectorSpace {
    // A vector space contains vectors
    // The vector space draws the vectors and the grid with the render function
    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
        this.vectors = [];
    }

    drawSpace(){
        this.drawGrid();
        this.addUnitVectors();
    }

    addUnitVectors() {
        let i_hat = new Vector(50, 0, "red");
        let j_hat = new Vector(0, 50, "green");

        this.vectors.push(i_hat, j_hat);
        console.log(i_hat);
        this.drawVector(i_hat);
        this.drawVector(j_hat);
    }

    addVector(vect) {
        this.vectors.push(vect);
        this.drawVector(vect);
    }

    // https://stackoverflow.com/a/6333775
    drawVector(vect) {
        let headlen = 10; // length of head in pixels
        let dx = vect.x - 0;
        let dy = vect.y - 0;
        let angle = Math.atan2(dy, dx);
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(vect.x, vect.y);
        this.ctx.lineTo(vect.x - headlen * Math.cos(angle - Math.PI / 6), vect.y - headlen * Math.sin(angle - Math.PI / 6));
        this.ctx.moveTo(vect.x, vect.y);
        this.ctx.lineTo(vect.x - headlen * Math.cos(angle + Math.PI / 6), vect.y - headlen * Math.sin(angle + Math.PI / 6));
        this.ctx.lineWidth = 3
        this.ctx.strokeStyle = vect.color
        this.ctx.stroke();
    }

    drawGrid() {
        // transform the canvas grid to cartesian
        this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.scale(1, -1);

        // Draw horizontal grid lines
        this.ctx.beginPath();
        this.ctx.moveTo(-250, 0);
        this.ctx.lineTo(250, 0);
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        for (let i = -250; i <= 250; i += 50) {
            this.ctx.beginPath();
            this.ctx.moveTo(-250, i);
            this.ctx.lineTo(250, i);
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }

        // Draw vertical grid lines
        this.ctx.beginPath();
        this.ctx.moveTo(0, -250);
        this.ctx.lineTo(0, 250);
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        for (let i = -250; i <= 250; i += 50) {
            this.ctx.beginPath();
            this.ctx.moveTo(i, -250);
            this.ctx.lineTo(i, 250);
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }
    }
}
