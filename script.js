
const users = [
  { id: 1, name: "Asha", age: 22, active: true, score: 80 },
  { id: 2, name: "Rahul", age: 24, active: false, score: 65 },
  { id: 3, name: "Priya", age: 21, active: true, score: 95 },
  { id: 4, name: "Kiran", age: 23, active: true, score: 75 }
];

// Arrow function and template literals
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Developer"));

// Object destructuring
const { name, age } = users[0];
console.log(`${name} is ${age} years old.`);

// Array destructuring
const [firstUser, secondUser] = users;
console.log(firstUser.name, secondUser.name);

// filter(): select active users
const activeUsers = users.filter((user) => user.active);

// map(): transform data
const userNames = users.map(({ name }) => name);
console.log("All users:", userNames);

// reduce(): calculate total and average score
const totalScore = users.reduce((sum, user) => sum + user.score, 0);
const averageScore = totalScore / users.length;

console.log("Total score:", totalScore);
console.log("Average score:", averageScore);

// Interactive component using an event listener
const button = document.getElementById("showUsers");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  output.innerHTML = activeUsers
    .map((user) => `<p>${user.name} — Score: ${user.score}</p>`)
    .join("");

  console.log("Displayed active users:", activeUsers.length);
});
