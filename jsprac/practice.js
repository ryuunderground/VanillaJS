const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const hello = document.querySelector("h2");

const superEventHandler = {
  mouseOn: () => {
    hello.innerText = "Mouse is here";
    hello.style.color = colors[1];
  },
  mouseLeave: () => {
    hello.innerText = "Mouse is gone";
    hello.style.color = colors[2];
  },
  rClick: () => {
    hello.innerText = "You just resized";
    hello.style.color = colors[3];
  },
  resize: () => {
    hello.innerText = "That was a right click";
    hello.style.color = colors[4];
  },
};

hello.addEventListener("mouseenter", mouseOn);
hello.addEventListener("mouseleave", mouseLeave);
window.addEventListener("contextmenu", rClick);
window.addEventListener("resize", resize);
