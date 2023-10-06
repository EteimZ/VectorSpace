import { Vector, VectorSpace } from "./modules/linear.js";

const canvas = document.getElementById("graph");
const ctx = canvas.getContext("2d");

let vs = new VectorSpace(canvas, ctx);
vs.drawSpace();

const new_v = new Vector(50, 100, "yellow");
vs.addVector(new_v);

// // visualize vector addition
// const i_hat = new Vector(ctx, 50, 0, "red");
// i_hat.draw();

// const j_hat = new Vector(ctx, 0, 50, "green")
// j_hat.draw();

// let result = i_hat.add(j_hat);
// result.draw();

// Draw the circle
// ctx.beginPath();
// ctx.arc(0, 0, 4, 0, 2 * Math.PI);
// ctx.fillStyle = "black";
// ctx.fill();
// ctx.closePath();

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