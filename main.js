console.log("hi");
//console.error("This is an error");
//console.warn("This is a warning");

// var, let, const
// var is globally scoped so we stay away from this

// let you can reassign values
let age = 30;
age = 31;
console.log(age);

// const you cannot change because it is a constant
// always use const unless you know you will reassign the value
const ag = 30;
console.log(ag);

// Strings, numbers, boolean, null, undefined
const name = "John";
const a = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

// Concatenation
console.log("My name is " + name + " and I am " + age);
//Template String
const hell = `My name is ${name}`;
console.log(hell);

// String properties + methods
const s = "Hello World";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5).toUpperCase());
// Splits into array
console.log(s.split(""));

// Arrays - variable that hold multiple values and multiple data types
const numbers = new Array(1, 2, 3, 4, 5);
const fruits = ["apples", "oranges", "pears", 10, true];
console.log(numbers);
console.log(fruits[1]);
fruits[3] = "grapes";
fruits.push("mangos");
fruits.unshift("strawberries");
fruits.pop();
console.log(fruits);
console.log(Array.isArray("hello"));
console.log(fruits.indexOf("oranges"));

// Object literals
const person = {
	firstName: "John",
	lastName: "Does",
	age: 30,
	hobbies: ["music", "movies", "sports"],
	address: {
		street: "50 main st",
		city: "Boston",
		state: "MA"
	}
};

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);

// Destructuring
const {
	firstName,
	lastName,
	address: { city }
} = person;
console.log(firstName, city);

// Arrays of objects
const todos = [
	{
		id: 1,
		text: "take out trash",
		isCompleted: true
	},
	{
		id: 2,
		text: "Meet boss",
		isCompleted: true
	},
	{
		id: 3,
		text: "Eat food",
		isCompleted: true
	}
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For
for (let i = 0; i < 10; i++) {
	console.log(i);
}

// While
let i = 0;
while (i < 10) {
	console.log(i);
	i++;
}

// For
for (let i = 0; i < todos.length; i++) {
	console.log(todos[i].text);
}

// For of
for (let todo of todos) {
	console.log(todo);
}

// High order array methods
// forEach, map, filter
// forEach - loops through
// map - allow us to create array from array
// filter - new array based on condition
todos.forEach(function(todo) {
	console.log(todo.text);
});

const todoText = todos.map(function(todo) {
	return todo.text;
});
console.log(todoText);

const todoCompleted = todos
	.filter(function(todo) {
		return todo.isCompleted === true;
	})
	.map(function(todo) {
		return todo.text;
	});
console.log(todoCompleted);

// Conditionals
const t = 10;
// triple equals matches the types as well
if (t === 10) {
	console.log("x is 10");
} else if (x > 10) {
	console.log("x is greater than");
} else {
	console.log("x is not 10");
}

// Ternary operator
const f = 10;
// ? is then, : is else
const color = f > 10 ? "red" : "blue";
console.log(color);

switch (color) {
	case "red":
		console.log("color is red");
		break;
	case "blue":
		console.log("color is blue");
		break;
	default:
		console.log("color is not red or blue");
		break;
}

// Functions
function addNums(num1 = 1, num2 = 2) {
	console.log(num1 + num2);
}
addNums(5, 4);

// Arrow function
const addNum = (num1 = 1, num2 = 2) => num1 + num2;
console.log(addNum());

todos.forEach(todo => console.log(todo));

// Object oriented programming
// Constructors

// Class
class Person {
	constructor(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = new Date(dob);
	}
	getBirthYear() {
		return this.dob.getFullYear();
	}
	getFullNae() {
		return `${this.firstName} ${this.lastName}`;
	}
}

// Instantiate object
const person1 = new Person("John", "Doe", "09/23/93");
console.log(person1.getBirthYear());
console.log(person1.dob.getFullYear());
console.log(person1.getFullNae());

// The DOM
console.log(window);
// Single element
console.log(document.getElementById("my-form"));
console.log(document.querySelector(".container"));

// Multiple element
console.log(document.querySelectorAll(".item"));
console.log(document.getElementsByClassName("item"));

const items = document.querySelectorAll(".item");
items.forEach(item => console.log(item));

const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Ryan";
ul.lastElementChild.innerHTML = "<h1>Hi</h1>";

const btn = document.querySelector(".btn");
btn.style.background = "red";

// btn.addEventListener("mouseout", e => {
// 	e.preventDefault();
// 	console.log("click");
// 	console.log(e);
// 	document.querySelector("#my-form").style.background = "#ccc";
// 	// document.querySelector("body").classList.add("bg-dark");
// 	document.querySelector(".items").lastElementChild.innerHTML =
// 		"<h1>Hello</h1>";
// });

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
	e.preventDefault();
	if (nameInput.value === "" || emailInput.value === "") {
		msg.classList.add("error");
		msg.innerHTML = "Please enter";
		setTimeout(() => msg.remove(), 3000);
	} else {
		const li = document.createElement("li");
		li.appendChild(
			document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
		);
		userList.appendChild(li);

		// Clear Fields
		nameInput.value = "";
		emailInput.value = "";
	}
}
