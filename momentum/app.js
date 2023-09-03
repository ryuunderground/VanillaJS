const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
/*  const loginInput = document.querySelector("#login-form input");
    const loginButton = document.querySelector("#login-form button");
                                                            도 가능 */

function onLoginBtnClick() {
  const username = loginInput.value;
  // html이 해줌 //
  /* if (username === "") {
    alert("Plz write ur name");
  } else if (username.length > 15) {
    alert("Ur name is too long");
  } */
}

loginButton.addEventListener("click", onLoginBtnClick);
