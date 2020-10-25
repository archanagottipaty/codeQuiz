var theParent = document.querySelector("#unorderedlist");
theParent.addEventListener("click", doSomething, false);


var topElement = document.querySelector('#top');
topElement.setAttribute("display","inline-block");
console.log(topElement);

var timerElement = document.querySelector('#timer');
console.log(timerElement);
timerElement.setAttribute("display", "inline-block");

var feedbackElement = document.querySelector('#feedback');
//feedbackElement.textContent = "";   

var t = 300;
var i = 0;

let highScores = 0;

let questions = [
    {
      question: "What is the type for a Integer?",
      answers: ["Number", "Integer", "Number and BigInt", "Float"],
      "correct": "three"
    },
    {
      question: "Why does Java and Javascript have similar names?",
      answers: ["JavaScript is a stripped-down version of Java", "JavaScript’s syntax is loosely based on Java’s", "They both originated on the island of Java", "None of the above"],
      correct: "two"
    },

    {
        question: "The JavaScript syntax defines two types of values:",
        answers: ["Fixed and Variable", "Float and Integer", "local and global", "array and object"],
        correct: "one"
      },

      {
        question: "Strings are text:",
        answers: ["Written with []","written within double or single quotes", "Written with .", "Written with curly braces"],
        correct: "two"
      },

      {
        question: "What is the assignment operator in Javascript:",
        answers: ["==", "===", "!=", "="],
        correct: "four"
      }
   ]
   
loadQuestion(i);

function loadQuestion(i){  
      
    var theParent = document.querySelector("h4");
    var answerOne = document.querySelector("#one");
    console.log(answerOne)
    var answerTwo = document.querySelector("#two");
    var answerThree = document.querySelector("#three");
    var answerFour = document.querySelector("#four");
    //console.log(theParent);
    theParent.textContent = questions[i].question;
    answerOne.innerHTML= questions[i].answers[0];
    answerTwo.innerHTML = questions[i].answers[1];
    answerThree.innerHTML = questions[i].answers[2];
    answerFour.innerHTML = questions[i].answers[3];
}


a = setInterval(function() { 
    t--;
    //console.log(t);
    //console.log(timerElement);
    timerElement.textContent=t;
    if(t === 0){clearInterval(a)}
     }, 1000);
    
 function doSomething(e) {
    e.preventDefault();
    //startTimer();
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        //console.log(clickedItem);
        //console.log(typeof(clickedItem))
           
                if (clickedItem === questions[i].correct){
                    console.log(i);
                    //console.log(clickedItem);
                    feedbackElement.textContent = "Correct";
                    highScores++;
                    //alert("Correct Answer " + clickedItem);
                                  }
         else {  
            feedbackElement.textContent = "Wrong";  
            t -= 10;   
            }

            setTimeout(function() {
                feedbackElement.textContent = "";  
                if (i < questions.length-1){
                    i++;
                    loadQuestion(i);
                }
                else {
                  console.log("end of game");
                  window.location.href = "highscores.html";}       
            }, 1000);}
            console.log(highScores);
       
            if (i == (questions.length-1) || t==0){

              //window.location.href = "highscores.html";
            }
            localStorage.setItem("high", highScores);
    e.stopPropagation();
    console.log(highScores);
}
console.log(i);
console.log(highScores);




//i++;


//window.location.href = "highscores.html";
// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//       currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
//   }





