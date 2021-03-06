const { doDuring } = require("async");
const { SSL_OP_SINGLE_DH_USE } = require("constants");

console.log("Hello Object orented Rubik !");

function Rubik(up, down, right, left, front, back, Name, rubicSize) {
  // Note: Don't worry about 'this' yet. You'll understand it later. Follow along for now.
  this.Name = Name;
  this.rubicSize = rubicSize;
  this.up = up;
  this.down = down;
  this.right = right;
  this.left = left;
  this.front = front;
  this.back = back;

  function changeforSurfaceColorUpandUpCC(input1, input2, input3, input4) {
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
  function changeforSurfaceColorRightandRightCC(
    input1,
    input2,
    input3,
    input4
  ) {
    const temp1 = input1.map((x) => x);
    const temp2 = input2.map((x) => x);
    const temp3 = input3.map((x) => x);
    const temp4 = input4.map((x) => x);
    let j = 2;
    for (let i = 0; i < 3; i++) {
      input2[j] = temp1[j];
      input3[j] = temp2[j];
      input4[j] = temp3[j];
      input1[j] = temp4[j];
      console.log("temp1[i]", temp1[j], j);
      j = j + 3;
    }
  }
  function changeforSurfaceColorLeftandLeftCC(input1, input2, input3, input4) {
    const temp1 = input1.map((x) => x);
    const temp2 = input2.map((x) => x);
    const temp3 = input3.map((x) => x);
    const temp4 = input4.map((x) => x);
    let j = 0;
    for (let i = 0; i < 3; i++) {
      input2[j] = temp1[j];
      input3[j] = temp2[j];
      input4[j] = temp3[j];
      input1[j] = temp4[j];
      console.log("temp1[i]", temp1[j], j);
      j = j + 3;
    }
  }
  function changeforSurfaceColorFrontandFrontCC(
    input1,
    input2,
    input3,
    input4
  ) {
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
    changeforSurfaceColorUpandUpCC(back, right, front, left);
  };
  this.moveUpCC = function () {
    changeforSurfaceColorUpandUpCC(right, back, left, front);
  };
  this.moveRight = function () {
    changeforSurfaceColorRightandRightCC(front, up, back, down);
  };
  this.moveRightCC = function () {
    changeforSurfaceColorRightandRightCC(down, back, up, front);
  };
  this.moveLeft = function () {
    changeforSurfaceColorLeftandLeftCC(back, up, front, down);
  };
  this.moveLeftCC = function () {
    changeforSurfaceColorLeftandLeftCC(down, front, up, back);
  };
  this.moveForont = function () {
    changeforSurfaceColorFrontandFrontCC(up, right, down, left);
  };
  this.moveForontCC = function () {
    changeforSurfaceColorFrontandFrontCC(left, down, right, up);
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
const defultRubik = new Rubik(
  ["o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ["r", "r", "r", "r", "r", "r", "r", "r", "r"],
  ["b", "b", "b", "b", "b", "b", "b", "b", "b"],
  ["g", "g", "g", "g", "g", "g", "g", "g", "g"],
  ["w", "w", "w", "w", "w", "w", "w", "w", "w"],
  ["y", "y", "y", "y", "y", "y", "y", "y", "y"],
  "defult rubic",
  9
);

const rendomRubic = new Rubik(
  ["b", "w", "g", "w", "w", "y", "w", "y", "y"],
  ["g", "g", "y", "y", "y", "g", "r", "b", "o"],
  ["o", "r", "w", "y", "b", "b", "r", "o", "b"],
  ["o", "g", "r", "w", "g", "w", "y", "o", "w"],
  ["b", "g", "g", "r", "r", "b", "r", "r", "g"],
  ["o", "b", "y", "r", "o", "o", "w", "o", "b"],
  "defult rubic",
  9
);
//defultRubik.moveLeft();
defultRubik.moveForont();
defultRubik.moveForontCC();
defultRubik.moveForont();
defultRubik.moveForontCC();
defultRubik.moveRightCC();
defultRubik.printRubic();
/**
 * algorithm
 * the righty ALG 
/**/
function TherightyALG() {
  defultRubik.moveRight();
  defultRubik.moveUp();
  defultRubik.moveRightCC();
  defultRubik.moveUpCC();
}
//TherightyALG;
//defultRubik.printRubic();
