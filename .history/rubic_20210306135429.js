const { doDuring } = require("async");
const { SSL_OP_SINGLE_DH_USE } = require("constants");

console.log("Hello Rubik !");

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

  this.moveUp = function () {
    console.log(up);
  };

  this.printRubic = function () {
    console.log("up", up);
    console.log("down", down);
    console.log("right", right);
    console.log("left", left);
    console.log("front", front);
    console.log("back", back);
  };
  this.NewRubic = function () {
    this.up[0] = "sosis";
  };
}
/**
 * 
 * defultRubic = 
 * [UpYello]      UP
 * [DownWhite]    down
 * [RightRed]     R
 * [LeftOrange]   L
 * [FrontBlue]    F
 * [BackGreen]    B
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
  9
);

defult.NewRubic();
defult.moveUp();
/**
 * 
 * 
/**/
let moveUp = () => {};

// console.log(rubic);
