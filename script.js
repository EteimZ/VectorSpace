import { Vector } from "./modules/linear.js";

const canvas = document.getElementById("graph");
const ctx = canvas.getContext("2d");

// transform the canvas grid to cartesian
ctx.translate( canvas.width/2, canvas.height/2);
ctx.scale(1,-1);

// Draw horizontal grid lines
ctx.beginPath();
ctx.moveTo(-250, 0);
ctx.lineTo(250, 0);
ctx.lineWidth = 2;
ctx.stroke();

for (let i = -250; i <= 250; i += 50) {
    ctx.beginPath();
    ctx.moveTo(-250, i);
    ctx.lineTo(250, i);
    ctx.lineWidth = 1;
    ctx.stroke();
}

// Draw vertical grid lines
ctx.beginPath(); 
ctx.moveTo(0, -250); 
ctx.lineTo(0, 250);
ctx.lineWidth = 2;
ctx.stroke(); 

for (let i = -250; i <= 250; i += 50) {
    ctx.beginPath(); 
    ctx.moveTo(i, -250); 
    ctx.lineTo(i, 250);
    ctx.lineWidth = 1;
    ctx.stroke(); 
}

// visualize vector addition
const x_unit = new Vector(ctx, 50, 0, "red");
x_unit.draw();

const y_unit = new Vector(ctx, 0, 50, "green")
y_unit.draw();

let result = x_unit.add(y_unit);
result.draw();

// const angleRadians = Math.atan2(-50, 50);
// console.log(angleRadians)

// ctx.save();

// const angleInRadians = Math.PI / 4; // Replace with your desired rotation angle
// ctx.rotate(angleInRadians);

// ctx.strokeStyle = "black"
// ctx.beginPath(); 
// ctx.moveTo(0, -250); 
// ctx.lineTo(0, 250);
// ctx.lineWidth = 2;
// ctx.stroke(); 

// for (let i = -250; i <= 250; i += 50) {
//     ctx.beginPath(); 
//     ctx.moveTo(i, -250); 
//     ctx.lineTo(i, 250);
//     ctx.lineWidth = 1;
//     ctx.stroke(); 
// }

// ctx.restore();

// ctx.strokeStyle = "black"


// ctx.beginPath();
// ctx.moveTo(-250, 0);
// ctx.lineTo(250, 0);
// ctx.lineWidth = 2;
// ctx.stroke();

// for (let i = -250; i <= 250; i += 50) {
//     ctx.beginPath();
//     ctx.moveTo(-250, i);
//     ctx.lineTo(250, i);
//     ctx.lineWidth = 1;
//     ctx.stroke();
// }

// // I have figured out the rotation aspect

// ctx.scale()