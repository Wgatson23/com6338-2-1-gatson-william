// Your code here
function greet(name) {
	var name = prompt("What is your name?");
	alert("Hello " + name);

	var age = prompt("How old are you?");
	var birthday = confirm("Have you had a birthday yet this year?");

	if (birthday) {
		alert("You were born in " + (new Date().getFullYear() - age) + "!");
	} else {
		alert("You were born in " + (new Date().getFullYear() - age - 1) + "!");
	}
}
