import { Vector, Matrix, VectorSpace } from "./modules/linear.js";

const canvas = document.getElementById("graph");
const ctx = canvas.getContext("2d");

let vs = new VectorSpace(canvas, ctx);
vs.init();

vs.render();

const v1 = new Vector(50, 100, "blue");
vs.addVector(v1);

const v2 = new Vector(50, 200, "orange");
vs.addVector(v2);

const v3 = new Vector(100, 100, "purple");
vs.addVector(v3);

vs.render();
const m = new Matrix([1, -2], [3, 0]);
vs.transform(m);

const m1 = new Matrix([Math.cos(Math.PI / 4), -Math.sin(Math.PI / 4)], [Math.sin(Math.PI / 4), Math.cos(Math.PI / 4)]);

vs.transform(m1);

const v4 = new Vector(-100, -100, "indigo");
vs.addVector(v4);

vs.render();