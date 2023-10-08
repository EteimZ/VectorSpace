import { Vector, Matrix, VectorSpace } from "./modules/linear.js";

const canvas = document.getElementById("graph");
const ctx = canvas.getContext("2d");

let vs = new VectorSpace(canvas, ctx);
vs.init();

vs.render();

const v1 = new Vector(50, 100, "blue");
vs.addVector(v1);

const m = new Matrix([1, 1], [0, 1]);
vs.transform(m);

const v2 = new Vector(50, 200, "orange");
vs.addVector(v2);


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