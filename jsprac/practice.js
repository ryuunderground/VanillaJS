const body = document.querySelector("body");

function initialBG() {
  let width = window.innerWidth;
  console.log(width);
  if (width >= 800) {
    body.className = "yellow";
  } else if (width < 800 && width >= 400) {
    body.className = "purple";
  } else {
    body.className = "aqua";
  }
}

function bgChange() {
  let width = window.innerWidth;
  console.log(width);
  if (width >= 800) {
    body.classList.remove("purple");
    body.classList.add("yellow");
    console.log("a");
  } else if (width >= 400 && width < 800) {
    body.classList.remove("aqua", "yellow");
    body.classList.add("purple");
    console.log("b");
  } else {
    body.classList.remove("purple");
    body.classList.add("aqua");
    console.log("c");
  }
}

window.addEventListener("load", initialBG);
window.addEventListener("resize", bgChange);
