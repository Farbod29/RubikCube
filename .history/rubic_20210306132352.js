const { doDuring } = require("async");
const { SSL_OP_SINGLE_DH_USE } = require("constants");

console.log("Hello Robic 2! ");

function Rubic(up, down, right, left, front, back, Name, rubicSize) {
  // Note: Don't worry about 'this' yet. You'll understand it later. Follow along for now.
  this.Name = Name;
  this.rubicSize = rubicSize;
  this.up = up;
  this.down = down;
  this.right = right;
  this.left = left;
  this.front = front;
  this.back = back;
  //   this.sayName = function () {
  //     console.log(`I am ${firstName} ${lastName}`);
  //   };
}
/**
 * 
 * defultRubic = 
 * [UpYello]
 * [DownWhite]
 * [RightRed]
 * [LeftOrange]
 * [FrontBlue]
 * [BackGreen]
 * 
/**/
const defult = new Rubic(
  ["y", "y", "y", "y", "y", "y", "y", "y", "y"],
  ["w", "w", "w", "w", "w", "w", "w", "w", "w"],
  ["r", "r", "r", "r", "r", "r", "r", "r", "r"],
  ["o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ["b", "b", "b", "b", "b", "b", "b", "b", "b"],
  ["g", "g", "g", "g", "g", "g", "g", "g", "g"],
  "defult rubic",
  29
);
console.log("defult down 3 ", defult.down[3]);

/**
 * 
 * 
/**/
let moveUp = () => {};

// console.log(rubic);
