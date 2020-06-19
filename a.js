"use strict";
// let s1 = document.getElementById("s1");
// let s2 = document.getElementById("s2");
// let s3 = document.getElementById("s3");
// let s4 = document.getElementById("s4");
// let s5 = document.getElementById("s5");
// let s6 = document.getElementById("s6");
// let s7 = document.getElementById("s7");
// let s8 = document.getElementById("s8");
// let s9 = document.getElementById("s9");
// let s10 = document.getElementById("s10");
// let s11 = document.getElementById("s11");
// let s12 = document.getElementById("s12");
// let s13 = document.getElementById("s13");
// let s14 = document.getElementById("s14");
// let s15 = document.getElementById("s15");
// let s16 = document.getElementById("s16");
let newgame = document.getElementById("ng");
let nowturn = document.getElementById("turn");
let count = 0;
let reclick;
let hhc = [];

let alle = [
  s1,
  s2,
  s3,
  s4,
  s5,
  s6,
  s7,
  s8,
  s9,
  s10,
  s11,
  s12,
  s13,
  s14,
  s15,
  s16,
];

let highscore = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
for (let p of highscore) {
  p = document.getElementById(`${p}`);
}

for (let x of alle) {
  x = document.getElementById(`${x}`);
}

let colorr = [
  "black",
  "black",
  "red",
  "red",
  "blue",
  "blue",
  "yellow",
  "yellow",
  "purple",
  "purple",
  "cyan",
  "cyan",
  "orange",
  "orange",
  "green",
  "green",
];

let turn = 0;
nowturn.innerText = `Turn: ${turn}`;
let gamecolor = [];
// s1.addEventListener("click", changecolor);
// s2.addEventListener("click", changecolor);
// s3.addEventListener("click", changecolor);
// s4.addEventListener("click", changecolor);
// s5.addEventListener("click", changecolor);
// s6.addEventListener("click", changecolor);
// s7.addEventListener("click", changecolor);
// s8.addEventListener("click", changecolor);
// s9.addEventListener("click", changecolor);
// s10.addEventListener("click", changecolor);
// s11.addEventListener("click", changecolor);
// s12.addEventListener("click", changecolor);
// s13.addEventListener("click", changecolor);
// s14.addEventListener("click", changecolor);
// s15.addEventListener("click", changecolor);
// s16.addEventListener("click", changecolor);
for (let x of alle) {
  x.addEventListener("click", changecolor);
}

newgame.addEventListener("click", addcolor);

function xep() {
  hhc = localStorage.getItem("hiscore").split(",");
  for (let i = 0; i < 10; i++) {
    if (typeof hhc[i] == "string") {
      highscore[i].innerText = `${i + 1}. ${hhc[i]}`;
    }
  }

  console.log(hhc);
}
// xep();
// console.log(localStorage.getItem("hiscore"));
// highscore[0].innerText = localStorage.getItem("hiscore");
// console.log(highscore[0].innerText);
function addcolor() {
  turn = 0;
  nowturn.innerText = `Turn: ${turn}`;
  let cotemp = colorr.slice();
  for (let i = 0; i < 16; i++) {
    let y = Math.floor(Math.random() * cotemp.length);
    gamecolor[i] = cotemp[y];
    cotemp.splice(y, 1);
  }
  console.log(gamecolor);
  //   s1.style.backgroundColor = "white";
  //   s2.style.backgroundColor = "white";
  //   s3.style.backgroundColor = "white";
  //   s4.style.backgroundColor = "white";
  //   s5.style.backgroundColor = "white";
  //   s6.style.backgroundColor = "white";
  //   s7.style.backgroundColor = "white";
  //   s8.style.backgroundColor = "white";
  //   s9.style.backgroundColor = "white";
  //   s10.style.backgroundColor = "white";
  //   s11.style.backgroundColor = "white";
  //   s12.style.backgroundColor = "white";
  //   s13.style.backgroundColor = "white";
  //   s14.style.backgroundColor = "white";
  //   s15.style.backgroundColor = "white";
  //   s16.style.backgroundColor = "white";
  for (let x of alle) {
    x.style.backgroundColor = "white";
  }
  for (let x of alle) {
    x.addEventListener("click", changecolor);
  }
  xep();
}

function rewhite() {
  this.style.backgroundColor = "white";
  reclick.style.backgroundColor = "white";
  this.removeEventListener("mouseout", rewhite);
}

function changecolor() {
  this.style.backgroundColor =
    gamecolor[Number(this.id.slice(1, this.id.length)) - 1];
  count++;
  turn++;
  nowturn.innerText = `Turn: ${turn}`;

  this.removeEventListener("click", changecolor);
  if (count == 1) {
    reclick = this;
  }

  if (
    this.style.backgroundColor !== reclick.style.backgroundColor &&
    count == 2
  ) {
    count = 0;
    this.addEventListener("mouseout", rewhite);
    this.addEventListener("click", changecolor);
    reclick.addEventListener("click", changecolor);
  } else if (
    this.style.backgroundColor == reclick.style.backgroundColor &&
    count == 2
  ) {
    count = 0;
    this.removeEventListener("click", changecolor);
    reclick.removeEventListener("click", changecolor);
    let check = false;
    for (let x of alle) {
      if (x.style.backgroundColor == "white") {
        check = true;
        break;
      } else {
        check = false;
      }
    }
    if (check == false) {
      alert("you win");

      hhc.push(turn);
      hhc.sort(function (a, b) {
        return a - b;
      });
      if (hhc.length == 11) {
        hhc.pop();
      }
      localStorage.setItem("hiscore", `${hhc}`);
      xep();
      console.log(hhc);
    }
  }
}

addcolor();
