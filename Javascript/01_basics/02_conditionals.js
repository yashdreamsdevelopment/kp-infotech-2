// 1. IF - ELSE

const age = 18;

if (age > 18) {
  console.log("You can have beer");
} else {
  console.log("Have cold drinks");
}

// 2. IF - ELSE IF

const percent = 91;

if (percent >= 90) {
  console.log("A");
} else if (percent >= 70 && percent < 90) {
  console.log("B");
} else if (percent >= 40 && percent < 70) {
  console.log("C");
} else {
  console.log("D");
}

// 3. SWITCH
const char = "b";
switch (char) {
  case "a":
    console.log("apple");
    break;
  case "b":
    console.log("Ball");
  // break;
  case "c":
    console.log("Cat");
    break;

  default:
    console.log(undefined);
    break;
}
