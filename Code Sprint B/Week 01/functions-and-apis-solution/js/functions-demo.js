// Function definition:
function greet(firstName) {
  const message = `Welcome, ${firstName}!`;
  console.log(message);
}

// Function invocation:
greet("Mike");
greet("Coraline");

// Functions can have as many parameters as you want.
function welcomeSecretAgent(firstName, lastName) {
  const message = `The name's ${lastName}, ${firstName} ${lastName}.`;
  console.log(message);
}

welcomeSecretAgent("James", "Bond");
welcomeSecretAgent("SpongeBob", "SquarePants");
welcomeSecretAgent("Mike");

// Functions can return information back to whoever invocated them.
function add(num1, num2, num3) {
  const sum = num1 + num2 + num3;
  return sum;
}

const result = add(10, 20, 10);
const ave = result / 3;
console.log(`The average is: ${ave}`);

// Arrow functions - this can be a more concise syntax for functions.
// const addWithArrow = (num1, num2, num3) => {
//   const sum = num1 + num2 + num3;
//   return sum;
// };
const addWithArrow = (num1, num2, num3) => num1 + num2 + num3;
const result2 = addWithArrow(15, 30, 12);
console.log(`The sum is ${result2}.`);

function double(num) {
  return num * 2;
}
const enemyAttacks = [10, 20, 25];
// const doubledAttacks = enemyAttacks.map(double);
const doubledAttacks = enemyAttacks.map((num) => num * 2);
console.log(doubledAttacks);
