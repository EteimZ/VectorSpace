// A vector class it takes in context, x, y and color

export class Vector{
    constructor(context, x, y, color){
        this.context = context;
        this.x = x;
        this.y = y;
        this.color = color;  
    }

    // https://stackoverflow.com/a/6333775
    draw(){
        let headlen = 10; // length of head in pixels
        let dx = this.x - 0;
        let dy = this.y - 0;
        let angle = Math.atan2(dy, dx);
        this.context.beginPath();
        this.context.moveTo(0, 0);
        this.context.lineTo(this.x, this.y);
        this.context.lineTo(this.x - headlen * Math.cos(angle - Math.PI / 6), this.y - headlen * Math.sin(angle - Math.PI / 6));
        this.context.moveTo(this.x, this.y);
        this.context.lineTo(this.x - headlen * Math.cos(angle + Math.PI / 6), this.y - headlen * Math.sin(angle + Math.PI / 6));
        this.context.lineWidth = 3
        this.context.strokeStyle = this.color
        this.context.stroke();
    }

    add(other){
        let x = this.x + other.x;
        let y = this.y + other.y;
        
        return new Vector(this.context, x, y, "yellow");
    }
};