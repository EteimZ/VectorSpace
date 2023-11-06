// A vector class it takes in context, x, y and color
export class Matrix {
    constructor(x, y) {
        /*
        x corresponds to the i row of the matrix
        y corresponds to the j row of the matrix

        They both consist of two values in an array
        */
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

    add(other) {
        let x = this.x + other.x;
        let y = this.y + other.y;
        let color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`

        return new Vector(x, y, color);
    }

    sub(other) {
        let x = this.x - other.x;
        let y = this.y - other.y;
        let color = this.randomColor();
        return new Vector(x, y, color);
    }

    scale(x){
        return this.length *= x;
    }

    angle(){
        return Math.atan2(this.y, this.x);
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    set length(x) {
        var angle = this.angle();
        this.x = Math.cos(angle) * x;
        this.y = Math.sin(angle) * x;
    }

    randomColor(){
        return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
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
        //this.ctx.restore();
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
        this.ctx.clearRect(-250, -250, this.canvas.width, this.canvas.height);
        
        /*
         i  j
        [1, 0]
        [0, 1]

        [1, 3]
        [-2, 0]
        */
       
        console.log(matrix.x[1])
        this.ctx.transform(matrix.x[0], matrix.x[1], matrix.y[0], matrix.y[1], 0, 0);

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
