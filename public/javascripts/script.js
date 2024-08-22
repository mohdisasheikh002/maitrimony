let mbtn = document.querySelector(".menubtn");
let mbox = document.querySelector(".menubox");
let holder = document.querySelector(".holder");
let flag = 0;

mbtn.addEventListener("click", function () {
  if (flag === 0) {
    mbox.style.width = "60%";
    flag = 1;
  } else {
    mbox.style.width = "0%";
    flag = 0;
  }
});
