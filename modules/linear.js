// A vector class it takes in context, x, y and color

export class Matrix {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export class Vector {
    constructor(x, y, color = "yellow") {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    transform(matrix) {
        this.x = this.x * matrix.x[0] + this.y * matrix.y[0];
        this.y = this.x * matrix.x[1] + this.y * matrix.y[1];
    }

    add(other) {
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
        this.i_hat = new Vector(50, 0, "green");
        this.j_hat = new Vector(0, 50, "red");
        this.vectors = [];
        this.vectors.push(this.i_hat, this.j_hat);
    }

    init() {
        // transform the canvas grid to cartesian
        this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.scale(1, -1);
    }

    render() {
        this.drawGrid();
        for (let i = 0; i < this.vectors.length; i++) {
            this.drawVector(this.vectors[i]);
        }
        this.ctx.beginPath();
        this.ctx.arc(0, 0, 4, 0, 2 * Math.PI);
        this.ctx.fillStyle = "black";
        this.ctx.fill();
        this.ctx.closePath();
    }

    transform(matrix) {
        // this.i_hat.x = 50 * matrix.x[0];
        // this.i_hat.y = 0  * matrix.x[0];
        // this.j_hat.x = 50*matrix.x[1];
        // this.j_hat.y = 50*matrix.y[1];

        //const i_rotate = Math.atan2(-50, 50);

        //this.ctx.transform(1, 0.5, 0, 1, 0, 0); 
        this.ctx.clearRect(-250, -250, this.canvas.width, this.canvas.height);
        //this.ctx.save();
        this.ctx.transform(1, 0, 1, 1, 0, 0); // Shear by 0.5 in the y-axis

        
        this.render();
        
        //this.ctx.restore();
        
        this.drawGrid();

    }

    addVector(vect) {
        this.vectors.push(vect);
        this.render();
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
        // Draw horizontal grid lines

        this.ctx.strokeStyle = "black";

        this.ctx.beginPath();
        this.ctx.moveTo(-500, 0);
        this.ctx.lineTo(500, 0);
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        for (let i = -500; i <= 500; i += 50) {
            this.ctx.beginPath();
            this.ctx.moveTo(-500, i);
            this.ctx.lineTo(500, i);
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }

        // Draw vertical grid lines
        this.ctx.beginPath();
        this.ctx.moveTo(0, -500);
        this.ctx.lineTo(0, 500);
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        for (let i = -500; i <= 500; i += 50) {
            this.ctx.beginPath();
            this.ctx.moveTo(i, -500);
            this.ctx.lineTo(i, 500);
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }
    }
}
