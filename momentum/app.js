function sayHello(nameOfPerson, age) {
  console.log("Hello! My name is", nameOfPerson);
  console.log("I'm", age, "years old.");
}

sayHello("ryu", 25);

sayHello("under", 17);

sayHello("ground", 38);

function junction(a, b) {
  console.log(a, b);
}
junction();
// 결과: undefined undefined //

function plus(a, b) {
  console.log(a + b);
}
// a,b에 아무 값도 안 주면 NaN //
plus(3, 50);

function divide(a, b) {
  console.log(a / b);
}
divide(50, 25);
