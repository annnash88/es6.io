JavaScript

Tuesday 1/2/18 

Variables
- var can be updated and redefined - function scope
	- var is function scoped, if statements will leak var
	- var variables are made to be redefined
	- no keyword turns variable into global scope

- let is declared in a block scope - will not leak from if statements
	- let can only be defined once
	- you can update
	- scope a for loop with let

- const is declared in block scope - will not leak from if statements
	- const stands for constant
	- you cannot update

Object.freeze(object) not part of ES6 but will disallow updating

Scope with var:

(Function() {
	var name = “amber”;
	console.log(name);
})();

Scope with const:
Const name = “amber;

{ 	const name = “amber”;
	console.log(name);
}

Variable access:

Temporal deadzone
var pizza = “deep dish (pizza emojis)”;

Cannot access a variable before it has been defined (let/const will break) var will come up as undefined


ES6 Convention:
Use const unless you need to rebind


Arrow functions
	- implicit returns
	- anonymous functions (ex: let foo = () => bar)

To read:
Iffy Statements
Read Ben Alman article, 'Immediately-invoked Function Expression'
"http://benalman.com/news/2010/11/immediately-invoked-function-expression/"

Mathias Bynens, "ES6 const is not about immutability"
"https://mathiasbynens.be/notes/es6-const"

Kyle Simpson Scope
"https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20%26%20beyond/ch2.md"
