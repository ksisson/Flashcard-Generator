var ClozeCard = require("./ClozeCard");
var BasicCard = require("./BasicCard");


var BCq1 = new BasicCard("Which company created Javascript?", "Netscape")
var BCq2 = new BasicCard("How many days did it take to write Javascript?", "10")
var BCq3 = new BasicCard("What was the first version of Javascript called?", "Mocha")
var BCq4 = new BasicCard("Is JavaScript a front-end, back-end, or full-stack programming language?", "full-stack")
var BCq5 = new BasicCard("Is JavaScript dynamically typed or statically typed?", "dynamically")
var BCq6 = new BasicCard("Is Null an object?", "yes")
var BCq7 = new BasicCard("Is 'undefined' a reserved keyword in JavaScript?", "no")
var BCq8 = new BasicCard("Is Javascript the same as Java?", "no")
var BCq9 = new BasicCard("What does AJAX stand for?", "Asynchronous JavaScript And XML")
var BCq10 = new BasicCard("Does a Javascript function always need an argument?", "no")

var basicQuestions = [BCq1, BCq2, BCq3, BCq4, BCq5, BCq6, BCq7, BCq8, BCq9, BCq10]

var CCq1 = new ClozeCard("Apollo was the only god from Greece who did not get a name change in Rome.","Apollo")
var CCq2 = new ClozeCard("The ancient roman god of war was commonly known as Mars.","Mars")
var CCq3 = new ClozeCard("Jason led the Argonauts in search of the Golden Fleece.","Jason")
var CCq4 = new ClozeCard("Apollo was known as the god of music, truth and prophecy, healing, the sun and light, plague, poetry, and more.","Apollo")
var CCq5 = new ClozeCard("Poseidon was the greek god of the sea.","Poseidon")
var CCq6 = new ClozeCard("Dionysus is the greek god of wine.","Dionysus")
var CCq7 = new ClozeCard("Hera was the wife of Zeus in greek mythology.","Hera")
var CCq8 = new ClozeCard("A centaur is half-man, half-horse in greek mythology.","centaur")
var CCq9 = new ClozeCard("In Greek Mythology, Paris killed Achilles.","Paris")
var CCq10 = new ClozeCard("A minotaur is half human half bull.","bull")

var clozeQuestions = [CCq1, CCq2, CCq3, CCq4, CCq5, CCq6, CCq7, CCq8, CCq9, CCq10]

module.exports = [basicQuestions, clozeQuestions];