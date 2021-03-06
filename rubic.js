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
  function changeforSurfaceColor(input1, input2, input3, input4) {
    temp = input1;
    for (let i = 0; i < 3; i++) {
      temp = input4[i];
      input4[i] = input3[i];
      input3[i] = input2[i];
      input2[i] = input1[i];
      input1[i] = temp;
    }
  }
  this.moveUp = function () {
    changeforSurfaceColor(back, right, front, left);
  };
  this.moveUpCC = function () {
    changeforSurfaceColor(right, front, left, back);
  };
  this.moveUp = function () {
    changeforSurfaceColor(back, right, front, left);
  };
  this.moveUp = function () {
    changeforSurfaceColor(back, right, front, left);
  };

  this.printRubic = function () {
    console.log("up", up);
    console.log("down", down);
    console.log("right", right);
    console.log("left", left);
    console.log("front", front);
    console.log("back", back);
  };
  // this.NewRubic = function () {
  //   this.up[0] = "sosis";
  // };
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
  ["o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ["r", "r", "r", "r", "r", "r", "r", "r", "r"],
  ["b", "b", "b", "b", "b", "b", "b", "b", "b"],
  ["g", "g", "g", "g", "g", "g", "g", "g", "g"],
  ["w", "w", "w", "w", "w", "w", "w", "w", "w"],
  ["y", "y", "y", "y", "y", "y", "y", "y", "y"],

  "defult rubic",
  9
);

//defult.NewRubic();
//defult.printRubic();
defult.moveUp();
defult.printRubic();
/**
 * 
 * 
/**/
//let moveUp = () => {};

// console.log(rubic);
