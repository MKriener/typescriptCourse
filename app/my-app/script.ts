import {Point2D, Point3D} from './lib.js'

const p1 = new Point2D(0,0);
p1.yPos = 1;
p1.xPos = 1;
console.log(p1);
// Static member is not accessible
// console.log(p1.NUM_DIMENSIONS);
console.log(Point2D.NUM_DIMENSIONS);

const p2 = new Point3D(0,0,0);
p2.zPos = 1;
console.log(p2);
console.log(Point3D.NUM_DIMENSIONS);


import * as lib from './lib.js'

const p3 = new lib.Point2D(0,0);
p3.yPos = 1;
p3.xPos = 1;
console.log(p3);
// Static member is not accessible
// console.log(p1.NUM_DIMENSIONS);
console.log(lib.Point2D.NUM_DIMENSIONS);

const p4 = new lib.Point3D(0,0,0);
p4.zPos = 1;
console.log(p4);
console.log(lib.Point3D.NUM_DIMENSIONS);