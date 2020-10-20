// === Challenge 1 - Multiply Function ===

function multiply(num1, num2) {
  return num1 * num2;
}

// Or, as an arrow function:
const multiplyArrow = (num1, num2) => num1 * num2;

console.log("Challenge 1:");
console.log(`10 * 20 = ${multiply(10, 20)}`);
console.log(`5 * 2 = ${multiplyArrow(5, 2)}`);

// === Challenge 2 - Array Map ===

const scores = [12, 15, 13, 11];
const newScores = scores.map((score) => score + 3);

console.log("Challenge 2:");
console.log(`The new scores are: ${newScores.join(", ")}`);
