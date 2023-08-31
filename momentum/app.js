const _h1_ = document.querySelector(".hello h1");

function handleTitleClick() {
  const currentColor = _h1_.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  _h1_.style.color = newColor;
}

_h1_.addEventListener("click", handleTitleClick);
