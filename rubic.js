const { doDuring } = require("async");
const { SSL_OP_SINGLE_DH_USE } = require("constants");

console.log("Hello Object orented Rubik !");

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
  // function changeforSurfaceColor(input1, input2, input3, input4) {
  //   temp = input1;
  //   for (let i = 0; i < 3; i++) {
  //     temp = input4[i];
  //     input4[i] = input3[i];
  //     input3[i] = input2[i];
  //     input2[i] = input1[i];
  //     input1[i] = temp;
  //   }
  // }

  function changeforSurfaceColor2(input1, input2, input3, input4) {
    const temp1 = input1.map((x) => x);
    const temp2 = input2.map((x) => x);
    const temp3 = input3.map((x) => x);
    const temp4 = input4.map((x) => x);
    for (let i = 0; i < 3; i++) {
      input2[i] = temp1[i];
      input3[i] = temp2[i];
      input4[i] = temp3[i];
      input1[i] = temp4[i];
    }
  }

  this.moveUp = function () {
    changeforSurfaceColor2(back, right, front, left);
  };
  this.moveUpCC = function () {
    changeforSurfaceColor2(right, back, left, front);
  };
  this.moveRight = function () {
    changeforSurfaceColor(back, right, front, left);
  };
  this.moveRightCC = function () {
    changeforSurfaceColor(back, right, front, left);
  };
  this.moveLeft = function () {
    changeforSurfaceColor(back, right, front, left);
  };
  this.moveLeftCC = function () {
    changeforSurfaceColor(back, right, front, left);
  };
  this.moveForward = function () {
    changeforSurfaceColor(back, right, front, left);
  };
  this.moveForwardCC = function () {
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

defult.printRubic();
/**
 * 
 * 
/**/
//let moveUp = () => {};

// console.log(rubic);
