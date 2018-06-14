var quizzesArray = require("./question")
var inquirer = require("inquirer")

var qnum = 0;
var correct = 0;
var incorrect = 0;

inquirer.prompt([
    {
        type: "list",
        message: "Would you like to study basic flashcards or cloze flashcards?",
        choices: ["basic", "cloze"],
        name: "cardType"
    }
]).then(function(answer){
    if(answer.cardType === "basic"){
        askBasicQuestion()
    }
    else{
        askClozeQuestion()
    }
});


counter = 0;

function askBasicQuestion(){
    inquirer.prompt([
        {
            type: "input",
            message: quizzesArray[0][qnum].front,
            name: "response"
        }
    ]).then(function(answer){
        if(answer.response.toLowerCase() === quizzesArray[0][qnum].back.toLowerCase()){
            console.log("Correct!")
            qnum++;
            correct++;
            if(qnum <= 9){
                askBasicQuestion()
            }
            else{
                console.log("You have gone through all the flash cards.")
                console.log("You got " + correct + " correct and " + incorrect + " incorrect")
            }
        }
        else{
            console.log("The correct answer is " + quizzesArray[0][qnum].back)
            qnum++;
            incorrect++;
            if(qnum <= 9){
                askBasicQuestion()
            }
            else{
                console.log("You have gone through all the flash cards.")
                console.log("You got " + correct + " correct and " + incorrect + " incorrect")
            }
        }
    })
}

function askClozeQuestion(){
    inquirer.prompt([
        {
            type: "input",
            message: quizzesArray[1][qnum].partial,
            name: "response"
        }
    ]).then(function(answer){
        if(answer.response.toLowerCase() === quizzesArray[1][qnum].cloze.toLowerCase()){
            console.log("Correct!")
            console.log(quizzesArray[1][qnum].fullText)
            qnum++;
            correct++;
            if(qnum <= 9){
                askClozeQuestion()
            }
            else{
                console.log("You have gone through all the flash cards.")
                console.log("You got " + correct + " correct and " + incorrect + " incorrect")
            }
        }
        else{
            console.log("Incorrect")
            console.log(quizzesArray[1][qnum].fullText)
            qnum++;
            incorrect++;
            if(qnum <= 9){
                askClozeQuestion()
            }
            else{
                console.log("You have gone through all the flash cards.")
                console.log("You got " + correct + " correct and " + incorrect + " incorrect")
            }
        }
    })
}
