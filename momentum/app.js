const age = prompt("How old r u?");

if (isNaN(age) || age < 0) {
  console.log("Please write as a correct number");
} else if (age < 18) {
  console.log("Too young.....");
} else if (age >= 18 && age <= 50) {
  // && and || or //
  console.log("U may drink");
} else if (age > 50 && age < 80) {
  console.log("U may but U'd better not drink......");
} else if (age === 100) {
  console.log("Really?");
} else if (age === 100) {
  console.log("Do whatever u want");
}
